/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/public/img/biztum-landing-img.png',
		title: 'Landing Page',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Developed a landing page for a marketing agency, showcasing main services they offer in the city of Huanuco, it has a WhatApp integration to interact with their potential clients.',
		demoURL: 'https://biztum.netlify.app/',
		repoURL: 'https://github.com/owms-droid/landing-hco',
		anim: 'fade-right',
	},
	{
		imgSrc: '/public/img/ctiroads-official.png',
		title: 'Landing Page',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'Landing page for a mobile app dedicated to outsource enterprise services, the purpose was to showcase the app to potential subscribers.',
		demoURL: 'http://www.ctiroads.com/',
		repoURL: '',
		anim: 'fade-up',
	},
	{
		imgSrc: '/public/img/scoreboard-app.png',
		title: 'Web App',
		skills: ['JavaScript', 'CSS'],
		descripcion:
			'Developed a useful scoreboard application to count the points made in soccer, volleyball, basketball etc. matches.',
		demoURL: 'https://oliver-simple-scoreboard.netlify.app/',
		repoURL: 'https://github.com/owms-droid/Scrimba-Scoreboard',
		anim: 'fade-left',
	},
	{
		imgSrc: '/public/img/portfolio-view.png',
		title: 'Portfolio Project',
		skills: ['JavaScript', 'CSS', 'StyledComponents'],
		descripcion:
			'Designed the first version of my personal portfolio as part of my learning experience with JavaScript, applying some dynamic animations.',
		demoURL: 'https://owms-droid.github.io/portfolio/',
		repoURL: 'https://github.com/owms-droid/portfolio',
		anim: 'fade-left',
	},
	{
		imgSrc: '/public/img/chamber-huanuco.png',
		title: 'University Project',
		skills: ['JavaScript', 'CSS', 'StyledComponents'],
		descripcion:
			'A full-stack demo website for the Chamber of Commerce from Huanuco. Built with JavaScript, HTML, and CSS. Includes a weather section, directory of businesses, and form to join the chamber.',
		demoURL: 'https://owms-droid.github.io/wdd231/chamber/',
		repoURL: 'https://github.com/owms-droid/wdd231/tree/main/chamber',
		anim: 'fade-left',
	},
	{
		imgSrc: '/public/img/code4.png',
		title: 'Project in process',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'This project is still in process.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
