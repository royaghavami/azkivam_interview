<template>
  <article class="card">
    <figure class="card-media">
      <img class="card-media__image" :src="imageUrl" />
    </figure>
    <div class="card-content">
      <h2 class="card-content__title">{{ name }}</h2>
      <span class="card-content__description"
      >شروع قیمت از
        <br />
        <span class="bold">{{ addPriceSeparator(toToman(price)) }} تومان</span>
      </span>
    </div>
  </article>
</template>
<script lang="ts" setup>
import type { Card } from './card'
defineProps<Card>()
const addPriceSeparator = (price: string | number): string => {
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const toToman = (price: string | number): number => {
  return (Number(price) / 10) >> 0
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/variables';
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 15px;
  align-items: stretch;
  &-media {
    position: relative;
    padding-bottom: 70%;
    margin-bottom: 2rem;
    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    align-self: flex-start;
    &__title {
      font-weight: 300;
      font-size: $header-font-size;
    }
    &__description {
      font-weight: 300;
      font-size: $primary-size;
      color: $dark-gray;
      line-height: 2;
      span.bold {
        color: $black;
        font-weight: bold;
        font-size: $primary-size;
      }
    }
  }
}
</style>
