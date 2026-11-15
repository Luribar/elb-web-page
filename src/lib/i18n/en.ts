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
		title: 'Psychologist',
		promise:
			'A space of your own, free of judgment, where what you are going through can be thought through in company.',
		languages: 'I work in English and Spanish, online and in person in the Netherlands.',
		ctas: {
			book: 'Get in touch',
			approach: 'What is my approach?'
		},
		portrait: {
			src: '/images/portrait.jpg',
			alt: 'Portrait of Emilia Larraechea in a red linen shirt, arms folded, looking at the camera with a slight smile against a pale blue-grey wall'
		}
	},
	about: {
		id: 'about',
		title: 'About',
		paragraphs: [
			"I trained as a psychologist at the University of Chile, where I also completed a postgraduate degree in clinical psychoanalysis. I moved to the Netherlands three years ago, where I have been living and working in Utrecht while completing a Master's in Literary Studies and Cultural Analysis at the University of Amsterdam.",
			'Throughout my professional experience I have specialized in supporting people who are processing traumatic experiences, migration-related grief, gender-based violence, and a sense of lacking direction or motivation. I approach these experiences in their complexity: not only as an individual struggle, but as something shaped by social and cultural contexts, and by what exceeds our awareness.',
			'I am interested in the links between psychotherapy, literature, gender studies and the cultural field. My approach is to build, together with each person, a space of their own, free of judgment, where their singular suffering can be thought and worked through in company.'
		],
		photo: {
			src: '/images/about-me-800.jpg',
			srcset: '/images/about-me-480.jpg 480w, /images/about-me-800.jpg 800w',
			alt: 'Emilia Larraechea standing in a beech forest in autumn, among tall trees with yellow and orange leaves and a carpet of fallen leaves'
		}
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
				body: "The culture and context in which you were raised shape what matters to you and what can help you. That is why I don't believe in universal, fixed interventions: the work is built case by case."
			},
			{
				title: 'Affirmative',
				body: 'I work from a non-pathologising stance.'
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
		title: 'I can help you with:',
		items: [
			'Trauma and its effects',
			'Migration, culture shock and adjusting to a new country',
			'Grief and loss',
			'Loneliness and isolation',
			'Gender-based violence, including sexual violence',
			'Questions of identity and sexuality',
			'Rethinking love, friendship and relationships',
			'Persistent, intrusive thoughts',
			'Feeling lost or without direction'
		]
	},
	office: {
		id: 'office',
		title: 'Office',
		intro: 'Here is where I work. It is steps away from the train station of Lunetten.',
		photos: [
			{
				src: '/images/office-room.jpg',
				alt: 'Office interior with an orange wall, a blue velvet sofa, a rust-red corduroy armchair, an olive armchair, a tall bookshelf and potted plants'
			},
			{
				src: '/images/office-lounge.jpg',
				alt: 'Bright white room with large windows, a wooden table with four chairs, an olive armchair, a small round table and a rust-red sofa with a mustard cushion'
			}
		],
		team: {
			intro: 'I share it with my two colleagues: ',
			colleagues: [
				{ name: 'Clem (Psymobil)', url: 'https://www.psymobil.com/me' },
				{ name: 'Rodrigo (Plexus Psyche)', url: 'https://www.plexuspsyche.com/en/rodrigo' }
			],
			conjunction: ' and ',
			outro:
				'. We offer both individual therapy and we work together facilitating workshops in Universities and Community places.',
			photo: {
				src: '/images/colleagues.jpg',
				alt: 'Three people sitting close together on a blue sofa in front of an orange wall, smiling at the camera'
			}
		}
	},
	contact: {
		id: 'contact',
		title: 'Contact',
		intro: 'You are welcome to write to me.',
		email: 'Emilia.larraechea@gmail.com',
		phone: '+31 61 6666 202',
		labels: {
			email: 'Email',
			phone: 'Phone',
			whatsapp: 'WhatsApp'
		},
		map: {
			alt: 'Google map centred on Utrecht Lunetten station'
		}
	},
	footer: {
		credential: 'Emilia Larraechea · Psychologist in Utrecht',
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
