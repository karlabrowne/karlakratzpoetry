export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
    //   }
    // },
    // {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5adcab67d7daa3ef427498',
                  title: 'Sanity Studio',
                  name: 'karlakratz-studio',
                  apiId: '84384ca3-c170-471a-a91c-86a36cdabb82'
                },
                {
                  buildHookId: '5e5adcab47370f0aa5b04738',
                  title: 'Blog Website',
                  name: 'karlakratz',
                  apiId: '790e4523-9d05-4b67-9ca6-deb24949cc7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karlabrowne/karlakratzpoetry',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://karlakratz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent poems', order: '_createdAt desc', types: ['poem']},
      layout: {width: 'medium'}
    }
  ]
}
