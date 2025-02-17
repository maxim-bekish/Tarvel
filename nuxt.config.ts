// https://nuxt.com/docs/api/configuration/nuxt-config

import { primeVue } from './primeVue';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vueuse/nuxt', '@nuxt/fonts', 'dayjs-nuxt', '@primevue/nuxt-module'],
	fonts: {
		families: [{ name: 'Roboto', provider: 'google' }],
	},
	css: ['~/assets/style/colors.scss', '~/assets/style/main.scss', '~/assets/style/icons.scss'],
	primevue: primeVue,
});
