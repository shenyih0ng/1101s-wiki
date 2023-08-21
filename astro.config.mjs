import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.1101s.wiki',
	integrations: [
		starlight({
			title: '1101s.wiki',
			favicon: './public/favicon.ico',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true
			},
			social: {
				github: 'https://github.com/shenyih0ng/1101s-wiki',
			},
			sidebar: [
				{
					label: 'Studios',
					autogenerate: { directory: 'studios' },
				},
			],
			customCss: [
				'./src/styles/tailwind.css',
				'@fontsource/inter',
				'@fontsource/ibm-plex-mono',
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},
});
