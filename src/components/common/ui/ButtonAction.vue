<script lang="ts" setup>
withDefaults(
  defineProps<{
    textColor?: string;
  }>(),
  {
    textColor: '#B1C8E2',
  },
);
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  font-weight: 500;
  background-color: #21354e;
  color: v-bind(textColor);
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  -webkit-appearance: button;
  cursor: pointer;
  width: 3rem;
  height: 1.5rem;
}

button:hover {
  filter: brightness(1.2);
}

button:active {
  color: #fff;
  background-image: linear-gradient(to right, rgba(32, 131, 216, 1) 0%, rgba(30, 190, 221, 1) 100%);
}

button:disabled,
button[disabled] {
  border: 1px solid #2d3f60;
  background-color: transparent;
  color: #2d3f60;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
