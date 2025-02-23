<template>
	<form class="choice">
		<div class="card flex justify-center">
			<input @click="toggle" readonly :value="kuda" type="text" />
			<Popover ref="op" class="popover">
				<div class="popover__content">
					<p @click="inputItem" style="color: black">Туascascasда</p>
				</div>
				<hr />
				<div class="popover__control">
					<v-button label="выбрать" icon="icon-arrowRightDown" iconPos="right" variant="default" />
				</div>
			</Popover>
		</div>

	</form>
</template>
<script setup lang="ts">
import Popover from 'primevue/popover';
import { ref } from 'vue';
const op = ref();
const kuda = ref('куда');

const toggle = (event: Event) => {
	op.value.toggle(event);
};
const inputItem = (event: Event) => {
	const target = event.target as HTMLElement;
	kuda.value = target.textContent || '';
};
</script>

<style lang="scss">
.popover {
	&::before,
	&::after {
		display: none;
	}
	&__content {
		padding: 40px;
		padding-bottom: 0;
	}
	&__control {
		padding: 20px;
	}
}
.choice {
	padding: 20px;
	gap: 20px;
	.www {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	background-color: var(--white);
	border-radius: 30px;
	display: flex;
	align-items: center;
}
</style>
