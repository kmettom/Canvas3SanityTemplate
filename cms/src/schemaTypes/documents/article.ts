import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType, type Rule, SanityClient, StringRule, TitledListValue} from 'sanity'
import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

/**
 * Article schema.  Define and edit the fields for the 'article' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const article = defineType({
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'thumb',
      title: 'Thumb',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) =>
        Rule.required().error('Please select the film status'),
      group: 'content',
    }),
    defineField({
      name: 'layoutType',
      title: 'Thumb Layout Type',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'Large headline (Events)', value: 'large_headline' },//event
          { title: 'Full Background Image (Latest Work)', value: 'full_bg_image' },//latest work
          { title: 'Small Corner Image (Talent)', value: 'corner_image' }, //talent
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'events',
    }),
    defineField({
      name: 'typeName',
      title: 'Article Type Name',
      type: 'string',
      group: 'content',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
      group: 'content',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'inlineRichText',
      group: 'content',
    }),
    defineField({
      name: 'subtitle_secondary',
      title: 'Sub Title - Scrollable from bottom',
      type: 'inlineRichText',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the article to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'articleThumbImage',
      title: 'Thumb Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
      // validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
      // validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'socialNetwork'}],
    }),
    defineField({
      name: 'content',
      title: 'Content builder',
      type: 'array',
      of: [
        {type: 'articleContent'},
        {type: 'articleImageBlock'},
        {type: 'articleImageSlider'},
        {type: 'filmCTA'},
        {type: 'imageCTA'},
      ],
      group: 'content',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'Title used for search engines and social media sharing (recommended: 50-60 characters)',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description:
        'Description used for search engines and social media sharing (recommended: 150-160 characters)',
      group: 'seo',
    }),
    orderRankField({type: 'article'}),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
      authorFirstName: 'author.firstName',
      authorLastName: 'author.lastName',
      media: 'coverImage',
      status: 'status'
    },
    prepare({title, media, authorFirstName, authorLastName, status}) {
      const subtitles = [
        authorFirstName && authorLastName && `by ${authorFirstName} ${authorLastName}`,
        `Status: ${status}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
