<template>
  <div class="accordion-panel">
    <div class="accordion-panel-header" @click="toggle">
      <NuxtLink class="accordion-panel__title" :to="link">{{ title }}</NuxtLink>
      <img
        src="/arrow.svg"
        class="accordion-panel-header__image"
        :class="{ expanded }"
      />
    </div>
    <div v-if="expanded" class="accordion-panel-body"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import { inject, onUnmounted } from 'vue'

defineProps<{
  title: string
  link: string
}>()

const register = inject('accordion-register')

const { expanded, toggle, unregister } = register()

onUnmounted(unregister)
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

.expanded {
  transform: rotate(-180deg);
  animation: accordion-is-inactive 200ms linear forwards;
}
</style>
