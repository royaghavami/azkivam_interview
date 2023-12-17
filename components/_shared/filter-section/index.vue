<template>
  <div class="filter-container">
    <div class="filter-container__heading">
      <h2 class="filter-container__title">{{ title }}</h2>
    </div>
    <div class="filter-container__content">
      <slot name="head" />
      <slot name="body" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<style lang="scss" scoped>
@import 'assets/styles/variables';
.filter-container {
  &__heading {
    margin-bottom: 6px;
  }
  &__title {
    font-weight: 300;
    font-size: $header-font-size;
  }
}
</style>
