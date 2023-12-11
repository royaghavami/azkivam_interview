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
    <SearchInput
      placeholder="جستجوی فروشگاه"
      class="input"
      type="text"
      :icon="imageAdd"
      :has-icon="true"
    />
    <div class="checkbox-container">
      <Checkbox
        v-for="merchant in merchants"
        :key="merchant.id"
        v-model="localValue"
        :label="merchant.name"
        :val="merchant.id"
      />
    </div>
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
import Checkbox from '@/components/_shared/input/checkbox/index.vue'
import Card from '@/components/_shared/card/index.vue'
import Container from '@/components/_shared/container/index.vue'
import Accordion from '@/components/_shared/accordion/index.vue'
import SearchInput from '@/components/_shared/input/textfield/index.vue'
defineProps<{
  items: any
  categories: any
  merchants: any
}>()
const imageAdd = '/search.png'
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
.input {
  align-self: start;
  width: 8rem;
  margin-bottom: 8px;
}
.checkbox-container {
  overflow: auto;
  height: 200px;
  min-width: 100px;
  margin: 10px 0 13px 26px;
}
.checkbox-container::-webkit-scrollbar {
  width: 1px;
}

.checkbox-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px lightgray;
}

.checkbox-container::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
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
