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
        <span class="bold">{{ price }} تومان</span>
      </span>
    </div>
  </article>
</template>
<script lang="ts" setup>
import type { Card } from './card'
defineProps<Card>()
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  width: 200px;
  padding: 15px;
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
    &__title {
      font-weight: 700;
      font-size: 18px;
    }
    &__description {
      font-weight: 200;
      font-size: 13px;
      color: gray;
      line-height: 2;
      span.bold {
        color: black;
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
}
</style>
