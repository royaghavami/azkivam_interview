<template>
  <div class="input__wrapper">
    <label :class="['input']">
      <span
        v-if="hasIcon"
        class="input__icon"
        @click.prevent="$emit('click:icon')"
      >
        <img :src="icon" width="24" height="24" />
      </span>
      <input
        :class="[
          'input__field',
          {
            'input__field--icon': hasIcon,
          },
        ]"
        :value="value"
        v-bind="$attrs"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
// import {computed} from "vue";
import type { Input } from './input'
defineProps<Input>()
// const eventListeners = computed(function () {
//   return {
//     ...this.$listeners,
//     input: ({ target: { value } }) => {
//       this.$emit('input', value)
//     },
//   }
// })
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  display: block;
  position: relative;
  border-radius: 10px;
  &__field {
    width: 100%;
    display: block;
    font-size: 16px;
    padding: 8px 42px;
    border: 1px solid lightgray;
    &:focus {
      outline: none;
    }
    &::placeholder {
      direction: rtl;
      font-weight: 300;
      opacity: 1;
      text-align: right;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    padding: 8px 9px;
    transform: translateY(-50%);
    z-index: 5;
    img {
      pointer-events: none;
    }
  }
  &__wrapper {
    width: 100%;
  }
}
</style>
