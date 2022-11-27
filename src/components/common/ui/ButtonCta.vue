<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  font-weight: 700;
  font-size: 1.25rem;
  background-image: linear-gradient(to right, rgba(32, 131, 216, 1) 0%, rgba(30, 190, 221, 1) 100%);
  text-transform: uppercase;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  -webkit-appearance: button;
  cursor: pointer;
  min-height: 4rem;
  width: 100%;
}

button:hover {
  filter: brightness(1.2);
}

button:disabled,
button[disabled] {
  border: 1px solid #2d3f60;
  background-color: transparent;
  background-image: none;
  color: #2d3f60;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
