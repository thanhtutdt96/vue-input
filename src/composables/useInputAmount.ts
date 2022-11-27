import { debounce } from 'lodash-es';
import { computed, ref } from 'vue';

const useInputAmount = () => {
  const AMOUNT_INPUT_MIN = 10;
  const AMOUNT_INPUT_MAX = 3000;

  const amountValue = ref(AMOUNT_INPUT_MIN);

  const doubleValue = computed(() => amountValue.value * 2);
  const halfValue = computed(() => amountValue.value / 2);

  const onSetMin = () => {
    amountValue.value = AMOUNT_INPUT_MIN;
  };

  const onSetMax = () => {
    amountValue.value = AMOUNT_INPUT_MAX;
  };

  const onSetDouble = () => {
    amountValue.value = doubleValue.value;
  };

  const onSetHalf = () => {
    amountValue.value = halfValue.value;
  };

  const onSetCustomAmount = (value: number) => {
    const calculatedAmount = amountValue.value + value;

    if (calculatedAmount >= AMOUNT_INPUT_MAX) {
      return;
    }

    amountValue.value = calculatedAmount;
  };

  const debouncedAmountConstraintsCheck = debounce((newValue) => {
    if (!Number.isInteger(newValue)) {
      amountValue.value = parseInt(newValue);
    }

    if (newValue > AMOUNT_INPUT_MAX) {
      amountValue.value = AMOUNT_INPUT_MAX;

      return;
    }

    if (newValue < AMOUNT_INPUT_MIN) {
      amountValue.value = AMOUNT_INPUT_MIN;
    }
  }, 100);

  return {
    AMOUNT_INPUT_MAX,
    AMOUNT_INPUT_MIN,
    amountValue,
    onSetMin,
    onSetMax,
    onSetDouble,
    onSetHalf,
    onSetCustomAmount,
    debouncedAmountConstraintsCheck,
  };
};

export default useInputAmount;
