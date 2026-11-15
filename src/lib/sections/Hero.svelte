<script lang="ts">
	import type { SiteContent } from '$lib/i18n';
	import { scrollProgress } from '$lib/motion';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.hero.id} class="hero" use:scrollProgress>
	<div class="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 md:pt-12 md:pb-24">
		<div class="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center lg:gap-14">
			<div class="hero-copy order-2 flex flex-col gap-5 md:order-1">
				<div>
					<h1 class="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
						{content.hero.name}
					</h1>
					<p class="mt-2 text-lg text-muted-foreground sm:text-xl">{content.hero.title}</p>
				</div>
				<p class="max-w-prose font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
					{content.hero.promise}
				</p>
				<p class="text-base text-muted-foreground">{content.hero.languages}</p>
				<div class="flex flex-wrap gap-3">
					<a
						class="cta-primary inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-2 text-base font-medium"
						href="#{content.contact.id}"
					>
						{content.hero.ctas.book}
					</a>
					<a
						class="cta-secondary inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-2 text-base"
						href="#{content.approach.id}"
					>
						{content.hero.ctas.approach}
					</a>
				</div>
			</div>
			<div class="hero-portrait order-1 md:order-2">
				<img
					class="aspect-[4/5] w-full max-w-md rounded-3xl border border-border object-cover md:max-w-none"
					src={content.hero.portrait.src}
					alt={content.hero.portrait.alt}
					width="1200"
					height="1500"
					loading="eager"
					decoding="async"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	/* Scrolling into About: the hero sinks back and fades while the About card
	   (raised, see About.svelte) slides up over it. --scroll-p is set by scrollProgress. */
	.hero {
		--scroll-p: 0;
	}

	.hero-copy,
	.hero-portrait {
		will-change: transform, opacity;
	}

	.hero-copy {
		opacity: calc(1 - var(--scroll-p) * 0.9);
		transform: translate3d(0, calc(var(--scroll-p) * 90px), 0);
	}

	.hero-portrait {
		opacity: calc(1 - var(--scroll-p) * 0.6);
		transform: translate3d(0, calc(var(--scroll-p) * 160px), 0)
			scale(calc(1 - var(--scroll-p) * 0.06));
		transform-origin: 50% 0;
	}

	.cta-primary {
		background: var(--primary);
		color: var(--primary-foreground);
		text-decoration: none;
		border: 1px solid var(--primary);
	}

	.cta-primary:hover {
		background: var(--foreground);
		border-color: var(--foreground);
	}

	.cta-secondary {
		background: transparent;
		color: var(--foreground);
		text-decoration: none;
		border: 1px solid var(--primary);
	}

	.cta-secondary:hover {
		background: var(--muted);
	}
</style>
