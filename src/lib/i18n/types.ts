export interface SiteContent {
	nav: {
		skipToContent: string;
		brand: string;
		links: {
			about: string;
			approach: string;
			topics: string;
			office: string;
			contact: string;
		};
		langToggle: {
			label: string;
			en: string;
			es: string;
		};
		menuOpen: string;
		menuClose: string;
	};
	hero: {
		id: string;
		name: string;
		title: string;
		promise: string;
		languages: string;
		ctas: {
			book: string;
			approach: string;
		};
		portrait: {
			src: string;
			alt: string;
		};
	};
	about: {
		id: string;
		title: string;
		paragraphs: string[];
		photo: {
			src: string;
			srcset: string;
			alt: string;
		};
	};
	approach: {
		id: string;
		title: string;
		intro: string;
		traditions: Array<{
			title: string;
			body: string;
		}>;
		practice: {
			title: string;
			body: string;
		};
	};
	topics: {
		id: string;
		title: string;
		items: string[];
	};
	office: {
		id: string;
		title: string;
		intro: string;
		photos: Array<{
			src: string;
			alt: string;
		}>;
		team: {
			intro: string;
			colleagues: Array<{
				name: string;
				url: string;
			}>;
			conjunction: string;
			outro: string;
			photo: {
				src: string;
				alt: string;
			};
		};
	};
	contact: {
		id: string;
		title: string;
		intro: string;
		email: string;
		phone: string;
		labels: {
			email: string;
			phone: string;
			whatsapp: string;
		};
		map: {
			alt: string;
		};
	};
	footer: {
		credential: string;
		copyright: string;
	};
	meta: {
		title: string;
		description: string;
		ogTitle: string;
		ogDescription: string;
	};
}
