import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const photoGalleryRow = defineType({
  name: 'photoGalleryRow',
  title: 'Gallery Row',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Row items',
      type: 'array',
      of: [{ type: 'photoGalleryItem' }],
      validation: (Rule) => Rule.min(1).max(4).warning('Keep rows manageable'),
      options: { layout: 'grid' },
    }),
  ],
  preview: {
    select: {
      items: 'items',
      media: 'items.0.imageItem',
      w0: 'items.0.widthColumns',
      w1: 'items.1.widthColumns',
      w2: 'items.2.widthColumns',
      w3: 'items.3.widthColumns',
    },
    prepare({ items = [], media, w0, w1, w2, w3 }) {
      const count = items.length
      const widths = [w0, w1, w2, w3]
        .filter((v) => typeof v === 'number')
        .join(' | ')
      const sumWidths =[w0, w1, w2, w3]
        .filter((v) => typeof v === 'number')
        .reduce((sum, v) => sum + v, 0)

      return {
        title: `Gallery row`,
        subtitle: widths ? `Layout: ${widths} => ${sumWidths} ${sumWidths === 12 ? '✅' : '⭕ (sum of column widths should be 12)'}` : undefined,
        media,
      }
    },
  },
})
