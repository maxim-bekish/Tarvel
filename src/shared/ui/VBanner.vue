<template>
	<div
		class="banner"
		:style="{
			backgroundImage: `url(/img/${props.img}.jpg)`,
			paddingBlock: props.size === 'big' ? '157px 250px' : '82px 90px',
		}">
		<h1
			v-html="props.text"
			class="banner__title text-uppercase"
			:class="props.size === 'big' ? 'text-800-128-135' : 'text-800-100-135'"></h1>
		<h4
			class="banner__subtitle text-400-28-33 text-uppercase"
			:style="{ marginTop: props.size === 'big' ? '38px' : '0 ' }">
			{{ props.subText }}
		</h4>
		<i v-if="props.size === 'big'" class="icon icon-line banner__line"></i>
		<div v-if="$slots.default" class="banner__actions">
			<slot></slot>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		text: string;
		img: string;
		subText: string;
		size?: 'big' | 'default';
	}>(),
	{ size: 'big' }
);
</script>

<style lang="scss" scoped>
.banner {
	width: 100%;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	&__title {
		color: var(--white);
		text-align: center;
	}
	&__subtitle {
		text-align: center;
		color: var(--white);
	}
	&__line {
		margin-top: 33px;
		--icon-width: 16px;
		--icon-height: 87px;
		--icon-color: var(--white);
	}
	&__actions {
		margin-top: 60px;
	}
}
</style>
