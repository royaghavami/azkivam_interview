export function useAccordion() {
  const isOpen = ref<boolean>(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return { toggle, isOpen }
}
