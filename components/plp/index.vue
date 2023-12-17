<template>
  <button class="filter-btn" @click="toggle">+</button>
  <div class="plp-content">
    <Container :class="{ collapse: show }" class="plp-content-sidebar">
      <h2 class="plp-content-sidebar__title">فیلتر ها</h2>
      <FilterSection title="دسته بندی">
        <template #body>
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
        </template>
      </FilterSection>
      <!--      <span class="plp-content-sidebar__divider" />-->
      <FilterSection>
        <template #head>
          <div class="search-input">
            <SearchInput
              placeholder="جستجوی فروشگاه"
              type="text"
              :icon="imageAdd"
              :has-icon="true"
              :value="''"
            />
          </div>
        </template>
        <template #body>
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
        </template>
      </FilterSection>
    </Container>
    <div class="plp-content__main">
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
    </div>
  </div>
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
import FilterSection from '@/components/_shared/filter-section/index.vue'
import { useShowFilters } from '@/composables/use-accordion/index.vue'

defineProps<PlpProps>()

const emits = defineEmits<{
  (emitName: 'update:intersect'): void
  (emitName: 'update:merchant-filter', id: number): void
}>()
const imageAdd = '/search.png'

// the functionality is the same im just gonna use it cause theres no time:)
const { toggle, show } = useShowFilters()
</script>
<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/variables';
.plp-content {
  //position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  &-sidebar {
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 20%;
    top: 0;
    padding: 0 17px 0 0;
    border-radius: 10px;
    border: 1px solid $secondary;
    margin-left: 8px;
    @media (max-width: 768px) {
      position: absolute;
      display: none;
      width: 80%;
      height: 100%;
      top: 0;
      right: 0;
      padding-top: 10px;
      z-index: 100;
    }
    //&__divider {
    //  display: block;
    //  height: 1px;
    //  margin: 0 0 30px 23px;
    //  border-left: 18rem solid $light-gray;
    //  @media (max-width: 768px) {
    //    position: relative;
    //    margin: 0 0 30px 360px;
    //  }
    //}
    &__title {
      font-weight: 300;
      font-size: $header-font-size;
      line-height: 1;
    }
    .search-input {
      border-radius: $primary-radius;
      border: 1px solid $light-gray;
      position: relative;
      width: 70%;
      padding: 4px;
    }
  }
  &__main {
    display: grid;
    flex-grow: 1;
    grid-template-columns: repeat(4, 1fr);
    align-items: stretch;
    border: 1px solid $light-gray;
    border-radius: 10px;
    margin: 0 0 0 22px;
    width: 80%;
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
.filter-btn {
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
    margin-right: 20px;
    z-index: 200;
  }
}
.collapse {
  display: block;
  width: 65%;
  height: 100%;
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
