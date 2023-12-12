<template>
  <div class="container"><slot /></div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.container {
  width: 300px;
  border-radius: $primary-radius;
}
</style>
