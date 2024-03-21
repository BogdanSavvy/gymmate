import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// 'dark-gray': '#393E46',
				'dark-gray': '#222831',
				'custom-white': '#F7F7F7',
				gray: '#929AAB',
				cream: '#EEEEEE',
			},
			backgroundImage: {
				'hero-pattern': "url('/images/sunset_ocean_tree.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
