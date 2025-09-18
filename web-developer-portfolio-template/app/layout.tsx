import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';


const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {



	title: 'Francisco Javier Paredes | Frontend Developer en Argentina',
	description:
		"Portfolio de Francisco Javier Paredes, Desarrollador Frontend de Argentina especializado en React, Next.js y tecnologías web modernas. Creo experiencias digitales rápidas, receptivas y fáciles de usar desde Jujuy para el mundo.",
	keywords: [
		'Francisco Javier Paredes',
		'Frontend Developer Argentina',
		'Desarrollador Web Argentina',
		'React Developer',
		'Next.js Developer',
		'JavaScript',
		'TypeScript',
		'UI/UX',
		'Diseño Web Responsivo',
		'Optimización de Performance',
		'SEO',
		'Accesibilidad Web',
		'Desarrollo Web Moderno',
		'Progressive Web Apps',
		'Web Jujuy',
		'Portfolio',
	],
	authors: [{ name: 'Francisco Javier Paredes' }],
	creator: 'Francisco Javier Paredes',
	publisher: 'Francisco Javier Paredes',
	openGraph: {
		title: 'Francisco Javier Paredes | Portfolio Frontend Developer en Argentina',
		description: 'Explora mi portfolio y proyectos.',
		url: 'https://franciscoparedes.vercel.app/',
		siteName: 'Francisco Javier Paredes Portfolio',
		images: [
			
			{
				url: 'https://cdn.icon-icons.com/icons2/2018/PNG/512/code_html_link_share_icon_123633.png',
				width: 1200,
				height: 630,
				alt: 'Portfolio Francisco Javier Paredes',
			},
		],
		locale: 'es_AR',
		type: 'website',

		videos: [
			{
				url: 'https://www.tiktok.com/@jujedev',
				type: 'text/html',
			},
		],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

				{children}
			</body>
		</html>
	);
}
