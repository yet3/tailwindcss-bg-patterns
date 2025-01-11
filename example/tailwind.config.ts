import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

export default {
	content: { files: ['./src/**/*.{html,js,svelte,ts}'], extract },

	theme: {
		screens,
		fontSize,
		extend: {
			backgroundColor: {
				code: '#0d1117'
			},
			textColor: {
				class: '#a5d6ff'
			},
			screens: {
				'2xs': '22.5rem',
				xs: '28.125rem'
			}
		}
	},

	plugins: [fluid, require('../dist/index.mjs')]
} satisfies Config;
