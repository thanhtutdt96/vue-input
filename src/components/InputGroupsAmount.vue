<script lang="ts" setup>
import { watch } from 'vue';
import useInputAmount from 'composables/useInputAmount';
import InputGroupsInput from 'components/common/groups/InputGroupsInput.vue';
import InputGroupsInputAmount from 'components/common/groups/InputGroupsInputAmount.vue';
import InputGroupsOtherActions from 'components/common/groups/InputGroupsOtherActions.vue';
import AmountInput from 'components/common/ui/AmountInput.vue';
import ButtonAction from 'components/common/ui/ButtonAction.vue';

defineProps<{
  isBetPlaced?: boolean;
}>();

const {
  AMOUNT_INPUT_MAX,
  AMOUNT_INPUT_MIN,
  amountValue,
  debouncedAmountConstraintsCheck,
  onSetMin,
  onSetMax,
  onSetHalf,
  onSetDouble,
  onSetCustomAmount,
} = useInputAmount();

const buttonList = [
  {
    label: '+5',
    value: 5,
    textColor: '#55DDE0',
  },
  {
    label: '+10',
    value: 10,
    textColor: '#55DDE0',
  },
  {
    label: '+50',
    value: 50,
    textColor: '#55DDE0',
  },
  {
    label: '+100',
    value: 100,
    textColor: '#55DDE0',
  },
  {
    label: '+500',
    value: 500,
    textColor: '#55DDE0',
  },
  {
    label: '+1k',
    value: 1000,
    textColor: '#55DDE0',
  },
];

watch(amountValue, (newValue) => {
  debouncedAmountConstraintsCheck(newValue);
});
</script>

<template>
  <InputGroupsInput>
    <div class="input-groups-amount__buttons">
      <ButtonAction :disabled="isBetPlaced" @click="onSetMin"> min </ButtonAction>
      <ButtonAction :disabled="isBetPlaced" @click="onSetMax"> max </ButtonAction>
    </div>
    <InputGroupsInputAmount>
      <span>&#165;</span>
      <AmountInput
        v-model="amountValue"
        :debounce="500"
        type="number"
        :min="AMOUNT_INPUT_MIN"
        :max="AMOUNT_INPUT_MAX"
        :disabled="isBetPlaced"
      />
    </InputGroupsInputAmount>
    <div class="input-groups-amount__buttons">
      <ButtonAction :disabled="isBetPlaced" @click="onSetHalf"> 1/2 </ButtonAction>
      <ButtonAction :disabled="isBetPlaced" @click="onSetDouble"> 2x </ButtonAction>
    </div>
  </InputGroupsInput>
  <InputGroupsOtherActions v-if="buttonList.length > 0">
    <template v-for="(button, index) in buttonList" :key="index">
      <ButtonAction
        :text-color="button.textColor"
        :disabled="
          button.value + parseInt(amountValue.toString()) >= AMOUNT_INPUT_MAX || isBetPlaced
        "
        @click="onSetCustomAmount(button.value)"
      >
        {{ button.label }}
      </ButtonAction>
    </template>
  </InputGroupsOtherActions>
</template>

<style lang="scss" scoped>
.input-groups-amount__buttons {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
}

.input-groups__input-amount {
  span {
    color: #b4d2ef;
  }
}
</style>
