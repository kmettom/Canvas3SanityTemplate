import {defineField, defineType} from 'sanity'
import {LeaveIcon} from '@sanity/icons'

export const imageCTA = defineType({
  name: 'imageCTA',
  title: 'CTA Section with image',
  type: 'object',
  icon: LeaveIcon,
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
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
      validation: (rule) => rule.required(),

    }),
  ],
  preview: {
    select: {
      media: 'coverImage',
      subtitle: 'link',
    },
    prepare({media, subtitle}) {
      return {
        title: 'Image CTA section',
        subtitle: subtitle || '—',
        media,
      }
    },
  },
})
