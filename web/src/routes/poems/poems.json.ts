import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../../components/SanityClient'

export const get: RequestHandler = async () => {
  try {
    const query = /* groq */ `
      *[_type == 'poem' && featured]{
        _id,
        slug,
        name,
        poemImage,
        content,
        backgroundTitle,
        background
      }`
    const featuredPoemArr = await client.fetch(query)
    const featuredPoem =
      featuredPoemArr[Math.floor(Math.random() * featuredPoemArr.length)]
    if (featuredPoem) {
      return {
        body: featuredPoem,
      }
    } else {
      return {
        status: 404,
        body: new Error('No data found.'),
      }
    }
  } catch (err) {
    return {
      status: 500,
      body: err,
    }
  }
}
