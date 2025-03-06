<template>
	<div class="choice__where">
		<div @click="toggle">
			<label
				for="where"
				:class="whereText ? 'text-400-12-14' : 'text-500-16-19 text-uppercase'"
				class="choice__where-text">
				Вылет
			</label>
			<input
				v-show="whereText"
				id="where"
				class="text-uppercase resetInput text-500-16-19"
				type="text"
				:value="whereText" />
		</div>

		<Popover ref="op" class="popover">
      <div class="card flex justify-center">
        <DatePicker v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </DatePicker>
    </div>
			<hr class="popover__line" />
			<div class="popover__control">
				<v-button @click="resetForm" label="Сбросить" color="gray" variant="ghost" />
				<v-button @click="showForm" uppercase label="Выбрать" icon="icon-arrowRightDown" />
			</div>
		</Popover>
	</div>
</template>

<script setup lang="ts">
import Popover from 'primevue/popover';
import DatePicker from 'primevue/datepicker';
import { ref } from 'vue';
interface Country {
	title: string;
	id: number;
	code: string;
	popular: boolean;
	checked: boolean;
}
const date = ref();
// const props = withDefaults(
// 	defineProps<{
// 		initialValues: {
// 			popularCountries: Country[];
// 			countries: Country[];
// 		};
// 		countries: Country[];
// 	}>(),
// 	{}
// );

const op = ref();

const selectedCountries = reactive<Country[]>([]);

const whereText = computed(() =>
	selectedCountries.length ? selectedCountries.map(item => item.title).join(', ') : ''
);
const toggle = (event: Event) => {
	op.value.toggle(event);
};

const showForm = () => {
	// selectedCountries.splice(
	// 	0,
	// 	selectedCountries.length,
	// 	...props.initialValues.countries.filter(item => item.checked),
	// 	...props.initialValues.popularCountries.filter(item => item.checked)
	// );
	op.value.toggle();
};

const resetForm = () => {
	// selectedCountries.forEach(item => (item.checked = false));

	// selectedCountries.splice(0, selectedCountries.length);
	op.value.toggle();
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

.choice__where {
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
</style>
