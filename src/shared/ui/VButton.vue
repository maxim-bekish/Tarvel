<script lang="ts" setup>
interface ButtonProps {
	/** Текст метки кнопки */
	label?: string | null;
	/** Вариант кнопки (default, outline, ghost) */
	variant?: 'default' | 'outline' | 'ghost';
	/** Цветовая схема кнопки (черный, красный, серый) */
	color?: 'black' | 'red' | 'gray';
	/** Тип кнопки (button, submit) */
	type?: 'button' | 'submit';
	/** Класс иконки для отображения на кнопке */
	icon?: string | null;
	/** Позиция иконки относительно текста кнопки */
	iconPos?: 'right' | 'left';
	/** Размер иконки (sm, mb, xl) */
	iconSize?: 'sm' | 'mb' | 'xl';
	/** Текст в верхнем регистре (boolean) */
	uppercase?: boolean;
}

/**
 * Кнопка (e-bottom) с поддержкой разных вариантов стилей, цветовых схем и иконок.
 *
 * Свойства:
 * @prop {string | null} label - Текст метки кнопки.
 * @prop {'default' | 'outline' | 'ghost'} variant - Вариант кнопки (default, outline, ghost).
 * @prop {'black' | 'red' | 'gray'} color - Цветовая схема кнопки (черный, красный, серый).
 * @prop {'button' | 'submit'} type - Тип кнопки (button, submit).
 * @prop {string | null} icon - Класс иконки для отображения на кнопке.
 * @prop {'right' | 'left'} iconPos - Позиция иконки относительно текста кнопки.
 * @prop {'sm' | 'mb' | 'xl'} iconSize - Размер иконки (sm, mb, xl).
 * @prop {boolean} uppercase - Размер иконки (sm, mb, xl).
 */
const props = withDefaults(defineProps<ButtonProps>(), {
	label: null,
	icon: null,
	type: 'button',
	iconPos: 'right',
	color: 'black',
	variant: 'default',
	iconSize: 'sm',
	uppercase: false,
});

// Деструктуризация пропсов для удобства использования в шаблоне
const { label, variant, color, icon, iconPos, iconSize } = toRefs(props);

/**
 * Формирование классов для кнопки на основе переданных пропсов.
 * Включает в себя стили для варианта, цветовой схемы и логики отображения иконки.
 */
const buttonClass = computed(() => [
	`e-bottom-${variant.value}-${color.value}`,
	`e-bottom-${variant.value}`,
	label.value ? '' : 'e-bottom-icon-only',
]);
</script>

<template>
	<button
		:style="{ flexDirection: iconPos === 'left' ? 'row-reverse' : 'row' }"
		class="e-bottom"
		:class="buttonClass">
		<!-- Отображение метки кнопки -->
		<span
			v-if="label"
			class="e-bottom-label text-500-16-19"
			:class="{ 'text-uppercase': uppercase }">
			{{ label }}
		</span>

		<!-- Отображение иконки, если она задана -->
		<i
			v-if="icon"
			:class="['e-bottom-icon icon', icon, iconSize && `e-bottom-icon-size-${iconSize}`]"></i>
	</button>
</template>

<style lang="scss" scope>
/**
 * Базовые цвета и анимации для кнопки
 */
$default-bg: rgba(28, 28, 28, 1);
$default-bg-outline-hover: rgba(248, 248, 248, 1);
$red-bg-outline-hover: rgba(221, 26, 33, 0.1);
$red: rgba(236, 28, 36, 1);
$animate: all 0.3s ease-in-out;
$opacity: 0.8;

/**
 * Основной стиль кнопки
 */
.e-bottom {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid;
	border-color: var(--transparent);
	background: var(--transparent);
	outline: none;
	cursor: pointer;
	border-radius: 30px;
	gap: 8px;
	height: 40px;
	padding: 10px 15px;
	transition: $animate;

	/**
   * Варианты кнопки: default, outline, ghost
   */
	&-default {
		color: var(--white);
		--icon-color: var(--white);

		&-red {
			background: $red;
			border-color: $red;
		}
		&-black {
			background: $default-bg;
			border-color: $default-bg;
		}
		&-gray {
			background: var(--gray);
			border-color: var(--gray);
		}

		&:hover {
			opacity: $opacity;
			transition: $animate;
		}
	}

	&-outline {
		background: var(--transparent);

		&-red {
			border-color: $red;
			color: $red;
			--icon-color: rgba(236, 28, 36, 1);
			&:hover {
				background: $red-bg-outline-hover;
				transition: $animate;
			}
		}
		&-black {
			border-color: $default-bg;
			color: $default-bg;
			--icon-color: rgba(28, 28, 28, 1);
			&:hover {
				background: $default-bg-outline-hover;
				transition: $animate;
			}
		}
		&-gray {
			color: var(--gray);
			border-color: var(--gray);
			--icon-color: rgb(115, 115, 115);
			&:hover {
				background: rgb(240, 240, 240);
				transition: $animate;
			}
		}
	}

	&-ghost {
		&:hover {
			opacity: $opacity;
			transition: $animate;
		}

		&-red {
			color: $red;
			--icon-color: rgba(236, 28, 36, 1);
		}
		&-black {
			color: $default-bg;
			--icon-color: rgba(28, 28, 28, 1);
		}
		&-gray {
			color: var(--gray);
			--icon-color: rgb(115, 115, 115);
		}
	}

	/**
   * Иконка
   */
	&-icon {
		&-only {
			padding: 0px;
			width: 40px;
			height: 40px;
			aspect-ratio: 1/1;
			border-radius: 50%;
		}

		&-size {
			&-sm {
				--icon-width: 12px;
				--icon-height: 12px;
			}
			&-md {
				--icon-width: 18px;
				--icon-height: 18px;
			}
			&-xl {
				--icon-width: 24px;
				--icon-height: 24px;
			}
		}
	}
}
</style>
