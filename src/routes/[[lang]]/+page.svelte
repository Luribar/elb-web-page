<script lang="ts">
	import { resolve } from '$app/paths';
	import Nav from '$lib/sections/Nav.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Topics from '$lib/sections/Topics.svelte';
	import Approach from '$lib/sections/Approach.svelte';
	import Office from '$lib/sections/Office.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Footer from '$lib/sections/Footer.svelte';

	let { data } = $props();
	const locale = $derived(data.locale);
	const content = $derived(data.content);

	const enHref = resolve('/');
	const esHref = resolve('/es');

	// Client-side navigation between / and /es does not re-render app.html.
	$effect(() => {
		document.documentElement.lang = locale;
	});
</script>

<svelte:head>
	<title>{content.meta.title}</title>
	<meta name="description" content={content.meta.description} />
	<meta property="og:title" content={content.meta.ogTitle} />
	<meta property="og:description" content={content.meta.ogDescription} />
	<meta property="og:type" content="website" />
	<link rel="canonical" href={locale === 'en' ? enHref : esHref} />
	<link rel="alternate" hreflang="en" href={enHref} />
	<link rel="alternate" hreflang="es" href={esHref} />
	<link rel="alternate" hreflang="x-default" href={enHref} />
</svelte:head>

<a class="skip-link" href="#main">{content.nav.skipToContent}</a>
<Nav {content} {locale} />
<main id="main">
	<Hero {content} />
	<About {content} />
	<Topics {content} />
	<Approach {content} />
	<Office {content} />
	<Contact {content} />
</main>
<Footer {content} />

<style>
	.skip-link {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 100;
		background: var(--surface);
		color: var(--foreground);
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--border);
	}

	.skip-link:focus {
		left: 0.5rem;
		top: 0.5rem;
		outline: 2px solid var(--ring);
		outline-offset: 2px;
	}
</style>
