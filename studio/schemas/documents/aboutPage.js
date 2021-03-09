export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About page',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Author photo'
      },
      {
        name: 'bioTitle',
        type: 'string',
        title: 'Biography Title'
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography',
        validation: Rule => Rule.required()
      },
      {
        name: 'artistStatementTitle',
        type: 'string',
        title: 'Artist\'s Statement Title'
      },
      {
        name: 'artistStatement',
        type: 'bioPortableText',
        title: 'Artist\'s Statement'
      },
      {
        name: 'gratitudeTitle',
        type: 'string',
        title: 'Gratitude Title'
      },
      {
        name: 'gratitude',
        type: 'bioPortableText',
        title: 'Gratitude',
        description: 'Include thanks for friends and family who helped with the site and poetry itself'
      },
    ]
  }