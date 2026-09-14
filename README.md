# Project Robotique

An English, public learning log about moving from machine learning to robotics with a SO-101 robot arm. The site is a static Astro project hosted on GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

Build and preview the production site with `npm run build` and `npm run preview`.

## Add a journal day

1. Copy `JOURNAL_TEMPLATE.md` to `src/content/journal/day-2.md` and update its frontmatter.
2. Keep `draft: true` while writing. Set it to `false` when ready to publish.
3. Put media in `public/media/day-2/`. Reference images as `/media/day-2/name.jpg`.
4. Commit and push. GitHub Actions builds and deploys the site.

`day` controls the URL (`/journal/day-2/`) and previous/next links. Each day is independent; adding a file updates the home page and journal index.

Use descriptive alt text for images. Videos use native controls and should include captions or a nearby transcript. Markdown supports headings, lists, tables, quotes and fenced code blocks.

## Project structure

```txt
src/content/journal/    # one Markdown or MDX file per day
src/pages/               # home, journal and portfolio routes
src/layouts/ src/styles/ # shared layout and styling
public/assets/ public/media/ # static assets
```

The portfolio remains available at `/portfolio/`. Interactive 3D and executable Python experiments can be added later without changing the journal format.
