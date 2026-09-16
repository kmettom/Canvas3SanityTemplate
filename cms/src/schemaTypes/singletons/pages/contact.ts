import {defineType, defineField} from 'sanity'
// import {HomeIcon} from '@sanity/icons'

export const contact = defineType({
  name: 'contact',
  title: 'Contact page',
  type: 'document',
  // icon: HomeIcon,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
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
      group: 'content',
    }),
    defineField({
      name: 'header',
      title: 'Header text',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'socialNetwork'}],
      group: 'content',
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [{type: 'contactBlock'}],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      // header: 'header',
    },
    prepare({}) {
      return {
        title: 'Contact Page',
        // subtitle: 'Add pages with legal content',
      }
    },
  },
})
