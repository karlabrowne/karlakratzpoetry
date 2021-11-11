import type { RequestHandler } from '@sveltejs/kit'
import { client } from '../../components/SanityClient'

export const get: RequestHandler = async () => {
  try {
		const query = /* groq */`{
      "poems": *[_type == 'poem']{_id, slug, name, categories[]->{title}},
      "categoriesArr": *[_type == 'category']{_id, title}
    }`
		const data = await client.fetch(query)
		if (data) {
			return {
				body: data
			};
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
    };
  }
}