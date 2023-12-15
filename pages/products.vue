<template>
  <div class="plp">
    <Plp
      :items="products?.data"
      :categories="convertCategories"
      :merchants="merchants?.data"
      @update:intersect="handleScroll"
    />
  </div>
</template>
<script lang="ts" setup>
import Plp from '../components/plp/index.vue'
definePageMeta({
  path: '/products',
  alias: ['/products/:id/:slug'],
})

const { data: categories } = await useAsyncData('categories', () =>
  $fetch('https://interview-api.azkiloan.com/api/v1/categories'),
)

const { data: merchants } = await useAsyncData('merchants', () =>
  $fetch('https://interview-api.azkiloan.com/api/v1/merchants'),
)

const page = ref(1)
const { data: products } = await useAsyncData(
  'products',
  async (app) => {
    const { data, totalItems } = await $fetch(
      'https://interview-api.azkiloan.com/api/v1/products',
      {
        method: 'POST',
        params: {
          size: 10,
          page: page.value,
        },
      },
    )
    const previousData = app?._asyncData?.products?.data.value?.data || []
    return {
      data: [...previousData, ...data],
      totalItems,
    }
  },
  {
    watch: [page],
  },
)

const handleScroll = () => {
  page.value = page.value + 1
}

const convertCategories = computed(() =>
  categories.value.data.reduce((acc, current) => {
    if (!current.mapped) {
      const children = categories.value.data.filter(
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
.plp {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 3rem;
  margin-top: 20px;
  align-items: start;
  justify-content: space-evenly;
}
</style>
