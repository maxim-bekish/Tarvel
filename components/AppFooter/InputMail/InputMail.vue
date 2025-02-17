<script setup lang="ts"></script>

<template>
	<div class="input__mail">
		<i class="icon icon-message input__icon input__icon-start"></i>
		<input class="input__text" placeholder="Введите почту" type="text" />

		<i class="icon icon-arrowRightDown input__icon input__icon-end"></i>
	</div>
</template>
<style scoped lang="scss">
.input {
	&__mail {
		max-width: 240px;
		display: flex;
		padding: 8px 17px;
		border-radius: 30px;
		border: 1px solid var(--white);
		align-items: center;
	}
	&__text {
		border: none;
		outline: none;
		padding-inline: 10px 5px;
		color: var(--gray);
		flex: 1 1 auto;
		font-size: 14px;
		line-height: 16px;
		font-weight: 300;
		min-width: 50px;
		background: var(--transparent);
		&::placeholder {
			color: inherit;
			font-size: inherit;
			font-weight: inherit;
			line-height: inherit;
		}
	}
	&__icon {
		--icon-color: var(--white);
		flex-shrink: 0;

		&-end {
			--icon-width: 18px;
			--icon-height: 18px;
		}
	}
}
</style>
