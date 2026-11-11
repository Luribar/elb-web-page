<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.about.id} class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<div class="mx-auto max-w-prose">
		<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.about.title}</h2>
		<div class="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground sm:text-[17px]">
			{#each content.about.paragraphs as paragraph, i (i)}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</section>
