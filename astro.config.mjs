import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.1101s.wiki',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
	integrations: [
		starlight({
			title: '1101s.wiki',
			favicon:'/favicon.ico',
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
				{
					label: 'Mastery Check',
					autogenerate: { directory: 'mastery-check' },
				},
				{
					label: 'Extras',
					autogenerate: { directory: 'extras' },
				}
			],
			customCss: [
				'./src/styles/tailwind.css',
				'@fontsource/inter',
				'@fontsource/ibm-plex-mono',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: "stylesheet",
						href: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
					}
				}
			]
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
