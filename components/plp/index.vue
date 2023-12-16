<template>
  <Container class="container">
    <h2 class="container-title">
      فیلتر ها
      <br />
      دسته بندی
    </h2>
    <AccordionContainer>
      <Accordion
        v-for="(category, index) in categories"
        :key="index"
        :title="category.name"
        :link="`/products/${category.id}/${category.slug}`"
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
    </AccordionContainer>
    <span class="container-divider" />
    <div class="search-input">
      <SearchInput
        placeholder="جستجوی فروشگاه"
        type="text"
        :icon="imageAdd"
        :has-icon="true"
      />
    </div>
    <div class="checkbox-container">
      <Checkbox
        v-for="merchant in merchants"
        :key="merchant.id"
        :label="merchant.name"
        :html-id="merchant.id"
      />
    </div>
  </Container>
  <section>
    <div class="product-list">
      <div v-for="item in items" :key="item.id" class="product-list__item">
        <Card
          :id="item.id"
          :name="item.name"
          :image-url="item.imageUrl"
          :price="item.minPrice"
        />
      </div>
    </div>
    <ClientOnly>
      <Observer @intersect="emits('update:intersect')" />
    </ClientOnly>
  </section>
</template>
<script lang="ts" setup>
import Checkbox from '@/components/_shared/input/checkbox/index.vue'
import Card from '@/components/_shared/card/index.vue'
import Container from '@/components/_shared/container/index.vue'
import AccordionContainer from '@/components/_shared/accordion/index.vue'
import Accordion from '@/components/_shared/accordion/item.vue'
import SearchInput from '@/components/_shared/input/textfield/index.vue'
import Observer from '@/components/plp/observer.vue'

defineProps<{
  items: any
  categories: any
  merchants: any
}>()

const emits = defineEmits<{
  (emitName: 'update:intersect'): void
}>()
const imageAdd = '/search.png'
</script>
<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/variables';
.container {
  padding: 0 17px 0 0;
  border-radius: 10px;
  height: auto;
  border: 1px solid $secondary;
  &-title {
    font-weight: 300;
    font-size: $header-font-size;
    line-height: 3;
  }
  &-divider {
    display: block;
    height: 1px;
    margin: 0px 0 30px 16px;
    border-left: 18rem solid $light-gray;
  }
}
.accordion {
  color: $black;
  margin-bottom: 18px;
  &-wrapper {
    margin: 12px 24px;
    &__child {
      color: $dark-gray;
      text-decoration: none;
    }
  }
}
.search-input {
  align-self: start;
  width: 150px;
  margin-bottom: 8px;
  border-radius: $primary-radius;
}
.checkbox-container {
  overflow: auto;
  height: 200px;
  min-width: 100px;
  margin: 10px 0 13px 9px;
}
.checkbox-container::-webkit-scrollbar {
  width: 1px;
}

.checkbox-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px $light-gray;
}

.checkbox-container::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.product-list {
  display: grid;
  grid-gap: 0px 0px;
  grid-template-columns: repeat(4, 2fr);
  align-items: stretch;
  border: 1px solid $light-gray;
  border-radius: 10px;
  &__item {
    display: flex;
    &:nth-of-type(4n + 1),
    &:nth-of-type(4n + 2),
    &:nth-of-type(4n + 3) {
      border-left: 1px solid $light-gray;
    }
    &:not(:nth-last-child(-n + 4)) {
      border-bottom: 1px solid $light-gray;
    }
  }
}
</style>
