export const filterPoems = (arr: Array<any>, i: string) =>
  arr.filter(
    (poem) =>
      poem.categories && poem.categories.some(({ title }) => title === i)
  )
