export function useMerchantsListQuery () {
  return useAsyncData('merchants', () =>
    $fetch('https://interview-api.azkiloan.com/api/v1/merchants'),
  )
}
