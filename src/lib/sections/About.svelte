<script lang="ts">
	import type { SiteContent } from '$lib/i18n';
	import { reveal } from '$lib/motion';

	let { content }: { content: SiteContent } = $props();
</script>

<section id={content.about.id} class="about relative z-10">
	<span class="about-handle" aria-hidden="true"></span>
	<div class="mx-auto max-w-5xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-20">
		<div
			class="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14"
		>
			<div class="max-w-[68ch]">
				<h2 class="font-serif text-3xl text-foreground sm:text-4xl" use:reveal>
					{content.about.title}
				</h2>
				<div class="about-copy mt-6 flex flex-col gap-5 text-base text-foreground sm:text-[17px]">
					{#each content.about.paragraphs as paragraph, i (i)}
						<p use:reveal={120 + i * 110}>{paragraph}</p>
					{/each}
				</div>
			</div>

			<figure class="about-photo mx-auto w-full max-w-sm md:sticky md:top-28 md:max-w-none">
				<div class="photo-frame">
					<img
						src={content.about.photo.src}
						srcset={content.about.photo.srcset}
						sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, min(24rem, 100vw - 2rem)"
						alt={content.about.photo.alt}
						width="800"
						height="1067"
						loading="eager"
						fetchpriority="high"
						decoding="async"
					/>
				</div>
			</figure>
		</div>
	</div>
</section>

<style>
	.about {
		margin-top: -2.5rem;
		background: var(--surface);
		border-radius: 2.5rem 2.5rem 0 0;
		box-shadow: 0 -28px 60px -36px color-mix(in srgb, var(--foreground) 45%, transparent);
	}

	@media (min-width: 640px) {
		.about {
			margin-top: -3.5rem;
			border-radius: 3.5rem 3.5rem 0 0;
		}
	}

	.about-handle {
		position: absolute;
		top: 1rem;
		left: 50%;
		width: 3rem;
		height: 3px;
		border-radius: 999px;
		background: var(--border);
		transform: translateX(-50%);
	}

	.about-copy p {
		text-align: justify;
		text-justify: inter-word;
		hyphens: auto;
		line-height: 1.75;
	}

	@media (max-width: 479px) {
		.about-copy p {
			text-align: left;
		}
	}

	.photo-frame {
		position: relative;
	}

	/* Offset outline behind the photo, echoing the round, drawn line of the logo. */
	.photo-frame::before {
		content: '';
		position: absolute;
		inset: 0;
		border: 1.5px solid color-mix(in srgb, var(--teal) 55%, transparent);
		border-radius: 1.75rem;
		transform: translate(0.85rem, 0.85rem);
		transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.photo-frame img {
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		border-radius: 1.75rem;
		background: var(--muted);
		box-shadow: 0 24px 48px -32px color-mix(in srgb, var(--foreground) 60%, transparent);
	}

	.photo-frame:hover::before {
		transform: translate(0.45rem, 0.45rem);
	}

	/* Self-running entrance (no IntersectionObserver): an upward wipe that plays
	   once on load, so the photo is never left waiting on a scroll trigger. */
	.photo-frame {
		animation: photo-wipe 1100ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both;
	}

	@keyframes photo-wipe {
		from {
			clip-path: inset(100% -2rem -2rem -2rem round 1.75rem);
		}
		to {
			clip-path: inset(-2rem round 1.75rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.photo-frame {
			animation: none;
		}
	}
</style>
