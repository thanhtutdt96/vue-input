<script lang="ts" setup>
defineProps<{
  isDefusedActions?: boolean;
}>();
</script>

<template>
  <div
    class="input-groups-other-actions"
    :class="{
      'input-groups-other-actions--defused': isDefusedActions,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-groups-other-actions {
  padding: 0.5rem 0.5rem 0.75rem;
  gap: 0.25rem;
  display: flex;

  @media (max-width: 640px) {
    &.input-groups-other-actions--defused {
      display: none;
    }
  }

  :deep(button) {
    flex: 1 1 0;
  }
}
</style>
