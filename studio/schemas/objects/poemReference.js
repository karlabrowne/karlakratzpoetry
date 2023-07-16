// import { FiFeather } from 'react-icons/fi'

export default {
  name: 'poemReference',
  type: 'object',
  title: 'Poem',
  //   icon: FiFeather,
  fields: [
    {
      name: 'poem',
      type: 'reference',
      to: [
        {
          type: 'poem',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'poem.name',
    },
  },
}
