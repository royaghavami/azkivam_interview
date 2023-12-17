<template>
  <main class="plp">
    <div class="plp__container">
      <div class="plp-content">
        <Container class="plp-content-sidebar">
          <h2 class="plp-content-sidebar__title">
            فیلتر ها
            <br />
            دسته بندی
          </h2>
          <AccordionContainer>
            <Accordion
              v-for="(category, index) in categories"
              :key="index"
              :title="category.name"
              :has-children="true"
              :link="`/products/${category.id}/${category.slug}`"
              class="accordion"
            >
              <template #children>
                <Accordion
                  v-for="(child, i) in category.children"
                  :key="i"
                  :title="child.name"
                  :link="`/products/${child.id}/${child.slug}`"
                  :has-children="false"
                  class="accordion-wrapper__child"
                />
              </template>
            </Accordion>
          </AccordionContainer>
          <span class="plp-content-sidebar__divider" />
          <div class="search-input">
            <SearchInput
              placeholder="جستجوی فروشگاه"
              type="text"
              :icon="imageAdd"
              :has-icon="true"
              :value="''"
            />
          </div>
          <div class="checkbox-container">
            <Checkbox
              v-for="merchant in merchants"
              :id="merchant.id"
              :key="merchant.id"
              :label="merchant.name"
              :val="merchant.enabled"
              @click="emits('update:merchant-filter', merchant.id)"
            />
          </div>
        </Container>
        <section class="plp-content__main">
          <div v-for="item in items" :key="item.id" class="item">
            <Card
              :id="item.id"
              :name="item.name"
              :image-url="item.imageUrl"
              :price="item.minPrice"
            />
          </div>
          <ClientOnly>
            <Observer @intersect="emits('update:intersect')" />
          </ClientOnly>
        </section>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import type { PlpProps } from './plp'
import Checkbox from '@/components/_shared/input/checkbox/index.vue'
import Card from '@/components/_shared/card/index.vue'
import Container from '@/components/_shared/container/index.vue'
import SearchInput from '@/components/_shared/input/textfield/index.vue'
import Observer from '@/components/plp/observer.vue'
import AccordionContainer from '@/components/_shared/accordion/index.vue'
import Accordion from '@/components/_shared/accordion/item.vue'

defineProps<PlpProps>()

const emits = defineEmits<{
  (emitName: 'update:intersect'): void
  (emitName: 'update:merchant-filter', id: number): void
}>()
const imageAdd = '/search.png'
</script>
<style lang="scss" scoped>
@import 'assets/styles/colors';
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
.plp-content {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  &-sidebar {
    padding: 0 17px 0 0;
    border-radius: 10px;
    border: 1px solid $secondary;
    top: 0;
    z-index: 500;
    width: 315px;
    position: sticky;
    &__divider {
      display: block;
      height: 1px;
      margin: 0px 0 30px 23px;
      border-left: 18rem solid $light-gray;
    }
    &__title {
      font-weight: 300;
      font-size: $header-font-size;
      line-height: 3;
    }
    .search-input {
      align-self: start;
      width: 226px;
      margin-bottom: 8px;
      border-radius: $primary-radius;
    }
  }
  &__main {
    display: grid;
    grid-gap: 0px 0;
    grid-template-columns: repeat(4, 2fr);
    align-items: stretch;
    border: 1px solid $light-gray;
    border-radius: 10px;
    margin: 0 0 0 22px;
    .item {
      display: flex;
      &:nth-of-type(4n + 1),
      &:nth-of-type(4n + 2),
      &:nth-of-type(4n + 3) {
        border-left: 1px solid $light-gray;
      }
      &:not(:nth-last-child(-n + 2)) {
        border-bottom: 1px solid $light-gray;
      }
    }
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
.checkbox-container {
  overflow: auto;
  height: 200px;
  min-width: 100px;
  margin: 10px 0 13px 20px;
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
</style>
