<script lang="ts">
	import type { SiteContent } from '$lib/i18n';
	import ArtBackground from '$lib/components/ArtBackground.svelte';
	import { reveal } from '$lib/motion';

	let { content }: { content: SiteContent } = $props();

	// Fill + text colour pairs, all at least 4.5:1. Order is hand-picked so that
	// neighbouring bubbles in the honeycomb never share a colour.
	const lavender = { tone: 'var(--lavender)', ink: 'var(--foreground)' };
	const deep = { tone: 'var(--teal-deep)', ink: 'var(--primary-foreground)' };
	const rose = { tone: 'var(--rose-deep)', ink: 'var(--primary-foreground)' };
	const sky = { tone: 'var(--sky)', ink: 'var(--foreground)' };
	const plum = { tone: 'var(--plum)', ink: 'var(--primary-foreground)' };
	const palette = [lavender, deep, rose, sky, lavender, rose, sky, deep, plum];
</script>

<section id={content.topics.id} class="relative overflow-hidden bg-muted/40">
	<ArtBackground src="/images/art-garden.jpg" />
	<div class="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
		<h2 class="font-serif text-3xl text-foreground sm:text-4xl" use:reveal>
			{content.topics.title}
		</h2>

		<div class="bubble-wrap mt-10 sm:mt-12">
			<ul class="bubbles">
				{#each content.topics.items as item, i (i)}
					<li class="slot" use:reveal={140 + i * 70}>
						<span
							class="bubble"
							style:--tone={palette[i % palette.length].tone}
							style:--ink={palette[i % palette.length].ink}
							style:--float-duration={`${6.5 + ((i * 1.3) % 3)}s`}
							style:--float-delay={`${-((i * 1.7) % 6)}s`}
						>
							<span class="bubble-label">{item}</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.bubble-wrap {
		container-type: inline-size;
	}

	/*
	 * Honeycomb packing. --d is the bubble diameter, --g the gap between bubbles.
	 * Narrow: two columns, the right one dropped by half a bubble (5 + 4 stack).
	 * Medium: three columns, middle one dropped.
	 * Wide: two rows of 5 and 4, the second nested between the first.
	 */
	.bubbles {
		--g: 0.7rem;
		--d: min(13rem, calc((100cqi - 0.866 * var(--g)) / 1.866));
		--pitch: calc((var(--d) + var(--g)) * 0.866);
		display: grid;
		grid-template-columns: repeat(2, var(--pitch));
		justify-content: center;
		row-gap: var(--g);
		padding-right: calc(var(--d) - var(--pitch));
		padding-bottom: calc((var(--d) + var(--g)) / 2);
		list-style: none;
		margin: 0;
	}

	.slot {
		width: var(--d);
		height: var(--d);
		/* Unlayered, so it wins over the global reveal lift; slots only scale in. */
		transform: none;
	}

	.slot:nth-child(2n) {
		transform: translateY(calc((var(--d) + var(--g)) / 2));
	}

	@container (min-width: 36rem) {
		.bubbles {
			--g: 0.9rem;
			--d: min(13rem, calc((100cqi - 1.732 * var(--g)) / 2.732));
			grid-template-columns: repeat(3, var(--pitch));
		}

		.slot:nth-child(2n) {
			transform: none;
		}

		.slot:nth-child(3n + 2) {
			transform: translateY(calc((var(--d) + var(--g)) / 2));
		}
	}

	@container (min-width: 58rem) {
		.bubbles {
			--g: 1rem;
			--d: 11rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0 var(--g);
			max-width: calc(5 * var(--d) + 4 * var(--g));
			margin-inline: auto;
			padding: 0;
		}

		.slot:nth-child(n) {
			transform: none;
			margin-bottom: calc((var(--d) + var(--g)) * 0.866 - var(--d));
		}
	}

	/* Entrance: bubbles pop in one after another. Overrides the default lift. */
	.slot:global([data-reveal]) {
		transition:
			opacity 600ms ease var(--reveal-delay, 0ms),
			scale 800ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--reveal-delay, 0ms);
	}

	.slot:global([data-reveal='hidden']) {
		opacity: 0;
		scale: 0.6;
	}

	.bubble {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: calc(var(--d) * 0.13);
		border: 0;
		border-radius: 50%;
		background:
			radial-gradient(
				circle at 32% 26%,
				color-mix(in srgb, white 16%, transparent),
				transparent 58%
			),
			var(--tone);
		color: var(--ink);
		font-family: var(--font-serif);
		font-size: clamp(0.84rem, calc(var(--d) * 0.088), 1.08rem);
		line-height: 1.22;
		text-align: center;
		text-wrap: balance;
		hyphens: auto;
		cursor: default;
		box-shadow:
			0 18px 30px -22px color-mix(in srgb, var(--tone) 90%, black),
			inset 0 -10px 24px -16px color-mix(in srgb, black 30%, transparent);
		animation:
			float var(--float-duration, 7s) ease-in-out var(--float-delay, 0s) infinite,
			morph calc(var(--float-duration, 7s) * 1.7) ease-in-out var(--float-delay, 0s) infinite;
		transition:
			transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
			scale 380ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 300ms ease;
	}

	/* Soft halo that blooms out of the bubble on hover. */
	.bubble::after {
		content: '';
		position: absolute;
		inset: -0.45rem;
		border: 1.5px solid var(--tone);
		border-radius: inherit;
		opacity: 0;
		scale: 0.9;
		transition:
			opacity 300ms ease,
			scale 450ms cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.bubble-label {
		position: relative;
	}

	@media (hover: hover) {
		.bubble:hover {
			scale: 1.07;
			animation-play-state: paused;
			box-shadow:
				0 26px 40px -24px color-mix(in srgb, var(--tone) 95%, black),
				inset 0 -10px 24px -16px color-mix(in srgb, black 30%, transparent);
		}

		.bubble:hover::after {
			opacity: 0.55;
			scale: 1;
		}
	}

	@keyframes float {
		0%,
		100% {
			translate: 0 0;
		}
		50% {
			translate: 0 -9px;
		}
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 50%;
		}
		33% {
			border-radius: 47% 53% 51% 49% / 53% 48% 52% 47%;
		}
		66% {
			border-radius: 52% 48% 47% 53% / 48% 53% 47% 52%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bubble {
			animation: none;
		}
	}
</style>
