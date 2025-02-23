import { defineNuxtPlugin } from '#app';
import { VButton, VBanner } from '@shared/ui';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.component('v-button', VButton);
	nuxtApp.vueApp.component('v-banner', VBanner);
});
