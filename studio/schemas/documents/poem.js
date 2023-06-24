// import {FiFeather} from 'react-icons/fi'

export default {
  name: 'poem',
  type: 'document',
  title: 'Poems',
  //   icon: FiFeather,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Poem Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 600,
      },
    },
    {
      name: 'poemImage',
      type: 'mainImage',
      title: 'Poem image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'dateWritten',
      type: 'date',
      title: 'Date written',
      description: 'This is a reminder to the author of the original date the poem was written',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'dateEdited',
      type: 'date',
      title: 'Date revised',
      description: 'This is a reminder to the author of the last time the poem itself was edited',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      title: 'Feature this poem',
      description:
        'Toggling this field to true will make this poem more likely to show up at the top of lists and the most recent featured poem will be linked from the homepage',
      name: 'featured',
      type: 'boolean',
    },
    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Poem content',
    },
    {
      name: 'backgroundTitle',
      type: 'string',
      title: 'Background Title',
      description:
        'This heading can be different for every poem. It is only required if you also have a poem background written',
    },
    {
      name: 'background',
      type: 'bodyPortableText',
      title: 'Poem Background',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'poemImage',
      subtitle: 'dateEdited',
      featured: 'featured',
    },
    prepare({title = 'No title', media, subtitle, featured}) {
      const isFeatured = featured ? `🟢  Featured | ` : ''
      const lastRevised = `Last revised: ${subtitle || 'unknown'}`
      return {
        title,
        media,
        subtitle: `${isFeatured}${lastRevised}`,
      }
    },
  },
}
