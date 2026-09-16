import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const articleContent = defineType({
  name: 'articleContent',
  title: 'Content Block',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare({title}) {
      return {
        title: 'Rich text content block',
      }
    },
  },
})
