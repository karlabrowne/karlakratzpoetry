export type SearchResultType = 'nav' | 'poem' | 'featured'

export type SearchResult = {
  type: SearchResultType
  title: string
  href: string
  subtitle?: string
  score: number
}

export type PoemIndexEntry = {
  title: string
  slug: string
  href: string
  categories: string[]
  excerpt: string
  searchText: string
  featured?: boolean
}

export type SearchIndex = {
  poems: PoemIndexEntry[]
  featuredPoems: PoemIndexEntry[]
}

export type SearchGroups = {
  nav: SearchResult[]
  featured: SearchResult[]
  poems: SearchResult[]
}

export type ResultSection = {
  label: string
  results: SearchResult[]
}

const NAV_ITEMS = [
  { title: 'Home', href: '/' },
  { title: 'Poems', href: '/poems' },
  { title: 'Book', href: '/book' },
  { title: 'About', href: '/about' },
]

let indexPromise: Promise<SearchIndex> | null = null

export function loadSearchIndex(): Promise<SearchIndex> {
  if (!indexPromise) {
    indexPromise = fetch('/search-index.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load search index')
        }
        return res.json() as Promise<SearchIndex>
      })
      .catch((error) => {
        indexPromise = null
        throw error
      })
  }

  return indexPromise
}

function scoreNavItem(title: string, query: string): number {
  const normalizedTitle = title.toLowerCase()

  if (!query) return 100
  if (normalizedTitle === query) return 300
  if (normalizedTitle.startsWith(query)) return 250
  if (normalizedTitle.includes(query)) return 200
  return 0
}

function poemToResult(
  poem: PoemIndexEntry,
  type: 'poem' | 'featured',
  score: number
): SearchResult {
  const subtitle =
    poem.categories.length > 0 ? poem.categories.join(', ') : poem.excerpt || undefined

  return {
    type,
    title: poem.title,
    href: poem.href,
    subtitle,
    score,
  }
}

function scorePoem(poem: PoemIndexEntry, query: string): number {
  const normalizedTitle = poem.title.toLowerCase()

  if (!query) return 0
  if (normalizedTitle === query) return 400
  if (normalizedTitle.startsWith(query)) return 350
  if (normalizedTitle.includes(query)) return 300
  if (poem.searchText.includes(query)) return 150
  return 0
}

export async function search(query: string): Promise<SearchGroups> {
  const normalizedQuery = query.trim().toLowerCase()
  const index = await loadSearchIndex()
  const nav: SearchResult[] = []
  const featured: SearchResult[] = []
  const poems: SearchResult[] = []

  for (const item of NAV_ITEMS) {
    const score = scoreNavItem(item.title, normalizedQuery)
    if (score > 0) {
      nav.push({
        type: 'nav',
        title: item.title,
        href: item.href,
        score,
      })
    }
  }

  if (!normalizedQuery) {
    const featuredPoems =
      index.featuredPoems ?? index.poems.filter((poem) => poem.featured)

    for (const poem of featuredPoems) {
      featured.push(poemToResult(poem, 'featured', 100))
    }
  }

  for (const poem of index.poems) {
    const score = scorePoem(poem, normalizedQuery)
    if (score > 0) {
      poems.push(poemToResult(poem, 'poem', score))
    }
  }

  const byScoreThenTitle = (a: SearchResult, b: SearchResult) => {
    if (b.score !== a.score) return b.score - a.score
    return a.title.localeCompare(b.title)
  }

  nav.sort(byScoreThenTitle)
  featured.sort(byScoreThenTitle)
  poems.sort(byScoreThenTitle)

  return { nav, featured, poems }
}

export function toSections(groups: SearchGroups): ResultSection[] {
  const sections: ResultSection[] = []

  if (groups.nav.length > 0) {
    sections.push({ label: 'Pages', results: groups.nav })
  }

  if (groups.featured.length > 0) {
    sections.push({ label: 'Featured poems', results: groups.featured })
  }

  if (groups.poems.length > 0) {
    sections.push({ label: 'Poems', results: groups.poems })
  }

  return sections
}

export function flattenSections(sections: ResultSection[]): SearchResult[] {
  return sections.flatMap((section) => section.results)
}
