# Alfred Idibia — Portfolio Foundation

A responsive personal portfolio starter built with Next.js, TypeScript, and Tailwind CSS v4 (custom CSS design system). The site is configured for static export and GitHub Pages.

## Included in this foundation

- Seven portfolio areas: hero, about, skills, projects, experience, writing, and contact
- Dark/light mode toggle
- Responsive mobile navigation
- Scroll reveal effects with reduced-motion support
- Initial SEO metadata
- GitHub Pages static-export configuration
- Honest project statuses and placeholders for portrait, CV, and social profiles

## Requirements

- Node.js 20.9 or newer
- npm
- A GitHub account for deployment

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the static site

```bash
npm run build
```

The exported website is generated in `out/`.

## Publish with GitHub Pages

1. Create a GitHub repository, preferably `alfred-idibia.github.io` if you want a user-site URL.
2. Upload or push this project's contents to the repository.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build/deployment source.
4. Add the workflow below as `.github/workflows/deploy.yml`.
5. Push to the `main` branch and wait for the workflow to finish.

For a project repository such as `portfolio`, the Next.js config automatically uses the repository name as the path prefix in GitHub Actions. For a user site named `alfred-idibia.github.io`, it uses the root path.

### GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build static website
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Personalization checklist

- [ ] Replace the portrait placeholder with Alfred's real photo after it is supplied.
- [ ] Verify the preferred public display name and contact details.
- [ ] Replace generic social links with the correct profile URLs.
- [ ] Write and add the real CV PDF before enabling a download button.
- [ ] Add verified repository/demo URLs as projects become ready.
- [ ] Add the final canonical URL, sitemap, and `robots.txt` after the site URL is known.
- [ ] Connect a form provider if a working contact form is needed; static GitHub Pages cannot receive form submissions on its own.

## Project status policy

The project cards currently describe a mix of ongoing work and planned portfolio projects. Do not label a project complete or add a live demo/repository link until the implementation exists and has been checked.


### Portrait image

The hero portrait is stored at `public/images/alfred-idibia-portrait.png` and rendered from that public path. To replace it later, keep the same filename or update the image path in `app/page.tsx`.


### Portrait layout and TypeScript CSS declaration

The two information cards are now placed below the portrait instead of floating over it. The root `global.d.ts` declares CSS side-effect imports for editors that report TS2882 on `import './globals.css'`. The standard `next-env.d.ts` file is also included.
