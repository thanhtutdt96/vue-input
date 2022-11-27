<script lang="ts" setup>
import { watch } from 'vue';
import useInputDefuse from 'composables/useInputDefuse';
import InputGroupsInput from 'components/common/groups/InputGroupsInput.vue';
import InputGroupsInputAmount from 'components/common/groups/InputGroupsInputAmount.vue';
import InputGroupsOtherActions from 'components/common/groups/InputGroupsOtherActions.vue';
import AmountInput from 'components/common/ui/AmountInput.vue';
import ButtonAction from 'components/common/ui/ButtonAction.vue';

defineProps<{
  isBetPlaced?: boolean;
}>();

const {
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
} = useInputDefuse();

const buttonList = [
  {
    label: '1.5x',
    value: 1.5,
    textColor: '#55DDE0',
  },
  {
    label: '2.0x',
    value: 2,
    textColor: '#55DDE0',
  },
  {
    label: '5.0x',
    value: 5,
    textColor: '#55DDE0',
  },
];

watch(defuseValue, (newValue) => {
  debouncedDefuseConstraintsCheck(newValue);
});
</script>

<template>
  <InputGroupsInput is-column-layout>
    <div class="input-groups-defuse__input-header">Defuse at</div>
    <InputGroupsInputAmount no-padding>
      <ButtonAction :disabled="isMinusButtonDisabled || isBetPlaced" @click="onMinusDefuse">
        -
      </ButtonAction>
      <AmountInput
        :model-value="displayDefuseValue"
        :debounce="500"
        type="number"
        :min="DEFUSE_INPUT_MIN"
        :max="DEFUSE_INPUT_MAX"
        step="0.01"
        :disabled="isBetPlaced"
        @update:model-value="handleValueChanged"
      />
      <ButtonAction :disabled="isAddButtonDisabled || isBetPlaced" @click="onAddDefuse">
        +
      </ButtonAction>
    </InputGroupsInputAmount>
  </InputGroupsInput>
  <InputGroupsOtherActions is-defused-actions>
    <template v-for="(button, index) in buttonList" :key="index">
      <ButtonAction
        :text-color="button.textColor"
        :disabled="isBetPlaced"
        @click="onSetCustomDefuse(button.value)"
      >
        {{ button.label }}
      </ButtonAction>
    </template>
  </InputGroupsOtherActions>
</template>

<style lang="scss" scoped>
.input-groups-defuse__input-header {
  text-transform: uppercase;
  color: #6a778b;
  font-size: 0.75rem;
  font-weight: 500;
  width: 50%;

  @media (min-width: 640px) {
    width: 100%;
    text-align: center;
    margin-bottom: 0.2rem;
  }
}

.input-groups-input {
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
}

.input-groups__input-amount {
  :deep(button) {
    width: 1.5rem;
  }
}

.input-groups-other-actions {
  :deep(button) {
    width: 2rem;
    text-transform: inherit;
  }
}
</style>
