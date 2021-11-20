import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../components/SanityClient'

export const get: RequestHandler = async ({ params }) => {
  const { pageId } = params
  const query = /* groq */ `*[_id == $pageId][0]`
  try {
    const data = await client.fetch(query, { pageId })
    if (data) {
      return {
        body: data,
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
