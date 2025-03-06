<template>
	<Form v-slot="$form" :initialValues="initialValues" @submit="onFormSubmit" class="choice">
		<v-choice-where :countries="countries" :initialValues="initialValues" />
		<v-button color="red" type="submit" uppercase label="оставить заявку" />
	</Form>
</template>
<script setup lang="ts">
import { Form } from '@primevue/forms';

import VChoiceWhere from './VChoiceWhere.vue';
const countries = [
	{ title: 'Турция', id: 0, code: 'turkey', popular: true },
	{ title: 'Египет', id: 1, code: 'egypt', popular: true },
	{ title: 'Мальдивы', id: 2, code: 'maldives', popular: true },
	{ title: 'ОАЭ', id: 3, code: 'uae', popular: true },
	{ title: 'Греция', id: 4, code: 'greece', popular: true },
	{ title: 'Шри-Ланка', id: 5, code: 'sri-lanka', popular: false },
	{ title: 'Абхазия', id: 6, code: 'abkhazia', popular: false },
	{ title: 'Азербайджан', id: 7, code: 'azerbaijan', popular: false },
	{ title: 'Армения', id: 8, code: 'armenia', popular: false },
	{ title: 'Беларусь', id: 9, code: 'belarus', popular: false },
	{ title: 'Венесуэла', id: 10, code: 'venezuela', popular: false },
	{ title: 'Вьетнам', id: 11, code: 'vietnam', popular: false },
	{ title: 'Куба', id: 12, code: 'cuba', popular: false },
	{ title: 'Грузия', id: 13, code: 'georgia', popular: false },
	{ title: 'Индия', id: 14, code: 'india', popular: false },
	{ title: 'Китай', id: 15, code: 'china', popular: false },
	{ title: 'Таиланд', id: 16, code: 'thailand', popular: false },
	{ title: 'Индонезия', id: 17, code: 'indonesia', popular: false },
	{ title: 'Испания', id: 18, code: 'spain', popular: false },
	{ title: 'Италия', id: 19, code: 'italy', popular: false },
	{ title: 'Франция', id: 20, code: 'france', popular: false },
	{ title: 'Германия', id: 21, code: 'germany', popular: false },
	{ title: 'Португалия', id: 22, code: 'portugal', popular: false },
	{ title: 'Япония', id: 23, code: 'japan', popular: false },
];
const initialValues = ref({
	popularCountries: [
		...countries.filter(item => item.popular).map(item => ({ ...item, checked: false })),
	],
	countries: [
		...countries.filter(item => !item.popular).map(item => ({ ...item, checked: false })),
	],
});

const onFormSubmit = () => {
	console.log('[submit]', initialValues.value);
};
</script>

<style lang="scss" scoped>
.choice {
	background-color: var(--white);
	border-radius: 30px;
	display: flex;
	padding-block: 12px;
	padding-inline: 28px 12px;
	align-items: center;
	min-height: 64px;
}
</style>
