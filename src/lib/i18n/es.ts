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
			projects: 'Proyectos',
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
		title: 'Psicóloga · Psicoanálisis clínico',
		promise:
			'Mi enfoque es construir, junto a cada persona, un espacio propio, libre de juicio, donde su sufrimiento singular pueda pensarse y elaborarse en compañía.',
		languages: 'Trabajo en inglés y español, online y presencial en los Países Bajos.',
		ctas: {
			book: 'Escríbeme',
			approach: 'Cómo trabajo'
		},
		portrait: {
			src: '/images/portrait.jpg',
			alt: 'Emilia Larraechea'
		}
	},
	about: {
		id: 'about',
		title: 'Sobre mí',
		paragraphs: [
			'Me formé como psicóloga en la Universidad de Chile, donde también completé un postgrado en psicoanálisis clínico. Hace tres años me mudé a los Países Bajos, donde vivo y trabajo en Utrecht mientras terminaba un Máster en Estudios Literarios y Análisis Cultural en la Universidad de Ámsterdam.',
			'A lo largo de mi experiencia profesional me he especializado en acompañar a personas que están procesando experiencias traumáticas, duelos migratorios, violencia de género y una sensación de falta de rumbo o de motivación. Abordo estas experiencias en su complejidad: no solo como un conflicto individual, sino como algo moldeado por contextos sociales y culturales, y por aquello que excede nuestra conciencia.',
			'Me interesan los vínculos entre psicoterapia, literatura, estudios de género y el campo cultural. Mi enfoque es construir, junto a cada persona, un espacio propio, libre de juicio, donde su sufrimiento singular pueda pensarse y elaborarse en compañía.'
		]
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
				body: 'Vivimos en un mundo atravesado por dinámicas y desequilibrios de poder, por eso me parece importante comprender cómo operan el género, la clase, la raza y la cultura, para no reproducir violencia. La salud mental no existe solo en la persona, también la moldean las condiciones en que vive.'
			},
			{
				title: 'Contextualizado',
				body: 'La cultura y el contexto en que creciste moldean qué te importa y qué puede ayudarte. Por eso no creo en intervenciones universales ni fijas: el trabajo se construye caso a caso.'
			},
			{
				title: 'Afirmativo',
				body: 'Trabajo desde una postura no patologizante. Esto incluye un enfoque afirmativo de las identidades queer, LGBTQ+ y del poliamor.'
			},
			{
				title: 'Colaborativo',
				body: 'Tú eres quien más sabe de tu propia historia y de lo que necesitas. A veces lo que ayuda es un espacio donde eso pueda explorarse en compañía de otra persona. Inspirada en el trabajo de Françoise Davoine y Jean-Max Gaudillière, pienso la terapia como una indagación compartida, en la que somos co-investigadores de lo que estás viviendo.'
			}
		],
		practice: {
			title: 'Cómo funciona esto en la práctica:',
			body: 'En las sesiones uso principalmente la terapia de palabra. También trabajo a menudo con la escritura, el dibujo o trayendo objetos que tengan significado para ti. A veces lo difícil de decir directamente encuentra otras formas de expresarse.'
		}
	},
	topics: {
		id: 'topics',
		title: 'Puedo acompañarte con',
		items: [
			'Trauma y sus efectos',
			'Migración, choque cultural y adaptación a un nuevo país',
			'Duelo y pérdida',
			'Soledad y aislamiento',
			'Violencia de género, incluida la violencia sexual',
			'Preguntas sobre identidad y sexualidad',
			'Repensar el amor, la amistad y las relaciones',
			'Pensamientos persistentes e intrusivos',
			'Sentirse perdido o sin rumbo'
		],
		weWorkWith: {
			src: '/images/we-work-with.png',
			alt: 'Trabajamos con: TDAH, ansiedad y ataques de pánico, depresión, pensamientos obsesivos (TOC), burnout y estrés laboral, trauma y TEPT, duelo y pérdida, choque cultural y estrés migratorio, baja autoestima, dificultades en las relaciones, soledad y aislamiento, identidad y sexualidad. Más allá del diagnóstico.'
		}
	},
	office: {
		id: 'office',
		title: 'Consultorio',
		paragraphs: [
			'Aquí es donde trabajo: está a pasos de la estación de tren de Lunetten.',
			'Lo comparto con mis dos colegas: Clem (Psymobil) y Rodrigo (Plexus Psyche). Ofrecemos terapia individual y trabajamos juntos facilitando talleres en universidades y espacios comunitarios.'
		],
		photos: [
			{
				src: '/images/office-room.jpg',
				alt: 'La consulta, con dos sillones y vista a la calle'
			},
			{
				src: '/images/office-lounge.jpg',
				alt: 'El espacio compartido, con sofás y una mesa baja'
			}
		],
		team: {
			title: 'El equipo',
			body: 'Clem, Rodrigo y yo compartimos estas salas.',
			photo: {
				src: '/images/colleagues.jpg',
				alt: 'Emilia con sus dos colegas, Clem y Rodrigo'
			}
		}
	},
	projects: {
		id: 'projects',
		title: 'Proyectos',
		items: [
			'Taller de collage DVK',
			'Taller de migración Well Being Week UU',
			'Taller de Burn Out Humanities Lab UvA',
			'Holding stories together DVK',
			'Taller de sesgos de género D&I week Delft University',
			'Congreso de Gante: Sobre el poema y su interrupción del saber',
			'Clase UU: Por qué el psicoanálisis en un contexto internacional'
		]
	},
	contact: {
		id: 'contact',
		title: 'Contacto',
		intro: 'Puedes escribirme.',
		email: '[correo@ejemplo.com]',
		phone: '[+31 0 000 000 00]',
		city: 'Utrecht, Países Bajos',
		availability: '[Disponibilidad — días/horarios o nota general.]',
		formNote:
			'El formulario de contacto aún no está habilitado. Puedes escribirme directamente por correo o por teléfono/WhatsApp.',
		confidentiality:
			'Nota sobre confidencialidad: todas las comunicaciones se tratan con cuidado, conforme a las obligaciones de confidencialidad y al RGPD.',
		labels: {
			email: 'Correo electrónico',
			phone: 'Teléfono / WhatsApp',
			city: 'Ciudad',
			availability: 'Disponibilidad'
		},
		map: {
			alt: 'Mapa de los alrededores de la estación de Lunetten, en Utrecht',
			linkLabel: 'Abrir en OpenStreetMap',
			linkUrl: 'https://www.openstreetmap.org/?mlat=52.06641&mlon=5.14326#map=15/52.06641/5.14326'
		}
	},
	footer: {
		credential: 'Emilia Larraechea · Psicóloga, Universidad de Chile · Psicoanálisis clínico',
		privacy: 'Privacidad (marcador)',
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
