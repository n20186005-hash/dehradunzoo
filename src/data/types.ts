// Contract for every page in the visitor-guide cluster.
// One ClusterPage produces two URLs: /<slug>/ (English) and /hi/<slug>/ (Hindi).

export type Group = 'A' | 'B' | 'C' | 'D' | 'E';
export type Priority = 'P0' | 'P1' | 'P2';

export interface PageSection {
  /** Section heading in the page language. */
  heading: string;
  /** One or more body paragraphs. Plain text only. */
  body: string[];
}

export interface PageFaq {
  q: string;
  a: string;
}

export interface PageContent {
  /** <title> text, unique per language. */
  title: string;
  /** meta description, unique per language. */
  metaDescription: string;
  /** Visible H1. */
  h1: string;
  /** Answer-first intro paragraph (mobile priority: answer in the first lines). */
  intro: string;
  sections: PageSection[];
  faq: PageFaq[];
  /** Slugs (without language prefix) of genuinely related cluster pages. */
  related: string[];
}

export interface ClusterPage {
  /** URL slug without slashes, e.g. "tickets". */
  slug: string;
  group: Group;
  priority: Priority;
  /** Primary + secondary target queries from the SEO report. */
  keywords: string[];
  en: PageContent;
  hi: PageContent;
}
