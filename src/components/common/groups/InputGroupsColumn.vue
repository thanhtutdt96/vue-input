<script lang="ts" setup>
defineProps<{
  isHalfWidth?: boolean;
}>();
</script>

<template>
  <div
    class="input-groups-column"
    :class="{
      'input-groups-column--half': isHalfWidth,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-groups-column {
  flex: 1;

  &.input-groups-column--half {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
}

@media (min-width: 640px) {
  .input-groups-column {
    width: 50%;
    &.input-groups-column--half {
      flex-direction: row;
    }
  }
}
</style>
