import {director} from './documents/director'
import {page} from './documents/page'
import {film} from './documents/film'
import {photography} from './documents/photography'
import {article} from './documents/article'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {contactBlock} from './objects/contactBlock'
import {contactPerson} from './objects/contactPerson'
import {socialNetwork} from './objects/socialNetwork'
import {filmCTA} from './objects/filmCTA'
import {imageCTA} from './objects/imageCTA'
import {gallery} from './objects/gallery'
import {legalPage} from './objects/legalPage'
import {home} from './singletons/pages/home'
import {contact} from './singletons/pages/contact'
import {about} from './singletons/pages/about'
import {legal} from './singletons/pages/legal'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {articles} from './singletons/sections/articles'
import {footer} from './singletons/sections/footer'
import {articleContent} from "./objects/articleContent";
import {articleImageBlock} from "./objects/articleImageBlock";
import {articleImageSlider} from "./objects/articleImageSlider";
import {photoGallery} from "./objects/photoGallery";
import {photoGalleryItem} from "./objects/photoGalleryItem";
import {articlesPage} from "./singletons/pages/articles";
import {welcome} from "./singletons/sections/welcome";
import {inlineRichText} from "./objects/inlineRichText";
import {photoGalleryRow} from "./objects/photoGalleryRow";

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types
export const schemaTypes = [
  // ***Singletons***
  settings,
  home,
  contact,
  about,
  legal,
  articles,
  footer,
  articlesPage,
  welcome,
  // ***Documents***
  page,
  film,
  photography,
  article,
  director,
  // ***Objects***
  blockContent,
  inlineRichText,
  infoSection,
  callToAction,
  link,
  contactBlock,
  contactPerson,
  legalPage,
  socialNetwork,
  filmCTA,
  imageCTA,
  gallery,
  articleImageSlider,
  articleContent,
  articleImageBlock,
  photoGallery,
  photoGalleryRow,
  photoGalleryItem
]
