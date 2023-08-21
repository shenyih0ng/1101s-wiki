const defaultTheme = require('tailwindcss/defaultTheme')
const starlightPlugin = require('@astrojs/starlight-tailwind');

// Generated color palettes
const accent = { 200: '#b5caea', 600: '#3068c2', 900: '#193158', 950: '#15243c' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
			fontFamily: {
				// Your preferred text font. Starlight uses a system font stack by default.
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				// Your preferred code font. Starlight uses system monospace fonts by default.
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [starlightPlugin()],
};
