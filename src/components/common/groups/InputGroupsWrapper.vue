<script lang="ts" setup>
defineProps<{
  isHalfWidth?: boolean;
}>();
</script>

<template>
  <div
    class="input-groups-wrapper"
    :class="{
      'input-groups-wrapper--half': isHalfWidth,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-groups-wrapper {
  background-color: #1c2134;
  border-radius: 0.5rem;
  border: 1px solid #343e5a;
}

@media (min-width: 640px) {
  .input-groups-wrapper {
    &.input-groups-wrapper--half {
      flex-direction: row;
      width: 50%;
    }
  }
}
</style>
