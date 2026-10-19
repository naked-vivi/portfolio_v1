# Vivian's Portfolio

A personal portfolio for Vivian, a junior frontend developer. Built with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Magic UI.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Alternatively, use `pnpm install --frozen-lockfile` and `pnpm dev`.

## Check and build

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Customize

- `src/data/resume.tsx`: profile, social links, skills, experience, education, projects, and hackathons.
- `src/app/page.tsx`: homepage sections and hero content.
- `src/app/globals.css`: theme colors and shared styles.
- `src/components/navbar.tsx`: dock navigation.
- `public/mascots`: interactive mascot sprite sheets.
- `public`: company and university logos, favicon images, and web app manifest.
- `src/app/favicon.ico`: browser favicon fallback.

Set `NEXT_PUBLIC_SITE_URL` to the deployed site's full URL before building so canonical metadata uses the production domain. Local development defaults to http://localhost:3000.

The hero uses the page-mascot glasses character. The dock includes Vivian's GitHub, LinkedIn, Instagram, and TikTok profiles, plus a theme toggle. A scroll-to-top button appears after scrolling.

## Credits

Based on [Dillion Verma's Magic UI portfolio template](https://github.com/dillionverma/portfolio). Interactive mascot provided by [page-mascot](https://github.com/nilbuild/page-mascot); its license is included in `public/mascots/LICENSE.txt`.
