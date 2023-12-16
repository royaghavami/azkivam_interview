export function useCategoryListQuery() {
  return useAsyncData('categories', () =>
    $fetch('https://interview-api.azkiloan.com/api/v1/categories'),
  )
}
