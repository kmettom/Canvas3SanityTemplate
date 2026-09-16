import {defineType, defineField} from 'sanity'

export const welcome = defineType({
  name: 'welcome',
  title: 'Welcome screen',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'bgVideoFile',
        title: 'Welcome screen background video file',
        type: 'file',
      }),
    defineField({
      name: 'bgPoster',
      title: 'Background Poster for backup',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare({}) {
      return {
        title: "Welcome screen",
        // subtitle: 'Header',
      }
    },
  },
})
