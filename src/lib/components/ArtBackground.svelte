<script lang="ts">
	let { src, opacity = 0.12 }: { src: string; opacity?: number } = $props();
</script>

<div
	class="pointer-events-none absolute inset-0 bg-cover bg-center"
	style:background-image="url('{src}')"
	style:opacity
	aria-hidden="true"
></div>
