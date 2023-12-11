<template>
  <Container class="container">
    <h2 class="container-title">
      فیلتر ها
      <br />
      دسته بندی
    </h2>
    <Accordion
      v-for="(category, index) in categories"
      :key="index"
      :title="category.name"
      class="accordion"
    >
      <div
        v-for="(child, i) in category.children"
        :key="i"
        class="accordion-wrapper"
      >
        <NuxtLink
          :to="`/products/${child.id}/${child.slug}`"
          class="accordion-wrapper__child"
          >{{ child.name }}</NuxtLink
        >
      </div>
    </Accordion>
    <span class="container-divider" />
  </Container>
  <section>
    <div class="product-list">
      <div v-for="item in items" :key="item.id" class="e">
        <Card
          :id="item.id"
          :name="item.name"
          :image-url="item.imageUrl"
          :price="item.minPrice"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Card from '@/components/_shared/card/index.vue'
import Container from '@/components/_shared/container/index.vue'
import Accordion from '@/components/_shared/accordion/index.vue'
defineProps<{
  items: any
  categories: any
}>()
</script>
<style lang="scss" scoped>
.container {
  padding: 0 17px 0 0;
  border-radius: 10px;
  height: auto;
  &-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 3;
  }
  &-divider {
    height: 1px;
    margin: 0 0 16px 33px;
    border-left: 12rem solid lightgray;
  }
}
.accordion {
  color: black;
  margin-bottom: 18px;
  &-wrapper {
    margin: 12px 24px;
    &__child {
      color: gray;
      text-decoration: none;
    }
  }
}
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
