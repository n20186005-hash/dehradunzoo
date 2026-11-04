import type { ClusterPage } from '../types';
import { groupA } from './a';
import { groupB } from './b';
import { groupC } from './c';
import { groupD } from './d';
import { groupE } from './e';

// Full candidate/canonical page list for the SEO cluster.
// Duplicate-intent pages flagged in the report that do not hold independent
// search value were merged into a single page with clear sections.
export const allPages: ClusterPage[] = [...groupA, ...groupB, ...groupC, ...groupD, ...groupE];

export const pageBySlug: Map<string, ClusterPage> = new Map(allPages.map((p) => [p.slug, p]));

// Compact header navigation: highest-intent pages only.
export const topNavSlugs = ['tickets', 'opening-hours', 'how-to-reach', 'photos'];
