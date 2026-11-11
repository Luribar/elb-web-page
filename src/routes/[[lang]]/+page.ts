import { error } from '@sveltejs/kit';
import { defaultLocale, getContent, isLocale } from '$lib/i18n';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return [{ lang: 'es' }];
};

export const load: PageLoad = ({ params }) => {
	const lang = params.lang;

	if (lang === undefined) {
		const locale = defaultLocale;
		return {
			locale,
			content: getContent(locale)
		};
	}

	if (!isLocale(lang)) {
		throw error(404, 'Not found');
	}

	return {
		locale: lang,
		content: getContent(lang)
	};
};
