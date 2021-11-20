export const filterPoems = (arr: Array<any>, i: string) => {
  const removeEmptyCats = arr.filter((item) => item.categories !== null)
  return removeEmptyCats.filter((poem) => {
    for (const { title } of poem.categories) {
      return title == i
    }
  })
}
