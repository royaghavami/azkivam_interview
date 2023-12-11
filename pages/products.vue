<template>
  <div>
    <Plp :items="items" style="position: relative" />
  </div>
</template>
<script lang="ts" setup>
import Plp from '../components/plp/index.vue'
definePageMeta({
  path: '/products',
  alias: ['/products/:id/:slug'],
})

const items = [
  {
    id: '1',
    name: 'تست اول',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '2',
    name: 'تست دوم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '3',
    name: 'تست سوم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '4',
    name: 'تست چهارم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '5',
    name: 'تست چهارم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '6',
    name: 'تست چهارم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '7',
    name: 'تست چهارم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  },
  {
    id: '7',
    name: 'تست چهارم',
    imageUrl:
      'https://image.torob.com/base/images/36/tq/36tqdTIipvV-e0ie.jpg_/560x560.webp',
    price: 1234,
  }
]
</script>
