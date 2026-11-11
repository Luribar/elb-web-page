<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.approach.id} class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<div class="mx-auto max-w-prose">
		<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.approach.title}</h2>
		<p class="mt-4 text-base leading-relaxed text-foreground sm:text-[17px]">
			{content.approach.intro}
		</p>
		<div class="mt-6 grid gap-4">
			{#each content.approach.traditions as tradition, i (i)}
				<article class="rounded-md border border-border bg-surface p-5">
					<h3 class="font-serif text-lg font-medium text-foreground">{tradition.title}</h3>
					<p class="mt-2 max-w-prose text-base leading-relaxed text-foreground sm:text-[17px]">
						{tradition.body}
					</p>
				</article>
			{/each}
		</div>
		<article class="mt-4 rounded-md border border-border bg-muted p-5">
			<h3 class="font-serif text-lg font-medium text-foreground">
				{content.approach.practice.title}
			</h3>
			<p class="mt-2 max-w-prose text-base leading-relaxed text-foreground sm:text-[17px]">
				{content.approach.practice.body}
			</p>
		</article>
	</div>
</section>
