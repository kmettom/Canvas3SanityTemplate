import {defineField, defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export const articleImageBlock = defineType({
  name: 'articleImageBlock',
  title: 'Image block',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
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
      media: 'image',
      subtitle: 'image.alt',
    },
    prepare({media, subtitle}) {
      return {
        title: 'Image block',
        subtitle: subtitle || '—',
        media,
      }
    },
  },
})
