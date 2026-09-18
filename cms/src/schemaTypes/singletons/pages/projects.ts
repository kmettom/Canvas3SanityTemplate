import {defineType, defineField} from 'sanity'

export const projectsPage = defineType({
  name: 'projectsPage',
  title: 'Projects page',
  type: 'document',
  fields: [
    defineField({
      name: 'projectsHeadline',
      title: 'Headline',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects page',
        // subtitle: 'Add pages with legal content',
      }
    },
  },
})
