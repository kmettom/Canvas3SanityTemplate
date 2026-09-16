import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const articleImageSlider = defineType({
  name: 'articleImageSlider',
  title: 'Image Slider Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Image Slides',
      type: 'gallery',
    }),
  ],
  preview: {
    select: {
      images: 'images',
      // media: 'images.0',
    },
    prepare({images}) {
      return {
        title: 'Image Slider - ' + images.length + ' images uploaded',
        // media
      }
    },
  },

  // Optional limits:
  // validation: (rule) => rule.max(20).warning('Keep galleries manageable'),
})
