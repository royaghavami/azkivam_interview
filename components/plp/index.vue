<template>
  <section style="display: flex; justify-content: center; margin-top: 10rem">
    <div class="product-list">
      <!--    <NuxtLink :to="`products/1/oenwlg`">khvgfjufv</NuxtLink>-->
      <div class="e" v-for="item in items" :key="item.id">
        <Card
          :id="item.id"
          :name="item.name"
          :image-url="item.imageUrl"
          :price="item.price"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Card from '@/components/_shared/card/index.vue'
defineProps<{
  items: any
}>()
</script>
<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-gap: 0px 0px;
  grid-template-columns: repeat(4, 2fr);
  border: 1px solid lightgray;
  border-radius: 10px;
}
.e {
  &:nth-of-type(4n + 1),
  &:nth-of-type(4n + 2),
  &:nth-of-type(4n + 3) {
    border-left: 1px solid lightgray;
  }
  &:not(:nth-last-child(-n + 4)) {
    border-bottom: 1px solid lightgray;
  }
}
</style>
