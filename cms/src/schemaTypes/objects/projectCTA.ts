import {defineField, defineType} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export const projectCTA = defineType({
  name: 'projectCTA',
  title: 'CTA Section with Vimeo',
  type: 'object',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'vimeo',
      title: 'Vimeo project ID',
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
    },
    prepare({media}) {
      return {
        title: 'project CTA section',
        media,
      }
    },
  },
})
