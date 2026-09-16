import {VideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
/**
 * Film schema.  Define and edit the fields for the 'film' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const film = defineType({
  name: 'film',
  title: 'Film',
  icon: VideoIcon,
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    {
      name: 'thumb',
      title: 'Thumb',
    },
    {
      name: 'content',
      title: 'Content',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: ['content','thumb'],
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'thumb',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'A URL is required for the film to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: ['content','thumb'],
    }),
    defineField({
      name: 'thumbImage',
      title: 'Thumb Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      initialValue: {
        ratio: 's'
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
              if ((context.document?.thumbImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
        {
          name: 'ratio',
          title: 'Image Ratio',
          type: 'string',
          options: {
            list: [
              { title: 'Small (1/4 width)', value: 'sm' },
              { title: 'Large (2/4 width)', value: 'xl' },
            ],
            layout: 'radio',
          },
          description: 'Select the aspect ratio for display purposes.',
          validation: (Rule) => Rule.required().error('Image ratio is required'),
        },
      ],
      validation: (rule) => rule.required(),
      group: 'thumb',
    }),
    defineField(
    {
      name: 'thumbVideoFile',
      title: 'Thumb Video File',
      type: 'file',
      group: ['thumb'],
    }),
    defineField({
      name: 'vimeo',
      title: 'Vimeo Film ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    orderRankField({type: 'film'}),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbImage',
      status: 'status'
    },
    prepare({title, media, status}) {
      const subtitles = [
        `Status: ${status}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
