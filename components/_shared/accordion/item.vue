<template>
  <div>
    <div class="accordion-panel-header" @click="toggle">
      <NuxtLink
        :class="{ isChild: !hasChildren }"
        class="accordion-panel__title"
        :to="link"
        >{{ title }}</NuxtLink
      >
      <img
        v-if="hasChildren"
        src="/arrow.svg"
        class="accordion-panel-header__image"
        :class="{ isOpen }"
      />
    </div>
    <div v-if="isOpen && hasChildren" class="accordion-panel-body">
      <slot name="children" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAccordion } from '@/composables/use-accordion'

defineProps<{
  title: string
  link: string
  hasChildren: boolean
}>()

const { toggle, isOpen } = useAccordion()
</script>
<style scoped lang="scss">
@import 'assets/styles/colors';
.accordion-panel {
  display: flex;
  flex-direction: column;
  &__title {
    text-decoration: none;
    color: $black;
  }
  &-header {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &__image {
      position: relative;
      width: 10px;
      margin-right: 10px;
    }
  }
  &-body {
    flex: auto;
    overflow: auto;
  }
}
.isChild {
  text-decoration: none;
  color: $light-gray;
  margin: 13px 11px 0 5px;
}
.isOpen {
  transform: rotate(-180deg);
  animation: accordion-is-inactive 200ms linear forwards;
}
</style>
