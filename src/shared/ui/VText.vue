<script lang="ts" setup>
interface TextProps {
	tag?: 'label' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<TextProps>(), {
	tag: 'p',
});
</script>

<template>
	<component :is="tag">
		<slot></slot>
	</component>
</template>

<style lang="scss" scope></style>
