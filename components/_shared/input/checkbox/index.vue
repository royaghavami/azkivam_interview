<template>
  <label class="j-checkbox">
    <input
      v-model="localValue"
      :value="val"
      v-bind="inputAttrs"
      class="j-checkbox__input"
    />
    <span class="j-checkbox-box">
      <span class="j-checkbox-box__checkbox" />
      <span class="j-checkbox-box__text">
        {{ label }}
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
// import {computed} from "vue";
import type { Checkbox } from './checkbox'
const props = defineProps<Checkbox>()
const inputAttrs = computed(function () {
  return {
    checked: props.checked,
    disabled: props.disabled,
    id: props.htmlId,
    type: 'checkbox',
  }
})
const localValue = computed({
  get() {
    return props.value
  },
  set(newVal) {
    // this.$emit('input', newVal)
  },
})
</script>

<style lang="scss" scoped>
.j-checkbox {
  display: block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &-box {
    display: flex;
    padding: 16px 2px;
    position: relative;
    align-items: center;
    &__checkbox {
      width: 20px;
      height: 20px;
      margin-left: 10px;
      background-color: white;
      border: 1px solid lightgray;
      border-radius: 5px;
    }
    &__text {
      color: black;
      font-weight: 300;
      font-size: 16px;
    }
  }
  &__input {
    display: none;
    &:checked + .j-checkbox-box {
      .j-checkbox-box {
        &__checkbox {
          position: relative;
          background-color: black;
          &::before {
            top: 4px;
            left: 4px;
            height: 6px;
            width: 10px;
            content: ' ';
            position: absolute;
            transform: rotate(-45deg);
            border-left: 2px solid white;
            border-bottom: 2px solid white;
            border-bottom-left-radius: 1px;
          }
        }
      }
    }
  }
}
</style>
