<script lang="ts" setup>
defineProps<{
  noPadding?: boolean;
}>();
</script>

<template>
  <div
    class="input-groups-input-amount"
    :class="{
      'input-groups-input-amount--no-padding': noPadding,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-groups-input-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  flex-grow: 1;
  padding: 0 1.5rem;

  &.input-groups-input-amount--no-padding {
    padding: 0;
  }
}
</style>
