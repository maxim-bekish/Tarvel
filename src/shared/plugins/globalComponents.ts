import { defineNuxtPlugin } from '#app';
import { VButton, VBanner, VText ,VCheckbox} from '@shared/ui';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.component('v-button', VButton);
	nuxtApp.vueApp.component('v-banner', VBanner);
	nuxtApp.vueApp.component('v-text', VText);
	nuxtApp.vueApp.component('v-checkbox', VCheckbox);
});
