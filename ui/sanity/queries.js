import { defineQuery } from "groq";

//**********************
// Directors
//**********************
export const directorsQuery =
  defineQuery(`*[_type == "director" && status == "published"] | order(orderRank){
    ...,
    }
`);

export const directorsCountQuery = defineQuery(
  `count(*[_type == "director" && status == "published"])`,
);

export const directorQuery = defineQuery(`
  *[_type == "director" && slug.current == $slug][0]{
    ...,

    relatedDirectors[@->status == "published"]->{
      _id, name, slug 
    },

    relatedFilms[@->status == "published"]->{
        ...,
    "thumbVideoFileURL": thumbVideoFile.asset->url,
    "thumbImageURL": thumbImage.asset->url,
    "relatedDirector": director->{
      name,
      slug
    }
    }
  }
`);

export const directorNameQuery = defineQuery(`
  *[_type == "director" && slug.current == $slug][0]{
    name,
    slug
  }
`);

//**********************
// Films
//**********************

export const filmsQuery = defineQuery(`
  *[_type == "film" && status == "published"] | order(orderRank, _createdAt desc)[0...$limit]{
    ...,
    "thumbVideoFileURL": thumbVideoFile.asset->url,
    "thumbImageURL": thumbImage.asset->url,
    "relatedDirector": director->{
      name,
      slug
    }
  }
`);

export const articlesPaginatedQuery = defineQuery(`
{
  "items": *[_type in ["article"] && status == "published" && _id != *[_type == "articlesPage"][0].heroArticle._ref] 
    | order(orderRank, _createdAt desc)
    [$offset...$end]{
  ...,
  },
  "total": count(*[_type in ["article"]]),
  "hasMore": $end < count(*[_type in ["article"]])
}
`);

//**********************
// Articles Studio
//**********************

export const articlesSectionPaginatedQuery = defineQuery(`
{
  "items": *[_type in ["article"] && status == "published" ] 
    | order(orderRank, _createdAt desc)
    [$offset...$end]{
    slug,
    layoutType,
    typeName,
    coverImage,
    title,
    articleThumbImage,
    
  },
  "total": count(*[_type in ["article"]]),
  "hasMore": $end < count(*[_type in ["article"]])
}
`);

export const articleQuery = defineQuery(
  `*[_type == "article" && slug.current == $slug][0]{
  ...,
  }`,
);

export const heroArticleQuery = defineQuery(`
  *[
    _type in ["article"]
    && _id == *[_type == "articlesPage"][0].heroArticle._ref
  ][0]{
  ...,
  }
`);

//**********************
// Pages / Sections
//**********************

export const welcomeScreenQuery = defineQuery(`*[_type == "welcome"][0]{
  ...,
  "bgVideoFileURL": bgVideoFile.asset->url,
  "bgPosterURL": bgPoster.asset->url,
}`);
export const homePageQuery = defineQuery(`*[_type == "home"][0]`);
export const articlesPageQuery = defineQuery(`*[_type == "articlesPage"][0]`);
export const projectsPageQuery = defineQuery(`*[_type == "projectsPage"][0]`);
export const contactPageQuery = defineQuery(`*[_type == "contact"][0]{
...,
}`);
export const aboutPageQuery = defineQuery(`*[_type == "about"][0]{
...,
}`);
export const articlesSectionQuery = defineQuery(`*[_type == "articles"][0]`);
export const footerSectionQuery = defineQuery(`*[_type == "footer"][0]`);

export const footerImagesQuery = defineQuery(`*[_type == "footer"][0]{
  "imageURLs": images[] {
    "url": asset->url
  }
}`);

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
...,
"ogImageURL": ogImage.asset->url
}`);

//**********************
// Legal Pages - Terms & Privacy
//**********************

export const legalSlugsQuery = defineQuery(`
  coalesce(
    *[_type == "legal"][0].page[]{
      "slug": slug.current,
      "title": title
    },
    []
  )
`);

export const legalPageQuery = defineQuery(`
  *[_type == "legal"][0]
    .page[slug.current == $slug][0]{
      title,
      "slug": slug.current,
      content
    }
`);
