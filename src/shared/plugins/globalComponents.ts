import { defineNuxtPlugin } from '#app';
import { VButton } from '@shared/ui';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.component('v-button', VButton);
});
