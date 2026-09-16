import { defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const photoGallery = defineType({
  name: 'photoGallery',
  title: 'Photo Gallery',
  type: 'array',
  icon: ImagesIcon,
  of: [{ type: 'photoGalleryRow' }],
  validation: (Rule) => Rule.max(20).warning('Keep galleries manageable'),
})
