import {defineType, defineField} from 'sanity'

export const articlesPage = defineType({
  name: 'articlesPage',
  title: 'Articles page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroArticle',
      title: 'Hero Article',
      type: 'reference',
      to: [{type: 'article'}, {type: 'film'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Articles page',
        // subtitle: 'Add pages with legal content',
      }
    },
  },
})
