<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
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
//.filter-container {
//  &__heading {
//    margin-bottom: 6px;
//  }
//  &__title {
//    font-weight: 300;
//    font-size: $header-font-size;
//  }
//}
</style>
