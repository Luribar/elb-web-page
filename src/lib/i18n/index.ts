import type { SiteContent } from './types';
import { en } from './en';
import { es } from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function getContent(locale: Locale): SiteContent {
	return locale === 'es' ? es : en;
}

export type { SiteContent };
export { en, es };
