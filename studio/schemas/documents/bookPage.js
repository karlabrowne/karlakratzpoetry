export default {
    name: 'bookPage',
    type: 'document',
    title: 'Book page',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Book image'
      },
      {
        name: 'synopsis',
        type: 'bioPortableText',
        title: 'Synopsis',
        validation: Rule => Rule.required()
      },
    //   {
    //     title: 'Publisher links',
    //     name: 'publishers',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'link',
    //         title: 'Link'
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Agent',
    //     name: 'agent',
    //     type: 'reference',
    //     to: { type: 'agent' },
    //     readOnly: true
    //   },
    ]
  }