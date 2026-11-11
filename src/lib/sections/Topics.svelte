<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.topics.id} class="relative overflow-hidden">
	<div
		class="art-bg"
		style="background-image: url('/images/art-garden.jpg')"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
		<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.topics.title}</h2>
		<div class="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
			<ul class="flex flex-wrap gap-2.5">
				{#each content.topics.items as item, i (i)}
					<li>
						<a class="topic-pill" href="#{content.contact.id}">{item}</a>
					</li>
				{/each}
			</ul>
			<figure class="justify-self-center md:justify-self-end">
				<img
					class="w-[min(90vw,340px)] rounded-md border border-border bg-surface"
					src={content.topics.weWorkWith.src}
					alt={content.topics.weWorkWith.alt}
					width="724"
					height="876"
					loading="lazy"
					decoding="async"
				/>
			</figure>
		</div>
	</div>
</section>

<style>
	.art-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		opacity: 0.12;
		pointer-events: none;
	}

	.topic-pill {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0.5rem 0.9rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		color: var(--foreground);
		font-size: 0.95rem;
		line-height: 1.25;
		text-decoration: none;
		transition:
			background-color 150ms ease,
			border-color 150ms ease,
			color 150ms ease,
			transform 150ms ease;
	}

	.topic-pill:hover {
		background: var(--primary);
		border-color: var(--primary);
		color: var(--primary-foreground);
		transform: translateY(-1px);
	}

	.topic-pill:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
