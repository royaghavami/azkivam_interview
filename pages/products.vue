<template>
  <main class="plp">
    <div class="plp__container">
      <Plp
        :items="products?.data"
        :categories="convertCategories"
        :merchants="merchants?.data"
        @update:intersect="
          () => {
            page = page + 1
          }
        "
      />
    </div>
  </main>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Plp from '../components/plp/index.vue'
import { useCategoryListQuery } from '@/services/use-category-list.query'
import { useMerchantsListQuery } from '@/services/use-merchants-list.query'
import { useProductListQuery } from '@/services/use-product-list.query'

definePageMeta({
  path: '/products',
  alias: ['/products/:id/:slug'],
})

const route = useRoute()

const page = ref(1)

watch(route, () => {
  page.value = 1
})
const api = computed(() =>
  Object.keys(route.params).length === 0
    ? 'https://interview-api.azkiloan.com/api/v1/products'
    : `https://interview-api.azkiloan.com/api/v1/products/${route.params.id}`,
)

const { data: categories } = await useCategoryListQuery()

const { data: merchants } = await useMerchantsListQuery()

const { data: products } = await useProductListQuery(page, api)

const convertCategories = computed(
  () =>
    categories.value?.data.reduce((acc, current) => {
      if (!current.mapped) {
        const children = categories.value?.data.filter(
          (item) => item.parent === current.id,
        )
        current.children = children
        acc.push(current)
      }
      return acc
    }, []),
)
</script>
<style scoped lang="scss">
@import 'assets/styles/variables';
.plp {
  width: 100%;
  flex: 1 1 0;
  min-width: 0;
  &__container {
    margin: 0 auto;
    padding: $container-padding;
    max-width: $container-size;
  }
}
</style>
