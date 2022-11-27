<script lang="ts" setup>
import { debounce } from 'lodash-es';
const props = defineProps<{
  modelValue: number | string;
  debounce?: number;
}>();

const emit = defineEmits<{ (event: 'update:modelValue', value: number): void }>();

const debouncedInputChange = debounce((newValue) => {
  emit('update:modelValue', +newValue);
}, props.debounce);

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (props.debounce) {
    debouncedInputChange(target?.value);

    return;
  }

  emit('update:modelValue', +target?.value);
};
</script>

<template>
  <input type="number" :value="modelValue" @input="handleInputChange" />
</template>

<style lang="scss" scoped>
input {
  flex: 1;
  text-align: center;
  background: transparent;
  color: #fff;
  border: 0;
  outline: 0;
  font-size: 1.25rem;
  font-weight: 700;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
