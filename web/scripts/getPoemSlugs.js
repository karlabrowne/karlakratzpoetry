import fs from 'fs/promises'
import path from 'path'
import sanityClient from '@sanity/client'

const options = {
  projectId: 'k7wdeuj3',
  dataset: 'production',
  apiVersion: '2021-04-24',
  token: '',
  useCdn: true
}

const client = sanityClient(options)

export const getPoemSlugs = async () => {
  console.log(`[preinit] Fetching all poems' slug`)
  const poems = await client.fetch(/* groq */`*[_type == 'poem' && defined(slug.current)][].slug.current`)
  if (!poems) {
    throw new Error('No poems found.')
  }

  console.log(`[preinit] Found ${poems.length} poems, writing slugs to file`)
  const slugListPath = path.join(process.cwd(), 'slug-list.json')
  await fs.writeFile(slugListPath, JSON.stringify(poems), "utf-8")
  console.log(`[preinit] Done.`)
}

getPoemSlugs()