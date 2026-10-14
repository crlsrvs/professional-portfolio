# Carlos Rivas — Professional portfolio

A responsive, English-language portfolio built with React, TypeScript, and Vite. The visual design uses an ivory background, restrained green accent, editorial typography, and illustrative product overviews. These overviews are diagrams of the work, not screenshots of commercial applications.

## Local development

Use Node.js 22.12+ (or 20.19+) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

`build` includes TypeScript validation and produces `dist/`. There are no backend services or environment secrets required.

## Structure and customization

- `src/content/portfolio.ts`: editable personal details, links, SEO text, navigation, work contributions, earlier roles, skills, and section copy.
- `src/components/`: reusable arrow and professional work card components.
- `src/App.tsx`: semantic page sections and navigation.
- `src/styles.css`: responsive layout, typography, colors, focus states, and reduced-motion support.
- `vite.config.ts`: React setup, build-time SEO metadata, and GitHub Pages base path.
- `public/favicon.svg`: personal monogram.
- `.github/workflows/deploy.yml`: lint, build, and automatic Pages deployment.

Professional contributions, dates, and LinkedIn/email details were taken from `DOCS/Carlos_Rivas_CV_EN_2.pdf`; the GitHub account comes from this repository's origin. The dates shown for Globant clients refer to employment at Globant, not independently verified project dates. HTML, CSS, REST APIs, and Git are also confirmed by the PRD. Java is described as backend support, not a specialization. No Next.js or Spring Boot experience is claimed.

Review the email and profile links in the content file before publication. There are no invented URLs or active placeholder links. If you add unavailable information, use an explicit `TODO` in the configuration and keep nonfunctional links out of the interface.

The CV stays in `DOCS/` and is not copied into `dist/`. The site does not publish the PDF or telephone number. Google Fonts supplies DM Sans and Manrope with `display=swap`; system sans-serif fonts provide a fallback if fonts cannot load. To remove the external font dependency, delete the font links in `index.html` and use the system font stack in the CSS.

## Publish with GitHub Pages

1. Commit and push the application files, including `package-lock.json`, to `main` on GitHub.
2. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. In **Actions**, run **Deploy portfolio to GitHub Pages**, or push a change to `main` to trigger deployment automatically.
4. Open the URL returned by the deployment job. For the current origin, the expected address is `https://crlsrvs.github.io/professional-portfolio/`.

The workflow obtains the correct base path from `actions/configure-pages`, so repository sites, account sites, and custom domains can use the same configuration. If you change the default branch, update the workflow's `branches` list. The repository must allow Actions and Pages deployment under its GitHub plan/settings.

For a local build that reproduces this repository's subdirectory:

```sh
VITE_BASE_PATH=/professional-portfolio/ npm run build
npm run preview
```

Open the preview at `/professional-portfolio/`. The default local build uses `/`. Keep public assets referenced through Vite's base URL when adding new assets. Before publishing under a custom domain, add a `public/CNAME` with your domain and configure DNS and the Pages custom domain setting.

## Accessibility and performance

The page includes a skip link, semantic landmarks, a single main heading, keyboard focus indicators, native keyboard-operable experience disclosure, and reduced-motion preferences. Decorative SVGs are hidden from assistive technologies. The responsive layout uses CSS without a JavaScript animation library or image-heavy assets. External profile links open in a new tab; contact opens the visitor's mail application.
