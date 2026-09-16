import {defineType, defineField} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer section',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'inlineRichText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Footer logo images on mouse move',
      type: 'gallery',
    }),
  ],
  preview: {
    select: {
      header: 'header',
    },
    prepare({header}) {
      const defaultTitle = 'Footer section'
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
