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
      name: 'subheader',
      title: 'Sub-header on the left side',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header - first paragraph',
      type: 'inlineRichText',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header2',
      title: 'Header - second paragraph (scrollable)',
      type: 'inlineRichText',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectThumbsAmount',
      title: 'Amount of project thumbs on Home page',
      type: 'number',
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
