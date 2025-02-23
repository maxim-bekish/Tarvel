<template>
	<div class="checkbox">
		<input
			:disabled="disabled"
			v-model="checked1"
			:id="code"
			class="checkbox__input"
			type="checkbox" />
		<span class="checkbox__checkmark">
			<i v-if="checked1" class="icon icon-check"></i>
		</span>

		<label class="checkbox__label text-300-14-19" :for="code">{{ title }}</label>
	</div>
</template>
<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		code: string;
		disabled?: boolean;
		title: string;
	}>(),
	{ disabled: false }
);
const checked1 = defineModel();
</script>

<style lang="scss" scoped>
.checkbox {
	cursor: pointer;
	display: flex;
	width: fit-content;

	position: relative;
	align-items: center;

	&__input {
		opacity: 0;
		cursor: pointer;
		width: 26px;
		height: 26px;
		min-width: 26px;
		min-height: 26px;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 99;
	}
	&__label {
		padding-left: 10px;
		cursor: pointer;
		color: rgba(28, 28, 28, 1);
	}
	&__checkmark {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 26px;
		width: 26px;
		min-width: 26px;
		min-height: 26px;
		border-radius: 50%;
		border: 2px solid;
		background-color: transparent;
		border-color: rgba(212, 212, 212, 1);
		i {
			position: relative;
			z-index: 9;
		}
	}
	&__input:checked ~ &__checkmark {
		background-color: var(--violets);
		border: none;
	}
	&__input:disabled ~ &__checkmark {
		background-color: var(--gray);
		border: none;
	}
}
</style>
