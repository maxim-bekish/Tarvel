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
    <a class="text-uppercase text-400-14-16" :href="item.href">{{
      item.title
    }}</a>
  </li>
</template>
<style lang="scss" scoped>
</style>
