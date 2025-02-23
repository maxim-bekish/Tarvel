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
			<v-button variant="outline" uppercase label="оставить заявку" />
			<div class="header__actions">
				<div class="header__actions-group">
					<v-button
						class="header__action-button"
						variant="ghost"
						iconSize="xl"
						icon="icon icon-call" />
					<v-button
						class="header__action-button"
						variant="ghost"
						iconSize="xl"
						icon="icon icon-location" />
				</div>
				<div class="header__divider"></div>
				<div class="header__burger">
					<v-button
						class="header__burger-button"
						variant="ghost"
						iconSize="xl"
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
		&-group {
			display: flex;
			gap: 10px;
		}
	}
	&__divider {
		width: 1px;
		height: 100%;
		background-color: #e2e2e2;
	}
}
</style>
