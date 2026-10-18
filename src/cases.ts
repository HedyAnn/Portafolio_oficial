import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type CaseEntry = CollectionEntry<'cases'> | CollectionEntry<'casesEn'>;

// Proyectos del idioma pedido, ordenados por `order`
export async function getCases(lang: Lang): Promise<CaseEntry[]> {
  const list: CaseEntry[] = lang === 'en' ? await getCollection('casesEn') : await getCollection('cases');
  return list.sort((a, b) => a.data.order - b.data.order);
}
