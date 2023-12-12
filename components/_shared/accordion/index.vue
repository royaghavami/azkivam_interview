<template>
  <div class="accordion"><slot /></div>
</template>

<script setup>
import { computed, provide, ref } from 'vue'

// Holds the id of the currently expanded panel
const expanded = ref(null)

// Use `provide` to communicate with the child panels
provide('accordion-register', () => {
  const id = Symbol('accordion-container')

  return {
    expanded: computed(() => expanded.value === id),

    toggle() {
      expanded.value = expanded.value === id ? null : id
    },

    unregister() {
      if (expanded.value === id) {
        expanded.value = null
      }
    },
  }
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
