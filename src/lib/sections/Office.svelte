<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.office.id} class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.office.title}</h2>
	<div class="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground sm:text-[17px]">
		{#each content.office.paragraphs as paragraph, i (i)}
			<p class="max-w-prose">{paragraph}</p>
		{/each}
	</div>

	<div class="mt-8 grid gap-4 sm:grid-cols-2">
		{#each content.office.photos as photo, i (i)}
			<img
				class="aspect-[4/3] w-full rounded-md border border-border object-cover"
				src={photo.src}
				alt={photo.alt}
				width="1280"
				height="960"
				loading="lazy"
				decoding="async"
			/>
		{/each}
	</div>

	<div
		class="mt-8 grid gap-6 rounded-md border border-border bg-surface p-5 sm:grid-cols-[1fr_1.2fr] sm:items-center"
	>
		<img
			class="aspect-[4/3] w-full rounded-md object-cover"
			src={content.office.team.photo.src}
			alt={content.office.team.photo.alt}
			width="1280"
			height="960"
			loading="lazy"
			decoding="async"
		/>
		<div>
			<h3 class="font-serif text-lg font-medium text-foreground">{content.office.team.title}</h3>
			<p class="mt-2 max-w-prose text-base leading-relaxed text-foreground sm:text-[17px]">
				{content.office.team.body}
			</p>
		</div>
	</div>
</section>
