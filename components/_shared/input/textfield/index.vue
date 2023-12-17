<template>
<!--  <label class="input">-->
<!--    <span-->
<!--      v-if="hasIcon"-->
<!--      class="input__icon"-->
<!--      @click.prevent="$emit('click:icon')"-->
<!--    >-->
<!--      <img :src="icon" width="24" height="24" />-->
<!--    </span>-->
<!--    <input-->
<!--      :class="[-->
<!--        'input__field',-->
<!--        {-->
<!--          'input__field&#45;&#45;icon': hasIcon,-->
<!--        },-->
<!--      ]"-->
<!--      :value="value"-->
<!--      v-bind="$attrs"-->
<!--    />-->
<!--  </label>-->
  <input class="input" :value="value" />
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  hasIcon: boolean
  value: string | number
}>()
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
.input {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  text-decoration: none;
  border: none;
  &__icon {
    position: absolute;
    top: 50%;
    padding: 8px 8px;
    transform: translateY(-50%);
    z-index: 5;
    img {
      pointer-events: none;
    }
  }
}
</style>
