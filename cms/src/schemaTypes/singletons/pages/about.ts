import {defineType, defineField} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header text',
      type: 'inlineRichText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutHeader',
      title: 'About Header',
      type: 'inlineRichText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutImage',
      title: 'HeadShot member 1',
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
    defineField({
      name: 'associateImage',
      title: 'HeadShot member 2',
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
    defineField({
      name: 'associateHeader',
      title: 'Associate headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'associateAbout',
      title: 'Associate About Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'associateSubheader',
      title: 'Associate Subheader',
      type: 'inlineRichText',
      validation: (rule) => rule.required(),
    }),


  ],
  preview: {
    select: {
    },
    prepare({}) {
      return {
        title: 'About Page',
      }
    },
  },
})
