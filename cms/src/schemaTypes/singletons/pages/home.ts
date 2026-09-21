import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const home = defineType({
  name: 'home',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'header',
      title: 'Header - first paragraph',
      type: 'inlineRichText',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About paragraph',
      type: 'inlineRichText',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Home Page',
      }
    },
  },
})
