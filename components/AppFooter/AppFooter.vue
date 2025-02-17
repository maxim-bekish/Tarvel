<script lang="ts" setup>
import InputMail from './InputMail/InputMail.vue';
const menur = [
	{ title: 'Подбор тура', href: '#', id: 0 },
	{ title: 'Горящие туры', href: '#', id: 1 },
	{ title: 'Страны и отели', href: '#', id: 2 },
	{ title: 'Priority', href: '#', id: 3 },
	{ title: 'оплата ', href: '#', id: 4 },
	{ title: 'отзывы', href: '#', id: 5 },
	{ title: 'О нас', href: '#', id: 6 },
	{ title: 'контакты', href: '#', id: 7 },
];
</script>
<template>
	<Footer class="container footer">
		<div>
			<div class="logo"></div>
			<div>
				<p>Узнавайте о горящих турах первыми</p>
				<input-mail />
			</div>
		</div>
		<ul>
			<li>g</li>
		</ul>
		<div></div>
	</Footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--black);
	* {
		color: var(--white);
	}
}
</style>
