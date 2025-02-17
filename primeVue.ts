import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

export const primeVue = {
	options: {
		theme: {
			preset: definePreset(Aura, {
				semantic: {
					primary: {
						50: 'rgb(255, 230, 231)',
						100: 'rgb(255, 204, 206)',
						200: 'rgb(255, 153, 157)',
						300: 'rgb(255, 102, 107)',
						400: 'rgb(255, 51, 56)',
						500: 'rgb(236, 28, 36)',
						600: 'rgb(221, 26, 33)',
						700: 'rgb(192, 22, 28)',
						800: 'rgb(163, 19, 24)',
						900: 'rgb(134, 16, 19)',
						950: 'rgb(104, 13, 15)',
					},
					colorScheme: {
						light: {
							surface: {
								50: 'rgb(255, 255, 255)',
								100: 'rgb(250, 250, 250)',
								200: 'rgb(245, 245, 245)',
								300: 'rgb(240, 240, 240)',
								400: 'rgb(235, 235, 235)',
								500: 'rgb(0, 0, 0)',
								600: 'rgb(255, 255, 255)',
								700: 'rgb(220, 220, 220)',
								800: 'rgb(200, 200, 200)',
								900: 'rgb(180, 180, 180)',
								950: 'rgb(160, 160, 160)',
							},
						},
					},
					formField: {
						borderRadius: '30px',
					},
				},
			}),
		},
	},
};