# CityCare Hospital

A responsive static hospital marketing site with five illustrative care-operations modules. All data is local sample content. Forms validate fields, display a demo-only message, and never submit or transmit information.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The static output is written to `dist/public`; it includes a `404.html` fallback for GitHub Pages.

## Configuration Items

1. **Emergency Module** — sample emergency queue and validated, demo-only intake form.
2. **Doctor Dashboard** — patient overview and sample appointment schedule.
3. **Laboratory** — sample test list and report details.
4. **Pharmacy** — sample medicine inventory and prescription summary.
5. **Reporting** — sample analytics and reports list.

## Routes

`/`, `/about`, `/services`, `/contact`, `/emergency`, `/doctor-dashboard`, `/laboratory`, `/pharmacy`, and `/reporting`. Unknown routes show a not-found page.

## GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds and publishes on pushes to the `main` branch. Enable GitHub Pages with GitHub Actions as the repository's deployment source. The Vite configuration automatically sets the project-site base path from `GITHUB_REPOSITORY`.

## Demo and privacy

This project has no backend, API requests, authentication, or database. Patient, clinician, test, medicine, and report entries are fictional sample content; contact details and hours are placeholders.
