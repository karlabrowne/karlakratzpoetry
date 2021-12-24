import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../../components/SanityClient'

export const get: RequestHandler = async () => {
  try {
    const poemFields = `
      _id,
      slug,
      name,
      poemImage,
      content,
      backgroundTitle,
      background
    `
    const query = /* groq */ `
      {
        "categories": *[_type == "category"] {
          title,
          "featured": *[
            _type == "poem" 
            && !(_id in path("drafts.**")) 
            && references(^._id)
          ] | order(
            coalesce(featured, false) desc,
            name asc
          )[0] { ${poemFields} }
        },
        "featured": *[_type == 'poem' && featured]{ ${poemFields} }
      }
    `
    const poems = await client.fetch(query)
    if (poems) {
      return {
        body: poems,
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
