export function useProductListQuery(page: any, api: any) {
  return useAsyncData(
    'products',
    async (app) => {
      const { data, totalItems } = await $fetch(api.value, {
        method: 'POST',
        params: {
          size: 10,
          page: page.value,
        },
      })
      const previousData = app?._asyncData?.products?.data.value?.data || []
      if (page.value === 1 && previousData.length !== 0) {
        return {
          data: [...data],
          totalItems,
        }
      } else
        return {
          data: [...previousData, ...data],
          totalItems,
        }
    },
    {
      watch: [page],
    },
  )
}
