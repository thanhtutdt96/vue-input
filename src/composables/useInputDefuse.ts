import { debounce } from 'lodash-es';
import { computed, ref } from 'vue';

const useInputDefuse = () => {
  const DEFUSE_INPUT_MIN = 1.01;
  const DEFUSE_INPUT_MAX = 100;

  const defuseValue = ref(DEFUSE_INPUT_MIN);

  const isAddButtonDisabled = computed(() => defuseValue.value >= DEFUSE_INPUT_MAX);
  const isMinusButtonDisabled = computed(() => defuseValue.value <= DEFUSE_INPUT_MIN);

  const minusDefuseValue = computed(() => defuseValue.value - 0.1);
  const addDefuseValue = computed(() =>
    defuseValue.value >= 2 ? defuseValue.value + 1 : defuseValue.value + 0.1,
  );

  const displayDefuseValue = computed(() => parseFloat(defuseValue.value.toString()).toFixed(2));

  const onAddDefuse = () => {
    defuseValue.value = addDefuseValue.value;
  };

  const onMinusDefuse = () => {
    defuseValue.value = minusDefuseValue.value;
  };

  const onSetCustomDefuse = (value: number) => {
    defuseValue.value = value;
  };

  const handleValueChanged = (value: number) => {
    defuseValue.value = parseFloat(value.toString());
  };

  const debouncedDefuseConstraintsCheck = debounce((newValue: number) => {
    const parsedValue = parseFloat(newValue.toString());

    if (parsedValue > DEFUSE_INPUT_MAX) {
      defuseValue.value = DEFUSE_INPUT_MAX;

      return;
    }

    if (parsedValue <= 1.0) {
      defuseValue.value = DEFUSE_INPUT_MIN;

      return;
    }
  }, 100);

  return {
    DEFUSE_INPUT_MAX,
    DEFUSE_INPUT_MIN,
    defuseValue,
    displayDefuseValue,
    isAddButtonDisabled,
    isMinusButtonDisabled,
    onAddDefuse,
    onMinusDefuse,
    onSetCustomDefuse,
    handleValueChanged,
    debouncedDefuseConstraintsCheck,
  };
};

export default useInputDefuse;
