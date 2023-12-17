import { useRoute } from 'vue-router'

export interface Filter {
  page: number
  size: number
  categoryId: number | null
  merchantIds: number[]
}

export function useFilter(
  categoryId: number | null = null,
  merchantIds: number[] = [],
  page: number = 1,
) {
  const filter = reactive<Filter>({
    page,
    size: 10,
    categoryId,
    merchantIds,
  })

  const routes = useRoute()

  watch(
    () => routes.query.merchantIds,
    (newV) => {
      if (newV) {
        const newM = (newV as string).split(',').map(Number)
        filter.merchantIds.push(...newM)
      }
    },
  )
  const setPage = (page?: number) => {
    if (page) {
      filter.page = page
    }
    filter.page++
  }

  const resetPage = () => {
    filter.page = 1
  }

  const setCategory = (id: number) => {
    filter.categoryId = id
    resetPage()
  }

  const setMerchant = (id: number) => {
    filter.merchantIds.push(id)
    resetPage()
  }

  const unSetMerchant = (id: number) => {
    filter.merchantIds = filter.merchantIds.filter((m) => m !== id)
    resetPage()
  }

  const hasMerchant = (id: number) => {
    return filter.merchantIds.includes(id)
  }

  return {
    filter,
    setPage,
    resetPage,
    setCategory,
    setMerchant,
    unSetMerchant,
    hasMerchant,
  }
}
