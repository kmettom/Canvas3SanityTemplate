import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

/**
 * authors schema.  Define and edit the fields for the 'author' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const author = defineType({
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) =>
        Rule.required().error('Please select the project status'),
    }),
    defineField({
      name: 'authorType',
      title: 'Author type',
      type: 'string',
      options: {
        list: [
          {title: 'author', value: 'author'},
          {title: 'Animator', value: 'animator'},
        ],
        layout: 'radio',
      },
      initialValue: 'author',
      validation: (Rule) =>
        Rule.required().error('Please author type'),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'A URL is required for the author unique link',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navImage',
      title: "Author's menu image",
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }),
      ],
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headshotImage',
      title: "Author's headshot image for page header",
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }),
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'authorCtaText',
      title: 'Related author\'s contact text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'relatedauthors',
      title: 'Related authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}],
        },
      ],
      validation: (Rule) => Rule.unique().max(4).warning('Maximum 4 authors'), // prevent duplicates
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'Title used for search engines and social media sharing (recommended: 50-60 characters)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description:
        'Description used for search engines and social media sharing (recommended: 150-160 characters)',
    }),
    orderRankField({type: 'author'}),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      name: 'name',
      picture: 'navImage',
      status: 'status'
    },
    prepare(selection) {
      return {
        title: `${selection.name}`,
        subtitle: `Status: ${selection.status}`,
        media: selection.picture,
      }
    },
  },
})
