<template>
	<Form v-slot="$form" :initialValues="initialValues" @submit="onFormSubmit" class="choice">
		<div class="choice__where">
			<div @click="toggle">
				<label
					for="where"
					:class="whereText ? 'text-400-12-14' : 'text-500-16-19 text-uppercase'"
					class="choice__where-text">
					Куда
				</label>
				<input
					v-show="whereText"
					id="where"
					class="text-uppercase resetInput text-500-16-19"
					type="text"
					:value="whereText" />
			</div>

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
								v-for="item in initialValues.countries"
								:key="item.id"
								v-model="item.checked"
								:code="item.code"
								:title="item.title" />
						</div>
					</div>
				</CheckboxGroup>
				<hr class="popover__line" />
				<div class="popover__control">
					<v-button @click="resetForm" label="Сбросить" color="gray" variant="ghost" />
					<v-button @click="showForm" uppercase label="Выбрать" icon="icon-arrowRightDown" />
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

interface Country {
	title: string;
	id: number;
	code: string;
	popular: boolean;
	checked: boolean;
}

const selectedCountries = reactive<Country[]>([]);

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
const whereText = computed(() =>
	selectedCountries.length ? selectedCountries.map(item => item.title).join(', ') : ''
);
const toggle = (event: Event) => {
	op.value.toggle(event);
};
const initialValues = ref({
	popularCountries: [
		...countries.filter(item => item.popular).map(item => ({ ...item, checked: false })),
	],
	countries: [
		...countries.filter(item => !item.popular).map(item => ({ ...item, checked: false })),
	],
});
const showForm = () => {
	selectedCountries.push(...initialValues.value.countries.filter(item => item.checked)),
		selectedCountries.push(...initialValues.value.popularCountries.filter(item => item.checked)),
		console.log('[input countries]', selectedCountries);
};
const resetForm = () => {
	selectedCountries.forEach(item => (item.checked = false));
	console.log('[clear countries]', selectedCountries);
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
.resetInput {
	border: 0;
	outline: 0;
	width: 100%;
	background-color: transparent;
}
.choice {
	background-color: var(--white);
	border-radius: 30px;
	display: flex;
	padding-block: 12px;
	padding-inline: 28px 12px;
	align-items: center;
	min-height: 64px;

	&__where {
		height: 100%;
		width: 130px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-right: 1px solid rgba(212, 212, 212, 1);
		margin-right: 20px;
		&:last-of-type {
			border: 0;
		}
		&-text {
			pointer-events: none;
			color: var(--text-grey);
		}
	}
}
</style>
