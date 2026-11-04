import { getCollection, type CollectionEntry } from 'astro:content';

// Drafts show while previewing (npm run dev, or npm run preview:drafts) but are never published.
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

const visible = <T extends { data: { draft: boolean } }>(e: T) => showDrafts || !e.data.draft;

export const YEARS = [7, 8, 9, 10, 11, 12, 13] as const;

export const yearSlug = (y: number) => `/year-${y}/`;

export function yearNote(y: number) {
  if (y <= 10) return 'Junior DGT';
  return `NCEA Level ${y - 10}`;
}

export async function overviews() {
  return (await getCollection('overviews')).filter(visible);
}

export async function assessments() {
  return (await getCollection('assessments'))
    .filter(visible)
    .sort((a, b) => (a.data.term ?? 9) - (b.data.term ?? 9) || a.data.order - b.data.order);
}

export async function guides() {
  return (await getCollection('guides'))
    .filter(visible)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function guidesByTool(list: CollectionEntry<'guides'>[]) {
  const map = new Map<string, CollectionEntry<'guides'>[]>();
  for (const g of list) {
    const tool = g.data.tools[0];
    map.set(tool, [...(map.get(tool) ?? []), g]);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}
