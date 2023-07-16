// import {FiFeather, FiFileText} from 'react-icons/fi'
// import {MdPerson, MdSettings} from 'react-icons/md/'

// import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = (listItem) =>
  !['aboutPage', 'bookPage', 'homePage', 'category', 'author', 'post', 'siteSettings'].includes(
    listItem.getId()
  )

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('poem').title('All poems').icon(FiFeather),
      S.listItem()
        .title('Poems by category')
        .child(
          // List out all categories
          S.documentTypeList('category')
            .title('Poems by cateogry')
            .child((catId) =>
              // List out project docuemnts where the _id for the selected
              // category appear as a _ref in the project's categories array
              S.documentList()
                .schemaType('poem')
                .title('Poems')
                .filter('_type == "poem" && $catId in categories[]._ref')
                .params({catId})
            )
        ),
      S.listItem()
        .title('About page')
        .icon(FiFileText)
        .child(S.editor().title('About page').schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Book page')
        .icon(FiFileText)
        .child(S.editor().title('Book page').schemaType('bookPage').documentId('bookPage')),
      S.listItem()
        .title('Home page')
        .icon(FiFileText)
        .child(S.editor().title('Home page').schemaType('homePage').documentId('homePage')),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
