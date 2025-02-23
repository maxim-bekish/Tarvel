<script setup lang="ts">
import VHeader from '@widgets/VHeader';
import VFooter from '@widgets/VFooter';
</script>

<template>
	<div class="wrapper">
		<v-header />
		<slot />
		<v-footer />
	</div>
</template>
<style lang="scss" scoped>
.wrapper {
	margin: 0 auto;
}
</style>
