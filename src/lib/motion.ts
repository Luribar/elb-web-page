// Small progressive-enhancement helpers. Without JS, or when the visitor asks for
// reduced motion, elements render in their final state and nothing animates.

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Fades and lifts an element in the first time it scrolls into view. */
export function reveal(node: HTMLElement, delay = 0) {
	if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

	node.dataset.reveal = 'hidden';
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				node.dataset.reveal = 'shown';
				observer.disconnect();
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Exposes how far the page has scrolled past an element as `--scroll-p`
 * (0 when its top is at the viewport top, 1 once it has fully scrolled away).
 */
export function scrollProgress(node: HTMLElement) {
	if (prefersReducedMotion()) return;

	let frame = 0;

	const update = () => {
		frame = 0;
		const rect = node.getBoundingClientRect();
		const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
		node.style.setProperty('--scroll-p', progress.toFixed(4));
	};

	const schedule = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};

	update();
	window.addEventListener('scroll', schedule, { passive: true });
	window.addEventListener('resize', schedule);

	return {
		destroy() {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		}
	};
}
