import {defineType, defineField} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'About Header',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
    },
    prepare({}) {
      return {
        title: 'About Page',
      }
    },
  },
})
