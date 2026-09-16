import {defineField, defineType} from 'sanity'
import {LeaveIcon} from '@sanity/icons'

export const socialNetwork = defineType({
  name: 'socialNetwork',
  title: 'Social Network',
  type: 'object',
  icon: LeaveIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})
