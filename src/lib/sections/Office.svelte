<script lang="ts">
	import type { SiteContent } from '$lib/i18n';
	import { reveal } from '$lib/motion';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.office.id} class="bg-muted/50">
	<div class="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
		<h2 class="font-serif text-3xl text-foreground sm:text-4xl">{content.office.title}</h2>
		<p class="mt-4 max-w-[68ch] text-lg leading-relaxed text-foreground">
			{content.office.intro}
		</p>

		<div class="collage mt-10">
			{#each content.office.photos as photo, i (i)}
				<figure class="collage-photo collage-photo-{i + 1}" use:reveal={i * 180}>
					<img
						src={photo.src}
						alt={photo.alt}
						width="1280"
						height="960"
						loading="lazy"
						decoding="async"
					/>
				</figure>
			{/each}
		</div>

		<div
			class="mt-10 grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2"
		>
			<figure class="flex flex-col">
				<img
					class="aspect-[4/3] w-full object-cover"
					src={content.office.team.photo.src}
					alt={content.office.team.photo.alt}
					width="1400"
					height="1050"
					loading="lazy"
					decoding="async"
				/>
			</figure>
			<div class="flex items-center p-6 sm:p-10">
				<p class="max-w-[52ch] text-base leading-relaxed text-foreground sm:text-[17px]">
					{content.office.team
						.intro}{#each content.office.team.colleagues as colleague, i (i)}{#if i > 0}{content
								.office.team.conjunction}{/if}<a
							class="team-link"
							href={colleague.url}
							target="_blank"
							rel="external noopener noreferrer">{colleague.name}</a
						>{/each}{content.office.team.outro}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.collage {
		position: relative;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.collage-photo {
		position: relative;
		margin: 0;
		overflow: hidden;
		border-radius: 1.5rem;
		background: var(--muted);
		box-shadow: 0 28px 50px -36px color-mix(in srgb, var(--foreground) 70%, transparent);
	}

	.collage-photo img {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		transition: scale 900ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.collage-photo:hover img {
		scale: 1.04;
	}

	.collage-photo-1 {
		grid-column: 1 / -1;
		grid-row: 1;
	}

	/* The second photo overlaps the first, framed by a band of page colour. */
	.collage-photo-2 {
		grid-column: 4 / -1;
		grid-row: 2;
		margin-top: -18%;
		border: 6px solid color-mix(in srgb, var(--muted) 50%, var(--background));
		border-radius: 1.75rem;
	}

	@media (min-width: 768px) {
		.collage-photo-1 {
			grid-column: 1 / span 8;
		}

		.collage-photo-2 {
			grid-column: 7 / -1;
			grid-row: 1;
			align-self: end;
			margin-top: 0;
			margin-bottom: -4.5rem;
			border-width: 8px;
		}

		.collage {
			padding-bottom: 4.5rem;
		}
	}

	.team-link {
		color: var(--accent);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
		transition: color 160ms ease;
	}

	.team-link:hover {
		color: color-mix(in srgb, var(--accent) 55%, var(--foreground));
		text-decoration-thickness: 2px;
	}

	.team-link:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
		border-radius: 2px;
	}
</style>
