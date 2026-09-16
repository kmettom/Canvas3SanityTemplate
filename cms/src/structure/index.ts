// import {CogIcon,BlockElementIcon} from '@sanity/icons'
// import type {StructureBuilder, StructureResolver} from 'sanity/structure'
// import pluralize from 'pluralize-esm'

import {CogIcon, BlockElementIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'


/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = [
  'welcome',
  'articlesPage',
  'page',
  'home',
  'contact',
  'about',
  'legal',
  'articles',
  'footer',
  'settings',
  'assist.instruction.context',
  'film',
  'director',
  'article',
  // 'page'
]

export const structure: StructureResolver = (S: StructureBuilder, context) =>
  S.list()
    .title('Website Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'film',
        title: 'Film projects',
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: 'director',
        title: 'Talents',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'article',
        title: 'Articles',
        S,
        context,
      }),

      S.divider(),

      // Generic document types (films/directors/articles filtered out above)
      ...S.documentTypeListItems()
        .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
        .map((listItem) => listItem.title(pluralize(listItem.getTitle() as string))),

      // Your existing custom groups unchanged:
      S.listItem()
        .title('Website Pages')
        .child(
          S.list().title('Website Pages').items([
            S.listItem()
              .title('Home')
              .child(S.document().schemaType('home').documentId('home')),
            S.listItem()
              .title('Articles')
              .child(S.document().schemaType('articlesPage').documentId('articlesPage')),
            S.listItem()
              .title('About')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Contact')
              .child(S.document().schemaType('contact').documentId('contact')),
            S.listItem()
              .title('Legal pages')
              .child(S.document().schemaType('legal').documentId('legal')),
          ]),
        ),

      S.listItem()
        .title('Page Sections')
        .icon(BlockElementIcon)
        .child(
          S.list().title('Page Sections').items([
            S.listItem()
              .title('Welcome screen')
              .child(S.document().schemaType('welcome').documentId('welcome')),
            S.listItem()
              .title('Articles section')
              .child(S.document().schemaType('articles').documentId('articles')),
            S.listItem()
              .title('Footer section')
              .child(S.document().schemaType('footer').documentId('footer')),
          ]),
        ),

      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])


// export const structure: StructureResolver = (S: StructureBuilder, context) =>
//   S.list()
//     .title('Website Content')
//     .items([
//       ...S.documentTypeListItems()
//         // Remove the "assist.instruction.context" and "settings" content  from the list of content types
//         .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
//         // Pluralize the title of each document type.  This is not required but just an option to consider.
//         .map((listItem) => {
//           return listItem.title(pluralize(listItem.getTitle() as string))
//         }),
//       // Settings Singleton in order to view/edit the one particular document for Settings.  Learn more about Singletons: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
//       S.listItem()
//         .title('Website Pages')
//         .child(
//           S.list().title('Website Pages').items([
//             S.listItem()
//               .title('Home')
//               .child(S.document().schemaType('home').documentId('home')),
//             S.listItem()
//               .title('Articles')
//               .child(S.document().schemaType('articlesPage').documentId('articlesPage')),
//             S.listItem()
//               .title('About')
//               .child(S.document().schemaType('about').documentId('about')),
//             S.listItem()
//               .title('Contact')
//               .child(S.document().schemaType('contact').documentId('contact')),
//             S.listItem()
//               .title('Legal pages')
//               .child(S.document().schemaType('legal').documentId('legal')),
//           ])
//         ),
//       S.listItem()
//         .title('Page Sections').icon(BlockElementIcon)
//         .child(
//           S.list().title('Page Sections').items([
//             S.listItem()
//               .title('Welcome screen')
//               .child(S.document().schemaType('welcome').documentId('welcome')),
//             S.listItem()
//               .title('Articles section')
//               .child(S.document().schemaType('articles').documentId('articles')),
//             S.listItem()
//               .title('Footer section')
//               .child(S.document().schemaType('footer').documentId('footer')),
//           ]),
//         ),
//       S.listItem()
//         .title('Site Settings')
//         .child(S.document().schemaType('settings').documentId('siteSettings'))
//         .icon(CogIcon),
//     ])
