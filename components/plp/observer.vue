<template>
  <div ref="element" />
</template>
<script setup lang="ts">
const observer = ref<null | IntersectionObserver>()
const element = ref<HTMLDivElement | null>(null)
onMounted(() => {
  createObserver()
})

onUnmounted(() => {
  observer.value?.disconnect?.()
})
const emits = defineEmits<{
  (emitName: 'intersect'): void
}>()
function createObserver() {
  if (!('IntersectionObserver' in window)) {
    return
  }
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        emits('intersect')
      }
    },
    {
      rootMargin: '0px 0px 200px 0px',
      threshold: 1.0,
    },
  )

  observer.value.observe(element.value as HTMLDivElement)
}
</script>
