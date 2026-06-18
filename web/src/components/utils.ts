const NEW_CATEGORY_TITLE = 'new'

export const sortCategoryFilters = <T extends { title: string }>(categories: T[]) => {
  const thematic = categories.filter(
    (c) => c.title.trim().toLowerCase() !== NEW_CATEGORY_TITLE
  )
  const newest = categories.find(
    (c) => c.title.trim().toLowerCase() === NEW_CATEGORY_TITLE
  )
  return newest ? [...thematic, newest] : thematic
}

export const filterPoems = (arr: Array<any>, i: string) =>
  arr.filter(
    (poem) =>
      poem.categories && poem.categories.some(({ title }) => title === i)
  )
