<script lang="ts">
	import { resolve } from '$app/paths';
	import type { SiteContent, Locale } from '$lib/i18n';
	import Logo from '$lib/components/Logo.svelte';

	let { content, locale }: { content: SiteContent; locale: Locale } = $props();

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	const links = ['about', 'topics', 'approach', 'office', 'contact'] as const;

	const enHref = resolve('/');
	const esHref = resolve('/es');
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
	<nav
		class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
		aria-label="Main navigation"
	>
		<a class="brand min-h-[44px] min-w-[44px] px-1 py-1" href="#{content.hero.id}">
			<Logo label={content.nav.brand} />
		</a>

		<button
			class="menu-button min-h-[44px] min-w-[44px] rounded-md border border-border px-3 py-2 text-sm text-foreground md:hidden"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="nav-menu"
			onclick={toggleMenu}
		>
			{menuOpen ? content.nav.menuClose : content.nav.menuOpen}
		</button>

		<ul class="nav-links hidden items-center gap-4 md:flex">
			{#each links as link (link)}
				<li>
					<a class="nav-link inline-flex min-h-[44px] items-center" href="#{content[link].id}"
						>{content.nav.links[link]}</a
					>
				</li>
			{/each}
			<li class="lang-toggle" aria-label={content.nav.langToggle.label}>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a
					class="lang-link inline-flex min-h-[44px] items-center px-1"
					href={enHref}
					aria-current={locale === 'en' ? 'true' : undefined}>{content.nav.langToggle.en}</a
				>
				<span aria-hidden="true">/</span>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a
					class="lang-link inline-flex min-h-[44px] items-center px-1"
					href={esHref}
					aria-current={locale === 'es' ? 'true' : undefined}>{content.nav.langToggle.es}</a
				>
			</li>
		</ul>
	</nav>

	{#if menuOpen}
		<div id="nav-menu" class="border-t border-border bg-background md:hidden">
			<ul class="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
				{#each links as link (link)}
					<li>
						<a
							class="nav-link block min-h-[44px] py-2"
							href="#{content[link].id}"
							onclick={closeMenu}>{content.nav.links[link]}</a
						>
					</li>
				{/each}
				<li class="flex items-center gap-2 py-2">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a
						class="lang-link inline-flex min-h-[44px] items-center px-1"
						href={enHref}
						aria-current={locale === 'en' ? 'true' : undefined}
						onclick={closeMenu}>{content.nav.langToggle.en}</a
					>
					<span aria-hidden="true">/</span>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a
						class="lang-link inline-flex min-h-[44px] items-center px-1"
						href={esHref}
						aria-current={locale === 'es' ? 'true' : undefined}
						onclick={closeMenu}>{content.nav.langToggle.es}</a
					>
				</li>
			</ul>
		</div>
	{/if}
</header>

<style>
	.brand {
		font-family: var(--font-serif);
	}

	.nav-link {
		color: var(--foreground);
		text-decoration: none;
	}

	.nav-link:hover {
		text-decoration: underline;
		text-decoration-color: var(--accent);
		text-underline-offset: 4px;
	}

	.lang-toggle {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--muted-foreground);
	}

	.lang-link {
		color: var(--muted-foreground);
		text-decoration: none;
	}

	.lang-link[aria-current='true'] {
		color: var(--foreground);
		text-decoration: underline;
		text-decoration-color: var(--accent);
		text-underline-offset: 4px;
	}
</style>
