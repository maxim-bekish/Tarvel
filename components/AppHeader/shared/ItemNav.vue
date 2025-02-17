<script setup lang="ts">
defineProps<{
	item: {
		title: string;
		href: string;
		id: number;
	};
}>();
</script>

<template>
	<li class="item" v-if="item">
		<a :href="item.href">{{ item.title }}</a>
	</li>
</template>
<style lang="scss" scoped>
.item {
	a {
		color: #000;
		text-transform: uppercase;
	}
}
</style>
