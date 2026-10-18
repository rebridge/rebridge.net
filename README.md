# rebridge.net

Personal resume site, built with React + Vite and hosted on GitHub Pages at https://rebridge.net.

## Editing

All resume content is in `src/resume.js`. Edit it, then push to `main`.

## Local development

```sh
npm install
npm run dev
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
`public/CNAME` keeps the custom domain set to `rebridge.net`. DNS is managed in Squarespace Domains.
