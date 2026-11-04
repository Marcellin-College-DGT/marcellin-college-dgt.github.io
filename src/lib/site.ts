import { getCollection, type CollectionEntry } from 'astro:content';

// Drafts show while previewing (npm run dev, or npm run preview:drafts) but are never published.
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

const visible = <T extends { data: { draft: boolean } }>(e: T) => showDrafts || !e.data.draft;

export const YEARS = [7, 8, 9, 10, 11, 12, 13] as const;

// Year levels hidden from the site (no button, no page). Seniors are on exam leave;
// take a year out of this list to bring its page back.
export const HIDDEN_YEARS: number[] = [11, 12, 13];
export const VISIBLE_YEARS = YEARS.filter((y) => !HIDDEN_YEARS.includes(y));

export const yearSlug = (y: number) => `/year-${y}/`;

/** "2026-11-13" -> "Friday 13 November", no comma, as the task PDFs write it
 *  (the date as written, whatever the time zone). */
export function dayLabel(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const part = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString('en-NZ', { ...o, timeZone: 'UTC' });
  return `${part({ weekday: 'long' })} ${part({ day: 'numeric' })} ${part({ month: 'long' })}`;
}

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
    .filter((a) => !HIDDEN_YEARS.includes(a.data.year))
    .sort((a, b) => (a.data.term ?? 9) - (b.data.term ?? 9) || a.data.order - b.data.order);
}

export async function guides() {
  return (await getCollection('guides'))
    .filter(visible)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

// Groups on the How-to guides page, in this order; any other group follows, A to Z.
const GROUP_ORDER = [
  'Google Drive and Classroom',
  'VS Code and web pages',
  'Git and GitHub',
  'Godot',
  'MakeCode Arcade',
  'Grok Academy',
  'Set up your own computer',
];

export function guidesByTool(list: CollectionEntry<'guides'>[]) {
  const map = new Map<string, CollectionEntry<'guides'>[]>();
  for (const g of list) {
    const group = g.data.group ?? g.data.tools[0];
    map.set(group, [...(map.get(group) ?? []), g]);
  }
  const rank = (s: string) => (GROUP_ORDER.includes(s) ? GROUP_ORDER.indexOf(s) : GROUP_ORDER.length);
  return [...map.entries()].sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b));
}
