import fs from 'fs/promises'
import path from 'path'
import sanityClient from '@sanity/client'
import { blocksToPlainText } from './blocksToPlainText.js'

const options = {
  projectId: 'k7wdeuj3',
  dataset: 'production',
  apiVersion: '2021-04-24',
  token: '',
  useCdn: true,
}

const client = sanityClient(options)

const EXCERPT_LENGTH = 120

function makeExcerpt(text) {
  if (!text) return ''
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= EXCERPT_LENGTH) return normalized
  return `${normalized.slice(0, EXCERPT_LENGTH).trimEnd()}…`
}

function buildSearchText({ name, categories, contentText, backgroundTitle, backgroundText }) {
  return [name, ...(categories ?? []), contentText, backgroundTitle, backgroundText]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

async function prebuild() {
  console.log('[prebuild] Fetching poems from Sanity')

  const poems = await client.fetch(/* groq */ `
    *[_type == "poem" && defined(slug.current) && !(_id in path("drafts.**"))] | order(name asc) {
      name,
      "slug": slug.current,
      featured,
      "categories": categories[]->title,
      content,
      background,
      backgroundTitle
    }
  `)

  if (!poems?.length) {
    throw new Error('No poems found.')
  }

  const slugs = poems.map((poem) => poem.slug)
  const slugListPath = path.join(process.cwd(), 'slug-list.json')
  await fs.writeFile(slugListPath, JSON.stringify(slugs), 'utf-8')
  console.log(`[prebuild] Wrote ${slugs.length} slugs to slug-list.json`)

  const poemEntries = poems.map((poem) => {
      const contentText = blocksToPlainText(poem.content)
      const backgroundText = blocksToPlainText(poem.background)

      return {
        title: poem.name,
        slug: poem.slug,
        href: `/poems/${poem.slug}`,
        categories: poem.categories ?? [],
        excerpt: makeExcerpt(contentText),
        featured: Boolean(poem.featured),
        searchText: buildSearchText({
          name: poem.name,
          categories: poem.categories,
          contentText,
          backgroundTitle: poem.backgroundTitle,
          backgroundText,
        }),
      }
    })

  const searchIndex = {
    poems: poemEntries,
    featuredPoems: poemEntries.filter((poem) => poem.featured),
  }

  const searchIndexPath = path.join(process.cwd(), 'static', 'search-index.json')
  await fs.writeFile(searchIndexPath, JSON.stringify(searchIndex), 'utf-8')
  console.log(`[prebuild] Wrote search index with ${searchIndex.poems.length} poems (${searchIndex.featuredPoems.length} featured)`)
  console.log('[prebuild] Done.')
}

prebuild().catch((error) => {
  console.error('[prebuild] Failed:', error)
  process.exit(1)
})
