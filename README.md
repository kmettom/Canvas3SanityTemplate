# Canvas3 Sanity Template

This is a template for Canvas3 starter and Sanity.io as CMS. For more details about Canvas3 module go to https://github.com/kmettom/Canvas3NuxtStarter

## Setup

Install the dependencies:

```bash
# yarn
yarn install

# npm
npm install (from root directory)

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:4200
Start the Sanity server on http://localhost:3333

```bash
npm run dev (from root directory)
```

## .env files

/ui/.env file 
```bash

NUXT_SANITY_PROJECT_ID="sanity_project_id"
NUXT_SANITY_DATASET="production"
NUXT_SANITY_API_VERSION="2025-02-04"
NUXT_SANITY_STUDIO_URL="http://localhost:3333"
NUXT_SANITY_API_READ_TOKEN="API_TOKEN generated in Sanity Studio"
```

/cms/.env file
```bash
SANITY_STUDIO_PROJECT_ID="sanity_project_id"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_PREVIEW_URL="" #Optional - defaults to http://localhost:3000
SANITY_STUDIO_STUDIO_HOST="" #Optional
```