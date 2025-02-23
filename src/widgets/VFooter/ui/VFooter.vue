<script lang="ts" setup>
import InputMail from './InputMail.vue';
const menu = [
	{ title: 'Подбор тура', href: '#', id: 0 },
	{ title: 'Горящие туры', href: '#', id: 1 },
	{ title: 'Страны и отели', href: '#', id: 2 },
	{ title: 'Priority', href: '#', id: 3 },
	{ title: 'оплата ', href: '#', id: 4 },
	{ title: 'отзывы', href: '#', id: 5 },
	{ title: 'О нас', href: '#', id: 6 },
	{ title: 'контакты', href: '#', id: 7 },
];

const socialNetworking = [
	{ title: 'facebook', href: '#', id: 0 },
	{ title: 'instagram', href: '#', id: 1 },
	{ title: 'telegram', href: '#', id: 2 },
	{ title: 'whatsapp', href: '#', id: 3 },
	{ title: 'ok-ru', href: '#', id: 4 },
	{ title: 'vk', href: '#', id: 5 },
];
</script>
<template>
	<footer class="container footer">
		<div class="footer__top">
			<div class="footer__logo">
				<i class="footer__logo-icon icon icon-logo"></i>
			</div>
			<div class="footer__subscription">
				<p class="footer__subscription-text text-300-12-14 text-uppercase">
					Узнавайте о горящих турах первыми
				</p>
				<input-mail class="footer__subscription-input" />
			</div>
		</div>
		<ul class="footer__menu">
			<li class="footer__menu-item" v-for="item in menu" :key="item.id">
				<a class="footer__menu-link text-300-12-14 text-uppercase" :href="item.href">
					{{ item.title }}
				</a>
			</li>
		</ul>
		<div class="footer__bottom">
			<ul class="footer__social">
				<li class="footer__social-item" v-for="item in socialNetworking" :key="item.id">
					<a class="footer__social-link" :href="item.href">
						<i class="footer__social-icon icon" :class="`icon-${item.title}`"></i>
					</a>
				</li>
			</ul>
			<p class="footer__copyright text-300-12-14">2023 © Anex Tour - Туристическая компания</p>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	display: flex;
	flex-direction: column;
	background-color: var(--black);
	* {
		color: var(--white);
	}
	&__top {
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__subscription {
		display: flex;
		align-items: center;
		gap: 20px;
		&-text {
			max-width: 150px;
			letter-spacing: 0.2px;
		}
	}

	&__menu {
		height: 110px;
		display: flex;
		gap: 55px;
		border-block: 1px solid var(--gray);
		align-items: center;
		justify-content: center;

		&-link {
			text-wrap: nowrap;
		}
	}

	&__bottom {
		height: 170px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}

	&__social {
		display: flex;
		gap: 40px;
		align-items: center;
		justify-content: center;
		&-item {
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background-color: var(--white);
			width: 32px;
		}
	}

	&__copyright {
		color: rgba(82, 82, 82, 1);
	}
}
</style>
