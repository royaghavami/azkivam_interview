<template>
  <label class="j-checkbox">
    <input
      :value="val"
      class="j-checkbox__input"
      type="checkbox"
      @click="emits('click')"
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
const props = defineProps<{
  id: string | number
  label: string
  val: string | number | null
}>()
const emits = defineEmits<{
  (emitName: 'click'): void
}>()
// const inputAttrs = computed(() => props.id)
// const localValue = computed(() => props.val)
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/variables';
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
      background-color: $white;
      border: 1px solid $light-gray;
      border-radius: 5px;
    }
    &__text {
      color: $black;
      font-weight: 300;
      font-size: $base-size;
    }
  }
  &__input {
    display: none;
    &:checked + .j-checkbox-box {
      .j-checkbox-box {
        &__checkbox {
          position: relative;
          background-color: $black;
          &::before {
            top: 4px;
            left: 4px;
            height: 6px;
            width: 10px;
            content: ' ';
            position: absolute;
            transform: rotate(-45deg);
            border-left: 2px solid $white;
            border-bottom: 2px solid $white;
            border-bottom-left-radius: 1px;
          }
        }
      }
    }
  }
}
</style>
