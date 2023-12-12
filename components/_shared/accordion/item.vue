<template>
  <div class="accordion-panel">
    <div class="accordion-panel-header" @click="toggle">
      {{ title }}
      <img
        src="/arrow.svg"
        class="accordion-panel-header__image"
        :class="{ expanded }"
      />
    </div>
    <div v-if="expanded" class="accordion-panel-body"><slot /></div>
  </div>
</template>

<script setup>
import { inject, onUnmounted } from 'vue'

defineProps({
  title: {
    required: true,
    type: String,
  },
})

const register = inject('accordion-register')

const { expanded, toggle, unregister } = register()

onUnmounted(unregister)
</script>

<style scoped lang="scss">
.accordion-panel {
  display: flex;
  flex-direction: column;
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
