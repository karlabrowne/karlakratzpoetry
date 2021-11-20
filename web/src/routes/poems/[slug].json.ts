import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../../components/SanityClient'

export const get: RequestHandler = async ({ params }) => {
  const { slug } = params
  try {
    const poem = await client.fetch(/* groq */ `*[slug.current == $slug][0]`, {
      slug,
    })

    if (poem) {
      return {
        body: poem,
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
