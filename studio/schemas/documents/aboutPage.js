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
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography',
        validation: Rule => Rule.required()
      },
      {
        name: 'artistStatement',
        type: 'bioPortableText',
        title: 'Artist\'s Statement'
      },
      {
        name: 'acknowledgments',
        type: 'bioPortableText',
        title: 'Acknowledgments'
      },
    ]
  }