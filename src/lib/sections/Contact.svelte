<script lang="ts">
	import type { SiteContent } from '$lib/i18n';

	let { content }: { content: SiteContent } = $props();

	const mailHref = $derived(`mailto:${content.contact.email}`);
	const phoneHref = $derived(`tel:${content.contact.phone.replace(/[^\d+]/g, '')}`);
	const whatsappHref = $derived(
		`https://wa.me/${content.contact.phone.replace(/[^\d]/g, '').replace(/^0+/, '')}`
	);

	// Public landmark (Utrecht Lunetten station), not the practice's exact address.
	// Google Maps' keyless embed endpoint: free to use, no API key or billing account.
	const mapEmbedUrl =
		'https://www.google.com/maps?q=Utrecht%20Lunetten%20station&z=15&output=embed';
</script>

<section id={content.contact.id} class="bg-muted/50">
	<div class="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
		<div class="max-w-[68ch]">
			<h2 class="font-serif text-3xl text-foreground sm:text-4xl">{content.contact.title}</h2>
			<p class="mt-4 text-base leading-relaxed text-foreground sm:text-[17px]">
				{content.contact.intro}
			</p>
		</div>

		<ul class="mt-8 grid gap-4 sm:grid-cols-2">
			<li class="contact-card">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="contact-main" href={mailHref}>
					<span class="contact-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="20" height="20" focusable="false">
							<rect x="3" y="5.5" width="18" height="13" rx="2.5" />
							<path d="M4 7.5l8 6 8-6" />
						</svg>
					</span>
					<span class="flex min-w-0 flex-col">
						<span class="text-sm text-muted-foreground">{content.contact.labels.email}</span>
						<span class="contact-value">{content.contact.email}</span>
					</span>
				</a>
			</li>
			<li class="contact-card">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="contact-main" href={phoneHref}>
					<span class="contact-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="20" height="20" focusable="false">
							<path
								d="M6.6 3.5h2.6l1.4 4-2 1.4a12 12 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
							/>
						</svg>
					</span>
					<span class="flex min-w-0 flex-col">
						<span class="text-sm text-muted-foreground">{content.contact.labels.phone}</span>
						<span class="contact-value">{content.contact.phone}</span>
					</span>
				</a>
				<a
					class="whatsapp"
					href={whatsappHref}
					target="_blank"
					rel="external noopener noreferrer"
					aria-label={content.contact.labels.whatsapp}
					title={content.contact.labels.whatsapp}
				>
					<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
						/>
					</svg>
				</a>
			</li>
		</ul>

		<div class="mt-12">
			<iframe
				class="block h-[320px] w-full rounded-2xl border border-border sm:h-[440px]"
				src={mapEmbedUrl}
				title={content.contact.map.alt}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>

<style>
	.contact-card {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 1.25rem;
		border: 1px solid var(--border);
		border-radius: 1.25rem;
		background: var(--surface);
		transition:
			border-color 200ms ease,
			box-shadow 260ms ease,
			transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.contact-card:hover {
		border-color: var(--primary);
		box-shadow: 0 16px 32px -24px color-mix(in srgb, var(--foreground) 60%, transparent);
		transform: translateY(-2px);
	}

	.contact-main {
		display: flex;
		flex: 1 1 auto;
		align-items: center;
		gap: 1rem;
		min-width: 0;
		min-height: 2.75rem;
		color: var(--foreground);
		text-decoration: none;
	}

	.contact-icon {
		display: grid;
		flex: none;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--teal) 14%, var(--surface));
		color: var(--primary);
	}

	.contact-icon svg {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.contact-value {
		overflow-wrap: anywhere;
		font-size: 1.05rem;
	}

	.whatsapp {
		display: grid;
		flex: none;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 999px;
		background: #25d366;
		color: #ffffff;
		transition:
			transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 240ms ease;
	}

	.whatsapp svg {
		fill: currentColor;
	}

	.whatsapp:hover {
		transform: scale(1.08);
		box-shadow: 0 12px 22px -12px color-mix(in srgb, #25d366 85%, transparent);
	}
</style>
