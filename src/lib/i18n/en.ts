import type { SiteContent } from './types';

export const en = {
	nav: {
		skipToContent: 'Skip to content',
		brand: 'Emilia Larraechea',
		links: {
			about: 'About',
			approach: 'Approach',
			topics: 'What I help with',
			office: 'Where I work',
			projects: 'Projects',
			contact: 'Contact'
		},
		langToggle: {
			label: 'Language',
			en: 'EN',
			es: 'ES'
		},
		menuOpen: 'Open menu',
		menuClose: 'Close menu'
	},
	hero: {
		id: 'home',
		name: 'Emilia Larraechea',
		title: 'Psychologist · Clinical psychoanalysis',
		promise:
			'My approach is to build, together with each person, a space of their own, free of judgment, where their singular suffering can be thought and worked through in company.',
		languages: 'I work in English and Spanish, online and in person in the Netherlands.',
		ctas: {
			book: 'Get in touch',
			approach: 'How I work'
		},
		portrait: {
			src: '/images/portrait.jpg',
			alt: 'Emilia Larraechea'
		}
	},
	about: {
		id: 'about',
		title: 'About',
		paragraphs: [
			'I trained as a psychologist at the University of Chile, where I also completed a postgraduate degree in clinical psychoanalysis. I moved to the Netherlands three years ago, where I have been living and working in Utrecht while completing a Master’s in Literary Studies and Cultural Analysis at the University of Amsterdam.',
			'Throughout my professional experience I have specialized in supporting people who are processing traumatic experiences, migration-related grief, gender-based violence, and a sense of lacking direction or motivation. I approach these experiences in their complexity: not only as an individual struggle, but as something shaped by social and cultural contexts, and by what exceeds our awareness.',
			'I am interested in the links between psychotherapy, literature, gender studies and the cultural field. My approach is to build, together with each person, a space of their own, free of judgment, where their singular suffering can be thought and worked through in company.'
		]
	},
	approach: {
		id: 'approach',
		title: 'What is my approach?',
		intro: 'My approach is nourished by different traditions:',
		traditions: [
			{
				title: 'Psychoanalysis',
				body: 'The focus is on listening to your story, not on standardised answers. I pay attention to what we carry without knowing it, such as our dreams, childhood and family histories.'
			},
			{
				title: 'Intersectional',
				body: 'We live in a world shaped by power dynamics and imbalances, which is why I think it is important to understand how gender, class, race and culture operate, so as not to reproduce violence. Mental health does not exist only in the individual, it is also shaped by the conditions in which people live.'
			},
			{
				title: 'Contextualised',
				body: 'The culture and context in which you were raised shape what matters to you and what can help you. That is why I don’t believe in universal, fixed interventions: the work is built case by case.'
			},
			{
				title: 'Affirmative',
				body: 'I work from a non-pathologising stance. This includes a queer, LGBTQ+ and polyamory-affirming approach.'
			},
			{
				title: 'Collaborative',
				body: 'You are the expert on your own story and on what you need. Sometimes what helps is a space where that can be explored in the company of someone else. Inspired by the work of Françoise Davoine and Jean-Max Gaudillière, I think of therapy as a shared inquiry, in which we are co-researchers of what you are going through.'
			}
		],
		practice: {
			title: 'How this works in practice:',
			body: 'In sessions I primarily use talk therapy. I also often work with writing, drawing or bringing objects that carry meaning for you. Sometimes what is hard to say directly finds other ways to be expressed.'
		}
	},
	topics: {
		id: 'topics',
		title: 'I can help you with',
		items: [
			'Trauma and its effects',
			'Migration, culture shock and adjusting to a new country',
			'Grief and loss',
			'Loneliness and isolation',
			'Gender-based violence, including sexual violence',
			'Questions of Identity and sexuality',
			'Re thinking love, friendship and relationships',
			'Persistent, intrusive thoughts',
			'Feeling lost or without direction'
		],
		weWorkWith: {
			src: '/images/we-work-with.png',
			alt: 'We work with: ADHD, anxiety and panic attacks, depression, obsessive thoughts (OCD), burnout and work stress, trauma and PTSD, grief and loss, culture shock and migration stress, low self-esteem, relationship difficulties, loneliness and isolation, identity and sexuality. Beyond the diagnosis.'
		}
	},
	office: {
		id: 'office',
		title: 'Office',
		paragraphs: [
			'Here is where I work: it is steps away from the train station of Lunetten.',
			'I share it with my two colleagues: Clem (Psymobil) and Rodrigo (Plexus Psyche). We offer both individual therapy and we work together facilitating workshops in Universities and Community places.'
		],
		photos: [
			{
				src: '/images/office-room.jpg',
				alt: 'The consulting room, with two armchairs and a view onto the street'
			},
			{
				src: '/images/office-lounge.jpg',
				alt: 'The shared practice space, with sofas and a coffee table'
			}
		],
		team: {
			title: 'The team',
			body: 'Clem, Rodrigo and I share these rooms.',
			photo: {
				src: '/images/colleagues.jpg',
				alt: 'Emilia with her two colleagues, Clem and Rodrigo'
			}
		}
	},
	projects: {
		id: 'projects',
		title: 'Projects',
		items: [
			'Collage workshop DVK',
			'Migration workshop Well Being Week UU',
			'Burn Out workshop Humanities Lab UvA',
			'Holding stories together DVK',
			'Gender Bias workshop D&I week Delft University',
			'Gent Conference: About the poem and its interruption of knowledge',
			'UU Class: Why psychoanalysis in an international context'
		]
	},
	contact: {
		id: 'contact',
		title: 'Contact',
		intro: 'You are welcome to write to me.',
		email: '[email@example.com]',
		phone: '[+31 0 000 000 00]',
		city: 'Utrecht, Netherlands',
		availability: '[Availability placeholder — days/times or general note.]',
		formNote:
			'The contact form is not wired up yet. Please write directly by email or phone/WhatsApp.',
		confidentiality:
			'Confidentiality note: all communications are treated with care in line with applicable confidentiality and GDPR obligations.',
		labels: {
			email: 'Email',
			phone: 'Phone / WhatsApp',
			city: 'City',
			availability: 'Availability'
		},
		map: {
			alt: 'Map showing the area around Lunetten station in Utrecht',
			linkLabel: 'Open in OpenStreetMap',
			linkUrl: 'https://www.openstreetmap.org/?mlat=52.06641&mlon=5.14326#map=15/52.06641/5.14326'
		}
	},
	footer: {
		credential: 'Emilia Larraechea · Psychologist, University of Chile · Clinical psychoanalysis',
		privacy: 'Privacy (placeholder)',
		copyright: '©'
	},
	meta: {
		title: 'Emilia Larraechea — Psychologist in Utrecht',
		description:
			'Psychologist in Utrecht. Psychotherapy in English and Spanish, online and in person. Trauma, migration, grief, gender-based violence and questions of identity.',
		ogTitle: 'Emilia Larraechea — Psychologist in Utrecht',
		ogDescription: 'Psychotherapy in English and Spanish, online and in person in the Netherlands.'
	}
} satisfies SiteContent;
