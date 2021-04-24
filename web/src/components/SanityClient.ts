import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

type Client = {
  projectId: string,
  dataset: string,
  apiVersion: string,
  token: string,
  useCdn: boolean
}

// create instance of sanityClient
// this is how you connect your frontend to your sanity studio
const options:Client = {
  //your project ID
  projectId: 'k7wdeuj3',
  //your dataset; defaults to production
  dataset: 'production',
  apiVersion: '2021-04-24',
  token: '',
  useCdn: true
}

const client = sanityClient(options)

const builder = imageUrlBuilder(client)

const urlFor = source => {
  return builder.image(source)
}

export { client, urlFor }