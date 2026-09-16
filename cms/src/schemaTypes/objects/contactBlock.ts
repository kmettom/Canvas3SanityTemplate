import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const contactBlock = defineType({
  name: 'contactBlock',
  title: 'Contact Block',
  type: 'object',
  // icon: TextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [{type: 'contactPerson'}],
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'heading',
  //     subtitle: 'subheading',
  //   },
  //   prepare({title}) {
  //     return {
  //       title: title || 'Untitled Info Section',
  //       subtitle: 'Info Section',
  //     }
  //   },
  // },
})
