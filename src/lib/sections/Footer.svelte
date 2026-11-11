<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border">
	<div class="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 sm:px-6">
		<!-- TODO(content): Replace placeholder -->
		<p class="text-sm text-muted-foreground">{content.footer.credential}</p>
		<div class="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
			<span class="privacy-link inline-flex min-h-[44px] items-center" aria-disabled="true"
				>{content.footer.privacy}</span
			>
			<span aria-hidden="true">·</span>
			<p>{content.footer.copyright} {year}</p>
		</div>
	</div>
</footer>

<style>
	.privacy-link {
		color: var(--color-muted-foreground);
		text-decoration: none;
	}

	.privacy-link:hover {
		text-decoration: underline;
		text-decoration-color: var(--color-accent);
		text-underline-offset: 4px;
	}

	.privacy-link:focus-visible {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
