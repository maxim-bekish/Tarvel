<template>
	<Form v-slot="$form" :initialValues="initialValues" @submit="onFormSubmit" class="choice">
		<div class=" ">
			<input @click="toggle" readonly :value="kuda" type="text" />
			<Popover ref="op" class="popover">
				<CheckboxGroup name="country" class="popover__content">
					<div>
						<v-text tag="h4" class="popover__content-group-title text-500-16-19">Популярные</v-text>
						<div class="popover__content-group scroll">
							<v-checkbox
								v-for="item in initialValues.popularCountries"
								:key="item.id"
								v-model="item.checked"
								:code="item.code"
								:title="item.title" />
						</div>
					</div>
					<div>
						<v-text tag="h4" class="popover__content-group-title text-500-16-19">Все страны</v-text>
						<div class="popover__content-group scroll">
							<v-checkbox
								v-for="item in initialValues.otherCountries"
								:key="item.id"
								v-model="item.checked"
								:code="item.code"
								:title="item.title" />
						</div>
					</div>
				</CheckboxGroup>
				<hr class="popover__line" />
				<div class="popover__control">
					<v-button label="сбросить" color="gray" variant="ghost" />
					<v-button @click="showForm" uppercase label="выбрать" icon="icon-arrowRightDown" />
				</div>
			</Popover>
		</div>
		<v-button color="red" type="submit" uppercase label="оставить заявку" />
	</Form>
</template>
<script setup lang="ts">
import Popover from 'primevue/popover';

import { Form } from '@primevue/forms';

import { ref } from 'vue';
const op = ref();
const popularCountries = [
	{ title: 'Турция', id: 0, code: 'turkey' },
	{ title: 'Египет', id: 1, code: 'egypt' },
	{ title: 'Мальдивы', id: 2, code: 'maldives' },
	{ title: 'ОАЭ', id: 3, code: 'uae' },
	{ title: 'Греция', id: 4, code: 'greece' },
];

const otherCountries = [
	{ title: 'Шри-Ланка', id: 5, code: 'sri-lanka' },
	{ title: 'Абхазия', id: 6, code: 'abkhazia' },
	{ title: 'Азербайджан', id: 7, code: 'azerbaijan' },
	{ title: 'Армения', id: 8, code: 'armenia' },
	{ title: 'Беларусь', id: 9, code: 'belarus' },
	{ title: 'Венесуэла', id: 10, code: 'venezuela' },
	{ title: 'Вьетнам', id: 11, code: 'vietnam' },
	{ title: 'Куба', id: 12, code: 'cuba' },
	{ title: 'Грузия', id: 13, code: 'georgia' },
	{ title: 'Индия', id: 14, code: 'india' },
	{ title: 'Китай', id: 15, code: 'china' },
	{ title: 'Таиланд', id: 16, code: 'thailand' },
	{ title: 'Индонезия', id: 17, code: 'indonesia' },
	{ title: 'Испания', id: 18, code: 'spain' },
	{ title: 'Италия', id: 19, code: 'italy' },
	{ title: 'Франция', id: 20, code: 'france' },
	{ title: 'Германия', id: 21, code: 'germany' },
	{ title: 'Португалия', id: 22, code: 'portugal' },
	{ title: 'Япония', id: 23, code: 'japan' },
];

const kuda = ref('куда');

const toggle = (event: Event) => {
	op.value.toggle(event);
};
const initialValues = ref({
	popularCountries: [
		...popularCountries.map(item => ({
			...item, // Скопируем свойства item
			checked: true, // Добавляем новое поле
		})),
	],
	otherCountries: [
		...otherCountries.map(item => ({
			...item, // Скопируем свойства item
			checked: false, // Добавляем новое поле
		})),
	],
});
const showForm = () => {
	const selectedCountries = [
		...initialValues.value.popularCountries.filter(item => item.checked),
		...initialValues.value.otherCountries.filter(item => item.checked),
	];
	console.log('[selected countries]', selectedCountries);
};
const onFormSubmit = () => {
	console.log('[submit]', initialValues.value);
};
</script>

<style lang="scss" scoped>
.popover {
	border: none !important;
	--p-popover-border-radius: 30px;
	&::before,
	&::after {
		display: none !important;
	}
	&__content {
		padding: 40px;
		padding-bottom: 15px;
		display: flex;
		gap: 54px;
		&-group {
			overflow-y: auto;
			overflow-x: hidden;
			max-height: 250px;
			max-width: 200px;
			display: flex;
			flex-direction: column;
			gap: 13px;
			&-title {
				margin-bottom: 20px;
			}
			&-item {
				label {
					cursor: pointer;
				}
				display: flex;
				align-items: center;
				gap: 10px;
			}
		}
	}
	&__line {
		// color: rgba(212, 212, 212, 1);
		border: none;
		height: 2px;
		background: rgba(212, 212, 212, 1);
	}
	&__control {
		display: flex;

		justify-content: space-between;
		padding: 20px 40px;
	}
}
.choice {
	background-color: var(--white);
	border-radius: 30px;
	display: flex;
	align-items: center;
}
</style>
