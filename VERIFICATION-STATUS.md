# Local verification scope

Exact Node24.21.0/pnpm12.3.4 normal frozen installation from new node_modules with a warm package store passed. Required native scripts limited to esbuild/workerd; no ignored-script fallback.

Astro check passes with 0 errors/warnings/hints. `astro build` produces 76 pages: homepage, English hub (/guides/), Hindi hub (/hi/), 36 English cluster pages (/<slug>/), 36 Hindi mirrored cluster pages (/hi/<slug>/), and a noindex 404. The sitemap lists 75 canonical URLs (every page except the 404). Canonical and hreflang (en / hi / x-default) alternate links were spot-checked on built output in both languages. Worker default-config dry-run with pinned Wrangler4.130.0 passes; the worker serves static assets first, so nested /hi/<slug>/ paths fall through to ASSETS and only genuine misses reach the noindex 404. Native local Worker GET/HEAD protocol, alias, query and error tests are separate from mock fixtures and production checks.

Public content uses attributed dated Maps data; no private SearchConsole metrics or query observations belong in this repository. Original exports stay outside source.

Final independent review, responsive real-browser observations, image loading, official exact-commit Cloudflare build and production acceptance remain required. Local check success does not establish production completion.
