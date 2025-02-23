<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		label: string;
		variant?: 'default' | 'red';
		outline?: boolean;
		icon?: string | boolean;
		iconPos?: 'right' | 'left';
	}>(),
	{
		icon: false,
		iconPos: 'right',
		variant: 'default',
	}
);
</script>

<template>
	<button
		:style="{ flexDirection: iconPos === 'left' ? 'row-reverse' : 'row' }"
		class="e-bottom"
		:class="['e-bottom-' + variant, outline && 'e-bottom-outline']">
		<span class="e-bottom-label text-500-16-19 text-uppercase">{{ label }}</span>
		<i v-if="icon" :class="['e-bottom-icon icon', icon]"></i>
	</button>
</template>

<style lang="scss" scope>
$default-border: rgba(106, 106, 106, 1);
$default-bg: rgba(28, 28, 28, 1);

$default-bg-outline-hover: rgba(248, 248, 248, 1);
$red-bg-outline-hover: rgba(221, 26, 33, 0.1);

$red: rgba(236, 28, 36, 1);
$red-hover: rgba(221, 26, 33, 1);

.e-bottom {
	display: flex;
	align-items: center;
	border: 1px solid;
	border-color: var(--transparent);
	background: var(--transparent);
	outline: none;
	cursor: pointer;
	border-radius: 30px;
	gap: 8px;
	height: 40px;
	padding: 10px 15px;
	&-red {
		background: $red;
		border-color: $red;
		color: var(--white);

		--icon-color: var(--white);
		&:hover {
			background: $red-hover;
			border-color: $red-hover;
		}
	}
	&-default {
		background: $default-bg;
		border-color: $default-bg;
		color: var(--white);
		--icon-color: var(--white);
	}
	&-outline {
		background: transparent;

		&.e-bottom-default {
			color: $default-border; // Чёрный цвет текста

			--icon-color: var(--black);

			&:hover {
				background: $default-bg-outline-hover;
			}
		}

		// Если вместе с outline есть red
		&.e-bottom-red {
			color: $red; // Красный цвет текста
			--icon-color: rgba(236, 28, 36, 1);

			&:hover {
				background: $red-bg-outline-hover;
			}
		}
	}
}
</style>
