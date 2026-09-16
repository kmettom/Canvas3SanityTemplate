import {defineType, defineField} from 'sanity'

export const legal = defineType({
  name: 'legal',
  title: 'Legal pages',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Legal Pages',
      type: 'array',
      of: [{type: 'legalPage'}],
    }),
  ],
  preview: {
    select: {
      // header: 'header',
    },
    prepare({}) {
      return {
        title: 'Legal pages',
        // subtitle: 'Add pages with legal content',
      }
    },
  },
})
