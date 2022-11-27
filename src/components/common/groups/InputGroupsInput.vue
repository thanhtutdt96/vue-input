<script lang="ts" setup>
defineProps<{
  isColumnLayout?: boolean;
}>();
</script>

<template>
  <div
    class="input-groups-input"
    :class="{
      'input-groups-input--column': isColumnLayout,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-groups-input {
  display: flex;
  padding: 0.75rem 0.5rem 0.5rem;
  border-bottom: 1px solid #343e5a;

  @media (min-width: 640px) {
    &.input-groups-input--column {
      flex-direction: column;
    }
  }
}
</style>
