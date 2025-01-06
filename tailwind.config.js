/** @type {import('tailwindcss').Config} */
export default {
	content: ['./*.{html,js}'],
	theme: {
		screens: {
			smartphone: '480px',
			tablet: '768px',
			desktop: '992px',
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				green: 'hsl(144, 71%, 53%)',
				gray: '	hsl(0, 3%, 27%)',
				lightGray: 'hsl(0, 2%, 47%)',
				footer: 'hsl(0, 22%, 96%)',
				alert: 'hsl(0 , 100% , 53%)'
			},
			boxShadow: {
				shadowCard: '-5px 3px 20px -9px rgba(66, 68, 90, 1)',
				shadowCardActive: '-5px 3px 20px -9px rgba(50, 220, 118, 1)',
			},
			container: {
				center: true,
				margin: '2rem',
			},
		},
		plugins: [],
	},
}
