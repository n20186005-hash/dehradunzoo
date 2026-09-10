# देहरादून जू — Astro single-page guide

Forest / wildlife-themed Hindi single-page visitor guide for Dehradun Zoo (formerly Malsi Deer Park).

## Stack

- Astro 7.3.2
- Tailwind CSS 4.3.3 via `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.4
- pnpm 12.3.4 (pinned in `packageManager` and `engines`)
- Node.js 24.21.0 (pinned in `engines` and `.node-version`)
- Cloudflare Worker Static Assets via Wrangler 4.130.0 (pinned in scripts with `pnpm dlx`)

## One-place site URL configuration

The site URL is read only in `astro.config.mjs`:

```js
const site = process.env.SITE_URL?.trim() || undefined;
```

With no `SITE_URL`, the project is designed to build without a placeholder domain: canonical and absolute OG tags are omitted and `@astrojs/sitemap` is not enabled. After choosing a real domain, set `SITE_URL` and rebuild.

## Development

```sh
corepack enable
pnpm install
pnpm dev
```

## Required release verification

```sh
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
grep -RniE 'example\\.com|localhost|chrome-extension://' dist || true
```

If a real `SITE_URL` is set, also inspect the generated sitemap and verify every URL uses that domain and no invented `lastmod` is present.

See `VERIFICATION-STATUS.md` for what could and could not be executed in this workspace.

## Cloudflare Worker deployment

`wrangler.jsonc` deploys the generated `dist/` directory as Worker Static Assets.

```sh
pnpm build
pnpm deploy
```

## Real photos

The page references three genuine Dehradun Zoo / Malsi Deer Park Wikimedia Commons photos. Exact original image URLs, authors and licenses are in `public/images/IMAGE-SOURCES.md`. Download them locally before production if you want zero external attraction-image requests.

## Analytics

GA4 Measurement ID: `G-HXM22WWPKP`.
