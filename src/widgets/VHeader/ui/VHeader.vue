<script lang="ts" setup>
import ItemNav from './ItemNav.vue';

const menu = [
	{ title: 'Подбор тура', href: '#', id: 0 },
	{ title: 'Горящие туры', href: '#', id: 1 },
	{ title: 'Oтели', href: '#', id: 2 },
	{ title: 'Страны', href: '#', id: 3 },
];
</script>

<template>
	<div class="header container">
		<div class="header__logo">
			<img src="../assets/logo.svg" alt="Example SVG" />
		</div>
		<ul class="header__menu">
			<item-nav v-for="item in menu" :key="item.id" :item="item" />
		</ul>
		<div class="header__controls">
			<v-button
				outline
				v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }"
				label="оставить заявку" />
			<div class="header__actions">
				<div class="header__actions-group">
					<Button
						class="header__action-button"
						severity="secondary"
						variant="link"
						v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }"
						icon="icon icon-call" />
					<Button
						class="header__action-button"
						severity="secondary"
						variant="link"
						icon="icon icon-location" />
				</div>
				<div class="header__divider"></div>
				<div class="header__burger">
					<Button
						class="header__burger-button"
						severity="secondary"
						variant="link"
						icon="icon icon-burger" />
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 80px;
	height: 85px;
	&__menu {
		display: flex;
		gap: 40px;
	}
	&__controls {
		display: flex;
		gap: 30px;
	}
	&__actions {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	&__divider {
		width: 1px;
		height: 100%;
		background-color: #e2e2e2;
	}
}
</style>
