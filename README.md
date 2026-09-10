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
const site = process.env.SITE_URL?.trim() || 'https://dehradunzoo.com';
```

The production domain `dehradunzoo.com` is the default, so canonical, absolute OG/JSON-LD URLs and `@astrojs/sitemap` are always emitted. Set `SITE_URL` to override for preview or staging environments, then rebuild.

## Single-attraction SEO entity binding

All entity data lives in the `attraction` object at the top of `src/pages/index.astro`. Every `<title>`, meta tag, JSON-LD node, heading, breadcrumb and image `alt` is derived from it, so binding another attraction only means editing that one object:

| Template variable | Value used here | Source in code |
| --- | --- | --- |
| `DOMAIN_NAME` | `dehradunzoo.com` | `attraction.domain` |
| `ATTRACTION_FULL_NAME` | `Dehradun Zoo` | `attraction.fullName` |
| `ATTRACTION_SHORT_NAME` | `Malsi Deer Park` | `attraction.shortName` |
| `CITY_NAME` | `Dehradun` | `attraction.city` |
| `STATE_PROVINCE` | `Uttarakhand` | `attraction.state` |
| `COUNTRY_NAME` | `India` | `attraction.country` |
| `COUNTRY_CODE_2LETTER` | `IN` | `attraction.countryCode` |
| `POSTAL_CODE` | `248009` | `attraction.postalCode` |
| `LATITUDE` / `LONGITUDE` | `30.3900863` / `78.0726976` | `attraction.latitude` / `.longitude` |
| `MAPS_SHARE_URL` | `https://maps.app.goo.gl/Egak7AZJp3zzA7s88` | `mapUrl` |
| `MAPS_EMBED_SRC` | Google Maps embed `src` | `mapEmbedSrc` |
| `NEARBY_LANDMARK_1/2` | Robber's Cave / MDDA Park / FRI | `attraction.nearbyLandmarks` |
| `GOVT_TOURISM_URL` | `https://uttarakhandtourism.gov.in/` | `tourismUrl` |

Note: for this attraction the domain (`dehradunzoo.com`) already encodes the official name, so `ATTRACTION_SHORT_NAME` is bound to the locally used name **Malsi Deer Park** instead — that keeps the English headings natural while still asserting `Dehradun Zoo ≡ Malsi Deer Park`.

Structured data emitted: `TouristAttraction` + `LocalBusiness` + `Zoo` (with `@id`, `image`, `geo`, `hasMap`, `sameAs`, opening hours, rating), `WebSite`, `BreadcrumbList` and a single `FAQPage` holding both the Hindi and English questions.

## Progressive Web App

- `public/site.webmanifest` — `id`/`scope`/`start_url`, 192/512 `any` + `maskable` PNG icons, shortcuts to `#reach`, `#guide` and `#faq`.
- `public/sw.js` — precaches the app shell, network-first navigations with an offline fallback, stale-while-revalidate for same-origin assets. Cross-origin requests (GA4, Google Maps) always go to the network.
- Registered from an inline `is:inline` script at the end of `<body>`.
- `public/_headers` adds HSTS and long-lived immutable caching for `/images/*` and `/icons/*` (Cloudflare Worker static assets).

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

### Binding the production domain

`wrangler.jsonc` intentionally ships without a `routes` entry so a deploy cannot fail on a zone that is not yet in the account. Bind `dehradunzoo.com` in one of two ways:

1. Cloudflare dashboard → Workers & Pages → `dehradun-zoo-guide` → Settings → Domains & Routes → *Add custom domain* → `dehradunzoo.com` (and `www`).
2. Or commit the route once the zone is on the account:

```jsonc
"routes": [{ "pattern": "dehradunzoo.com", "custom_domain": true }]
```

After the domain resolves, verify `https://dehradunzoo.com/` in Search Console with the same Google account that manages the Google Maps / Business Profile listing — that ownership signal is the strongest website-field signal for the Maps entity.

## Real photos

The page serves three genuine Dehradun Zoo / Malsi Deer Park photographs plus a 1200×630 social card from `public/images/`, so there are no external attraction-image requests. Origin, author and licence for each file are in `public/images/IMAGE-SOURCES.md`. The oversized originals were re-encoded for the web at unchanged aspect ratios (spotted deer 4.55 MB → 265 KB, entrance 1.69 MB → 199 KB, macaque 350 KB → 55 KB).

## Crawling

`public/robots.txt` allows all crawlers (including `Google-Extended`) and points at `https://dehradunzoo.com/sitemap-index.xml`. `@astrojs/sitemap` writes `sitemap-index.xml` and `sitemap-0.xml` into `dist/` on every build.

## Analytics

GA4 Measurement ID: `G-HXM22WWPKP`.
