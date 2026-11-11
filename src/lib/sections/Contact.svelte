<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();

	// Public landmark (Utrecht Lunetten station) — deliberately not the exact address.
	const mapEmbedUrl =
		'https://www.openstreetmap.org/export/embed.html?bbox=5.1355%2C52.0615%2C5.1511%2C52.0713&layer=mapnik&marker=52.06641%2C5.14326';
</script>

<section id={content.contact.id} class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<div class="mx-auto max-w-prose">
		<h2 class="font-serif text-2xl text-foreground sm:text-3xl">{content.contact.title}</h2>
		<p class="mt-4 text-base leading-relaxed text-foreground sm:text-[17px]">
			{content.contact.intro}
		</p>
		<div class="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground sm:text-[17px]">
			<dl class="grid gap-3">
				<div>
					<dt class="text-sm text-muted-foreground">{content.contact.labels.email}</dt>
					<dd class="mt-1">{content.contact.email}</dd>
				</div>
				<div>
					<dt class="text-sm text-muted-foreground">{content.contact.labels.phone}</dt>
					<dd class="mt-1">{content.contact.phone}</dd>
				</div>
				<div>
					<dt class="text-sm text-muted-foreground">{content.contact.labels.city}</dt>
					<dd class="mt-1">{content.contact.city}</dd>
				</div>
				<div>
					<dt class="text-sm text-muted-foreground">{content.contact.labels.availability}</dt>
					<dd class="mt-1">{content.contact.availability}</dd>
				</div>
			</dl>
			<p class="rounded-md border border-border bg-muted p-4 text-sm text-foreground">
				{content.contact.formNote}
			</p>
			<p class="text-sm text-muted-foreground">{content.contact.confidentiality}</p>
		</div>
	</div>

	<figure class="mx-auto mt-10 max-w-3xl">
		<iframe
			class="map-frame h-[320px] w-full rounded-md border border-border sm:h-[400px]"
			src={mapEmbedUrl}
			title={content.contact.map.alt}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
		<figcaption class="mt-2 text-sm">
			<a
				class="map-link"
				href={content.contact.map.linkUrl}
				rel="external noopener noreferrer"
				target="_blank">{content.contact.map.linkLabel}</a
			>
		</figcaption>
	</figure>
</section>

<style>
	.map-frame {
		display: block;
		border: 1px solid var(--border);
	}

	.map-link {
		color: var(--muted-foreground);
		text-decoration: none;
	}

	.map-link:hover {
		color: var(--foreground);
		text-decoration: underline;
		text-decoration-color: var(--accent);
		text-underline-offset: 4px;
	}

	.map-link:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
	}
</style>
