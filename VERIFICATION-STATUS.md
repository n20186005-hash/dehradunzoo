# Verification status

## Static checks completed in this workspace

- `package.json` and `site.webmanifest` JSON syntax validated.
- Source scan found no `example.com`, `localhost`, or `chrome-extension://` strings.
- The Google Maps embed is localized to Hindi / India (`hi` / `in`).
- Astro `site` is sourced only from `SITE_URL` in `astro.config.mjs`; when unset, canonical/OG absolute URLs are omitted and the sitemap integration is disabled.
- Logo, SVG favicon, PNG 16×16 / 32×32 favicon and 180×180 Apple touch icon are present.

## Network-blocked checks

This execution environment cannot reach the npm registry, so Corepack cannot download the pinned pnpm release and dependencies cannot be installed. For that reason the required clean-environment commands could not be truthfully completed here:

```sh
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

A generated `pnpm-lock.yaml` is intentionally **not fabricated**. Generate it only in an environment that can reach npm, then immediately repeat the exact frozen-lockfile/check/build sequence above. Do not mark the project release-ready until all four commands pass.

The three attraction photos referenced by the page are genuine Dehradun Zoo / Malsi Deer Park Wikimedia Commons images, but this workspace also cannot download their binary bytes. Their original-file URLs and licenses are recorded in `public/images/IMAGE-SOURCES.md`. The page therefore uses those exact real-photo URLs remotely until they are downloaded into `public/images/` and the three paths are switched to local files.
