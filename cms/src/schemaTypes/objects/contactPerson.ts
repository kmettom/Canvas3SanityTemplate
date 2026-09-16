import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const contactPerson = defineType({
  name: 'contactPerson',
  title: 'Contact Person',
  type: 'object',
  // icon: TextIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //   },
  //   prepare({title}) {
  //     return {
  //       title: title || 'Untitled Info Section',
  //       subtitle: 'Info Section',
  //     }
  //   },
  // },
})
