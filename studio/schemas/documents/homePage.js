export default {
    name: 'homePage',
    type: 'document',
    title: 'Home page',
    // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    __experimental_actions: ['create', 'update', 'delete', 'publish'],    
    fields: [
      {
        name: 'heroTitle',
        type: 'string',
        title: 'Hero title',
        validation: Rule => Rule.required()
      },
      {
        name: 'heroDescription',
        type: 'bodyPortableText',
        title: 'Hero description',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Hero image',
        options: {
          hotspot: true,
        },
      },
    ]
  }