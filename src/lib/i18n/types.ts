export interface SiteContent {
	nav: {
		skipToContent: string;
		brand: string;
		links: {
			about: string;
			approach: string;
			topics: string;
			office: string;
			projects: string;
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
		weWorkWith: {
			src: string;
			alt: string;
		};
	};
	office: {
		id: string;
		title: string;
		paragraphs: string[];
		photos: Array<{
			src: string;
			alt: string;
		}>;
		team: {
			title: string;
			body: string;
			photo: {
				src: string;
				alt: string;
			};
		};
	};
	projects: {
		id: string;
		title: string;
		items: string[];
	};
	contact: {
		id: string;
		title: string;
		intro: string;
		email: string;
		phone: string;
		city: string;
		availability: string;
		formNote: string;
		confidentiality: string;
		labels: {
			email: string;
			phone: string;
			city: string;
			availability: string;
		};
		map: {
			alt: string;
			linkLabel: string;
			linkUrl: string;
		};
	};
	footer: {
		credential: string;
		privacy: string;
		copyright: string;
	};
	meta: {
		title: string;
		description: string;
		ogTitle: string;
		ogDescription: string;
	};
}
