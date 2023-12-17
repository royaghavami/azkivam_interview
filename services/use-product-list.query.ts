import type { Filter } from '~/composables/useFilter'
import type { Product } from '~/models/product'

interface ProductQueryDto {
  data: Product[]
  totalItems: number
}

export function useProductListQuery(query: Filter) {
  return useAsyncData(
    'products',
    async (app): Promise<ProductQueryDto> => {
      const { data, totalItems } = await $fetch<ProductQueryDto>(
        `https://interview-api.azkiloan.com/api/v1/products${
          query.categoryId ? `/${query.categoryId}` : ''
        }`,
        {
          method: 'POST',
          params: {
            ...query,
          },
          body: {
            merchantIds: query.merchantIds,
          },
        },
      )

      const previousData = app?._asyncData?.products?.data.value?.data || []
      if (query.page === 1 && previousData.length !== 0) {
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
      watch: [query],
    },
  )
}
