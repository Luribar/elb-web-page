<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.projects.id} class="relative overflow-hidden">
	<div
		class="art-bg"
		style="background-image: url('/images/art-pansies.jpg')"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
		<div class="mx-auto max-w-prose">
			<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.projects.title}</h2>
			<ul class="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground sm:text-[17px]">
				{#each content.projects.items as item, i (i)}
					<li class="flex items-start gap-2">
						<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true"
						></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.art-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		opacity: 0.06;
		pointer-events: none;
	}
</style>
