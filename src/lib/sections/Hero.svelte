<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.hero.id} class="relative overflow-hidden">
	<div
		class="art-bg"
		style="background-image: url('/images/art-blossom.jpg')"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
		<div class="grid gap-8 md:grid-cols-2 md:items-center">
			<div class="flex flex-col gap-5">
				<div>
					<h1 class="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
						{content.hero.name}
					</h1>
					<p class="mt-2 text-lg text-muted-foreground sm:text-xl">{content.hero.title}</p>
				</div>
				<p class="max-w-prose text-base leading-relaxed text-foreground sm:text-[17px]">
					{content.hero.promise}
				</p>
				<p class="text-sm text-muted-foreground">{content.hero.languages}</p>
				<div class="flex flex-wrap gap-3">
					<a
						class="cta-primary inline-flex min-h-[44px] items-center justify-center rounded-md px-5 py-2 text-sm font-medium"
						href="#{content.contact.id}"
					>
						{content.hero.ctas.book}
					</a>
					<a
						class="cta-secondary inline-flex min-h-[44px] items-center justify-center rounded-md px-5 py-2 text-sm"
						href="#{content.approach.id}"
					>
						{content.hero.ctas.approach}
					</a>
				</div>
			</div>
			<div class="justify-self-center md:justify-self-end">
				<img
					class="portrait aspect-[4/5] w-[min(80vw,320px)] rounded-md border border-border object-cover"
					src={content.hero.portrait.src}
					alt={content.hero.portrait.alt}
					width="1152"
					height="1536"
					loading="eager"
					decoding="async"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.art-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		opacity: 0.16;
		pointer-events: none;
	}

	.cta-primary {
		background: var(--color-primary);
		color: var(--color-primary-foreground);
		text-decoration: none;
		border: 1px solid transparent;
	}

	.cta-primary:hover {
		filter: brightness(0.98);
	}

	.cta-secondary {
		background: transparent;
		color: var(--color-foreground);
		text-decoration: none;
		border: 1px solid var(--color-border);
	}

	.cta-secondary:hover {
		background: var(--color-muted);
	}

	.cta-primary:focus-visible,
	.cta-secondary:focus-visible {
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
