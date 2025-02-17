<script setup lang="ts">
import AppHeader from '../components/AppHeader/AppHeader.vue';
import AppFooter from '../components/AppFooter/AppFooter.vue';
</script>

<template>
	<div class="wrapper">
		<app-header />
		<slot />
		<app-footer />
	</div>
</template>
<style lang="scss" scoped>
.wrapper {


	margin: 0 auto;
}
</style>
