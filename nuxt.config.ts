// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import { primeVue } from './primeVue';

console.log('[Resolved Path]:', path.resolve(__dirname, 'src/shared/layouts/default.vue'));

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vueuse/nuxt', '@nuxt/fonts', 'dayjs-nuxt', '@primevue/nuxt-module'],
	fonts: {
		families: [{ name: 'Roboto', provider: 'google' }],
	},
	plugins: ['src/shared/plugins/globalComponents.ts'],
	alias: {
		'@app': path.resolve(__dirname, 'src/app'),
		'@pages': path.resolve(__dirname, 'src/pages'),
		'@widgets': path.resolve(__dirname, 'src/widgets'),
		'@features': path.resolve(__dirname, 'src/features'),
		'@entities': path.resolve(__dirname, 'src/entities'),
		'@shared': path.resolve(__dirname, 'src/shared'),
	},
	css: [
		'@shared/styles/colors.scss',
		'@shared/styles/main.scss',
		'@shared/styles/icons.scss',
		'@shared/styles/text.scss',
	],
	dir: {
		pages: path.resolve(__dirname, 'src/pages'),
		layouts: 'src/shared/layouts',
	},
	primevue: primeVue,
});
