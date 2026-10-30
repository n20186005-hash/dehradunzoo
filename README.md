# Dehradun Zoo visitor guide

Independent nonprofit tourism and public education guide in the existing mixed Hindi/English single-page structure. Static Astro7.3.2, Node24.21.0, pnpm12.3.4; original dependency pins retained, Wrangler4.130.0 now pinned locally for reproducible default npx deployment.

Run `pnpm install --frozen-lockfile`, `pnpm check`, `npm run build`, `npx wrangler deploy --dry-run`. Native script permissions remain restricted to esbuild and workerd. No global allow/ignore-scripts policy.

Cloudflare project: dehradunzoo. Source Worker executes before static ASSETS for host/protocol canonical redirects and real noindex404 responses. No domain bindings or hosting/security settings are changed by source. Actual deployment and browser acceptance are separate gates.

The 29October2026 Maps snapshot is attributed, not the guide’s own reviews. Fees, child concessions, closing/last-entry and complete weekly schedule are not independently confirmed. CZA16July2026 recognition letter supports25ha and conditional recognition context; it does not prove all instructions completed or a current animal display inventory.

Two historical wildlife photos retained with source identity comparison and public licence/source links. The former entrance photograph and derived cover were removed because photographerCC0 did not independently establish every depicted artistic subject’s rights. No infringement or rights-clearance claim.

The existing GoogleAnalytics initializer remains automatic, alongside GoogleMaps and external font resources where delivered. No consent system was invented in this SEO change; do not infer privacy/legal compliance. Check actual hosting-injected services independently.
