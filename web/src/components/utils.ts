export const filterPoems = (arr: Array<any>, i:string) => {
  return arr.filter(({ categories }) => {
    for (const { title } of categories){
      return title == i ? true : false
    }
  })
}