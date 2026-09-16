// import {CogIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

import * as demo from '../../lib/initialValues'

/**
 * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
 * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  // icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'Site title used in the browsers Navigation Bar',
      title: 'Fallback SEOTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogTitle',
      description: 'Site title used in the browsers Navigation Bar',
      title: 'Fallback SEOTitle ogTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'Site description used in the search engines',
      title: 'SEO description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogDescription',
      description: 'Site ogDescription used in the search engines',
      title: 'SEO ogDescription',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description:
        'Displayed on social cards and search engine results.  Used everywhere unless overwritten.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
