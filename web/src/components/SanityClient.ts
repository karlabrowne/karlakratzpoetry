import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

type Client = {
  projectId: string
  dataset: string
  apiVersion: string
  token: string
  useCdn: boolean
}

const options: Client = {
  projectId: 'k7wdeuj3',
  dataset: 'production',
  apiVersion: '2021-04-24',
  token: '',
  useCdn: true,
}

const client = sanityClient(options)

const builder = imageUrlBuilder(client)

const urlFor = (source) => {
  return builder.image(source)
}

export { client, urlFor }
