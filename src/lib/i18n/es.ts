import type { SiteContent } from './types';

export const es = {
	nav: {
		skipToContent: 'Saltar al contenido',
		brand: 'Emilia Larraechea',
		links: {
			about: 'Sobre mí',
			approach: 'Enfoque',
			topics: 'En qué te acompaño',
			office: 'Dónde trabajo',
			contact: 'Contacto'
		},
		langToggle: {
			label: 'Idioma',
			en: 'EN',
			es: 'ES'
		},
		menuOpen: 'Abrir menú',
		menuClose: 'Cerrar menú'
	},
	// Section ids are deliberately locale-independent (same ASCII slugs as en.ts)
	// so that anchor links remain stable when switching languages.
	hero: {
		id: 'home',
		name: 'Emilia Larraechea',
		title: 'Psicóloga',
		promise:
			'Un espacio propio, libre de juicio, donde lo que estás viviendo pueda pensarse en compañía.',
		languages: 'Trabajo en inglés y en español, online y en persona en los Países Bajos.',
		ctas: {
			book: 'Escríbeme',
			approach: '¿Cuál es mi enfoque?'
		},
		portrait: {
			src: '/images/portrait.jpg',
			alt: 'Retrato de Emilia Larraechea con camisa de lino roja, los brazos cruzados, mirando a la cámara con una leve sonrisa frente a una pared gris azulada'
		}
	},
	about: {
		id: 'about',
		title: 'Sobre mí',
		paragraphs: [
			'Me formé como psicóloga en la Universidad de Chile, donde también completé un postgrado en psicoanálisis clínico. Hace tres años me mudé a los Países Bajos, donde vivo y trabajo en Utrecht mientras completaba un Máster en Estudios Literarios y Análisis Cultural en la Universidad de Ámsterdam.',
			'A lo largo de mi experiencia profesional me he especializado en acompañar a personas que están procesando experiencias traumáticas, duelos migratorios, violencia de género y una sensación de falta de rumbo o de motivación. Abordo estas experiencias en su complejidad: no solo como un sufrimiento individual, sino como algo atravesado por contextos sociales y culturales, y por aquello que excede nuestra conciencia.',
			'Me interesan los vínculos entre la psicoterapia, la literatura, los estudios de género y el campo cultural. Mi enfoque es construir, junto con cada persona, un espacio propio, libre de juicio, donde su sufrimiento singular pueda pensarse y elaborarse en compañía.'
		],
		photo: {
			src: '/images/about-me-800.jpg',
			srcset: '/images/about-me-480.jpg 480w, /images/about-me-800.jpg 800w',
			alt: 'Emilia Larraechea de pie en un bosque de hayas en otoño, entre árboles altos de hojas amarillas y naranjas y un manto de hojas caídas'
		}
	},
	approach: {
		id: 'approach',
		title: '¿Cuál es mi enfoque?',
		intro: 'Mi enfoque se nutre de distintas tradiciones:',
		traditions: [
			{
				title: 'Psicoanálisis',
				body: 'El foco está en escuchar tu historia, no en respuestas estandarizadas. Presto atención a lo que cargamos sin saberlo, como nuestros sueños, la infancia y las historias familiares.'
			},
			{
				title: 'Interseccional',
				body: 'Vivimos en un mundo atravesado por dinámicas y desequilibrios de poder, por eso me parece importante entender cómo operan el género, la clase, la raza y la cultura, para no reproducir violencia. La salud mental no existe solo en el individuo, también está configurada por las condiciones en las que las personas viven.'
			},
			{
				title: 'Contextualizado',
				body: 'La cultura y el contexto en los que creciste moldean lo que te importa y lo que puede ayudarte. Por eso no creo en intervenciones universales y fijas: el trabajo se construye caso por caso.'
			},
			{
				title: 'Afirmativo',
				body: 'Trabajo desde una postura no patologizante.'
			},
			{
				title: 'Colaborativo',
				body: 'Tú eres quien mejor conoce tu historia y lo que necesitas. A veces lo que ayuda es un espacio donde eso pueda explorarse en compañía de otra persona. Inspirada en el trabajo de Françoise Davoine y Jean-Max Gaudillière, pienso la terapia como una indagación compartida, en la que somos co-investigadores de lo que estás viviendo.'
			}
		],
		practice: {
			title: 'Cómo funciona en la práctica:',
			body: 'En las sesiones uso principalmente la terapia de palabra. También trabajo a menudo con la escritura, el dibujo o trayendo objetos que tengan significado para ti. A veces lo que es difícil decir directamente encuentra otras formas de expresarse.'
		}
	},
	topics: {
		id: 'topics',
		title: 'Puedo acompañarte con:',
		items: [
			'El trauma y sus efectos',
			'Migración, choque cultural y adaptación a un nuevo país',
			'Duelo y pérdida',
			'Soledad y aislamiento',
			'Violencia de género, incluida la violencia sexual',
			'Preguntas sobre identidad y sexualidad',
			'Repensar el amor, la amistad y las relaciones',
			'Pensamientos persistentes e intrusivos',
			'Sentirse perdido/a o sin rumbo'
		]
	},
	office: {
		id: 'office',
		title: 'Oficina',
		intro: 'Aquí es donde trabajo. Está a pocos pasos de la estación de tren de Lunetten.',
		photos: [
			{
				src: '/images/office-room.jpg',
				alt: 'Interior de la oficina con una pared naranja, un sofá de terciopelo azul, un sillón de pana rojo óxido, un sillón verde oliva, una estantería alta y plantas en macetas'
			},
			{
				src: '/images/office-lounge.jpg',
				alt: 'Sala blanca y luminosa con grandes ventanales, una mesa de madera con cuatro sillas, un sillón verde oliva, una mesa redonda pequeña y un sofá rojo óxido con un cojín mostaza'
			}
		],
		team: {
			intro: 'La comparto con mis dos colegas: ',
			colleagues: [
				{ name: 'Clem (Psymobil)', url: 'https://www.psymobil.com/me' },
				{ name: 'Rodrigo (Plexus Psyche)', url: 'https://www.plexuspsyche.com/en/rodrigo' }
			],
			conjunction: ' y ',
			outro:
				'. Ofrecemos terapia individual y trabajamos juntos facilitando talleres en universidades y espacios comunitarios.',
			photo: {
				src: '/images/colleagues.jpg',
				alt: 'Tres personas sentadas muy juntas en un sofá azul frente a una pared naranja, sonriendo a la cámara'
			}
		}
	},
	contact: {
		id: 'contact',
		title: 'Contacto',
		intro: 'Puedes escribirme.',
		email: 'Emilia.larraechea@gmail.com',
		phone: '+31 61 6666 202',
		labels: {
			email: 'Correo electrónico',
			phone: 'Teléfono',
			whatsapp: 'WhatsApp'
		},
		map: {
			alt: 'Mapa de Google centrado en la estación de Utrecht Lunetten'
		}
	},
	footer: {
		credential: 'Emilia Larraechea · Psicóloga en Utrecht',
		copyright: '©'
	},
	meta: {
		title: 'Emilia Larraechea — Psicóloga en Utrecht',
		description:
			'Psicóloga en Utrecht. Psicoterapia en español e inglés, online y presencial. Trauma, migración, duelo, violencia de género y preguntas sobre la identidad.',
		ogTitle: 'Emilia Larraechea — Psicóloga en Utrecht',
		ogDescription: 'Psicoterapia en español e inglés, online y presencial en los Países Bajos.'
	}
} satisfies SiteContent;
