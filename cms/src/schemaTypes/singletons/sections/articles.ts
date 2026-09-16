import {defineType, defineField} from 'sanity'

export const articles = defineType({
  name: 'articles',
  title: 'Articles section',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'inlineRichText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheader',
      title: 'Sub Header on the side',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      header: 'header', // Portable Text array
    },
    prepare({header}) {
      const defaultTitle = 'Articles section'
      const firstBlock = header?.find((b: any) => b?._type === 'block') || defaultTitle
      const text =
        firstBlock?.children
          ?.filter((c: any) => c._type === 'span')
          ?.map((c: any) => c.text)
          ?.join('') || defaultTitle

      return {
        title: text?.trim() || defaultTitle,
        subtitle: 'Header',
      }
    },
  },
})
