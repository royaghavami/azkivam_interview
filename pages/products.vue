<template>
  <Plp
    :items="products?.data"
    :categories="categories?.data"
    :merchants="merchants?.data"
    @update:intersect="setPage"
    @update:merchant-filter="handleMerchantFilter"
  />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import Plp from '../components/plp/index.vue'
import { useCategoryListQuery } from '@/services/use-category-list.query'
import { useMerchantsListQuery } from '@/services/use-merchants-list.query'
import { useProductListQuery } from '@/services/use-product-list.query'
import { useFilter } from '~/composables/useFilter'

definePageMeta({
  name: 'products',
  path: '/products',
  alias: ['/products/:id/:slug/'],
})

const route = useRoute()
const router = useRouter()
const categoryId = (+route.params.id as number) || null
const merchantIds = route.query.merchantIds
  ? (route.query.merchantIds as string).split(',').map(Number)
  : []
console.log({ merchantIds })
const { filter, setPage, setMerchant, unSetMerchant, hasMerchant } = useFilter(
  categoryId,
  merchantIds,
)

const { data: categories } = await useCategoryListQuery()

const { data: merchants } = await useMerchantsListQuery()

const { data: products } = await useProductListQuery(filter)

const handleMerchantFilter = (id: number) => {
  console.log({merchantIds})
  if (merchantIds.includes(id)) {
    const updatedMerchantIds = merchantIds.filter(
      (merchantId) => merchantId !== id,
    )
    console.log('is', id)
    router.push({
      ...route,
      params: { ...route.params },
      query: { ...route.query, merchantIds: updatedMerchantIds.join() },
    })
  } else {
    const updatedMerchantIds = [...merchantIds, id]
    console.log('is not', id)
    console.log(updatedMerchantIds.join())
    router.push({
      ...route,
      params: { ...route.params },
      query: { ...route.query, merchantIds: updatedMerchantIds.join() },
    })
  }
  // router.push({
  //   ...route,
  //   params: { ...route.params },
  //   query: {
  //     ...route.query,
  //     merchantIds: id,
  //   },
  // })
}
</script>
<style lang="scss" scoped></style>
