<script lang="ts">
	import type { SiteContent } from '$lib/i18n';
	import ArtBackground from '$lib/components/ArtBackground.svelte';

	let { content }: { content: SiteContent } = $props();

	// One accent colour per tradition, in the order of content.approach.traditions.
	const tones = ['#b33b24', '#3c2246', '#3e4826', '#b988ff', '#2e4764'];
</script>

<section id={content.approach.id} class="relative overflow-hidden">
	<ArtBackground src="/images/art-pansies.jpg" />
	<div class="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
		<h2 class="font-serif text-3xl text-foreground sm:text-4xl">{content.approach.title}</h2>
		<p class="mt-4 max-w-[68ch] text-base leading-relaxed text-foreground sm:text-[17px]">
			{content.approach.intro}
		</p>
		<dl class="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface/90">
			{#each content.approach.traditions as tradition, i (i)}
				<div
					class="tradition grid gap-2 p-5 sm:p-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8"
					style:--tone={tones[i % tones.length]}
				>
					<dt class="tradition-title font-serif text-xl font-medium">{tradition.title}</dt>
					<dd class="max-w-[68ch] text-base leading-relaxed text-foreground sm:text-[17px]">
						{tradition.body}
					</dd>
				</div>
			{/each}
		</dl>
		<aside class="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
			<h3 class="font-serif text-2xl font-medium">{content.approach.practice.title}</h3>
			<p class="mt-3 max-w-[68ch] text-base leading-relaxed sm:text-[17px]">
				{content.approach.practice.body}
			</p>
		</aside>
	</div>
</section>

<style>
	.tradition {
		position: relative;
		padding-left: 1.75rem;
	}

	/* Colour code for each tradition: a slim bar plus a matching title. */
	.tradition::before {
		content: '';
		position: absolute;
		top: 1.5rem;
		bottom: 1.5rem;
		left: 0.7rem;
		width: 3px;
		border-radius: 999px;
		background: var(--tone);
	}

	.tradition-title {
		color: color-mix(in srgb, var(--tone) 82%, var(--foreground));
	}
</style>
