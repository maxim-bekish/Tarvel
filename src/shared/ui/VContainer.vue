<template>
	<div class="v-container">
		<div class="v-container__header">
			<span class="v-container__category" :class="`v-container__category-${spanPos}`">
				{{ span }}
			</span>
			<div class="v-container__title">
				<h2 class="v-container__title-heading">{{ title }}</h2>
				<p class="v-container__title-subheading">{{ subText }}</p>
			</div>
		</div>
		<div class="v-container__content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		span?: string;
		spanPos?: 'up' | 'left';
		title: string;
		subText: string;
		size?: 'sm' | 'md' | 'lg';
	}>(),
	{
		size: 'md',
		sizePos: 'left',
	}
);
</script>
<style lang="scss" scoped>

.v-container{
  padding-block: 140px;
}
</style>
