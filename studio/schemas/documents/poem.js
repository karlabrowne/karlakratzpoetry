import { FiFeather } from 'react-icons/fi'

export default {
    name: 'poem',
    type: 'document',
    title: 'Poems',
    icon: FiFeather,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 600
        }
      },
      {
        name: 'content',
        type: 'bioPortableText',
        title: 'Poem content'
      }
    ],
    preview: {
      select: {
        title: 'name',
      }
    }
  }