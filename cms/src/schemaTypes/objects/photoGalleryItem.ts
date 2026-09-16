import {defineField, defineType} from "sanity";

export const photoGalleryItem = defineType({
  name: 'photoGalleryItem',
  title: 'Gallery Item',
  type: 'object',
  fields: [
    defineField({
      name: 'imageItem',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),
    defineField({
      name: 'widthColumns',
      title: 'Image Width Size',
      description: 'Image width size in amount of columns, in a 12 column grid.',
      type: 'number',
      options: {
        list: [
          {title: 'XS (2 columns)', value: 2},
          {title: 'Small (3 columns)', value: 3},
          {title: 'Medium (4 columns)', value: 4},
          {title: 'Large (5 columns)', value: 5},
          {title: 'XL (6 columns)', value: 6},
          {title: 'XXL (8 columns)', value: 8},
          {title: 'FullWidth (12 columns)', value: 12},
        ],
        layout: 'radio',
      },
      initialValue: 4,
      validation: (Rule) =>
        Rule.required().error('Please select image width'),
    }),
  ],
  preview: {
    select: {
      media: 'imageItem',
    },
    prepare({ media }) {
      return {
        title: 'Gallery image pair',
        media,
      }
    },
  },
});