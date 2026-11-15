<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span class="logo">
	<!-- The source file carries a wordmark under the emblem; the frame crops to the emblem so it stays legible at nav size. -->
	<span class="mark" aria-hidden="true">
		<img src="/logo.jpeg" alt="" width="500" height="500" decoding="async" />
	</span>
	<span class="name">{label}</span>
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		min-height: 44px;
	}

	.mark {
		display: block;
		flex: none;
		width: 44px;
		height: 44px;
		overflow: hidden;
		border-radius: 999px;
	}

	.mark img {
		display: block;
		width: 125%;
		max-width: none;
		height: auto;
		margin-left: -11.5%;
		margin-top: -5%;
		/* Drops the JPEG's white backdrop onto the cream page. */
		mix-blend-mode: multiply;
		transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.name {
		font-family: var(--font-serif);
		font-size: 1.15rem;
		line-height: 1.1;
		color: var(--foreground);
		white-space: nowrap;
	}

	:global(a:hover) > .logo .mark img {
		transform: rotate(-6deg);
	}
</style>
