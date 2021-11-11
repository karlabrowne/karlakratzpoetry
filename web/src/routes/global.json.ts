import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../components/SanityClient'

export const get: RequestHandler = async () => {
  const query = /* groq */ `*[_id == "siteSettings"]{ title, email }[0]`
  try {
    const data = await client.fetch(query)
    if (data) {
      return {
        body: data
      }
    } else {
      return {
        status: 404,
        body: new Error('No data found.')
      }
    }
  } catch(err) {
    return {
      status: 500,
      body: err
    }
  }
}