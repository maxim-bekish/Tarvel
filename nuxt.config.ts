// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vueuse/nuxt', '@nuxt/fonts', 'dayjs-nuxt', '@primevue/nuxt-module'],
	fonts: {
		families: [{ name: 'Montserrat', provider: 'google' }],
	},
	primevue: {
		options: {
			theme: {
				preset: definePreset(Aura, {
					semantic: {
						primary: {
        //  настроить свои цвета
						},
					},
				}),
			},
		},
	},
});
