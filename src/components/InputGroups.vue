<script setup lang="ts">
import { ref } from 'vue';
import InputGroupsAmount from 'components/InputGroupsAmount.vue';
import InputGroupsDefuse from 'components/InputGroupsDefuse.vue';
import InputGroupsColumn from 'components/common/groups/InputGroupsColumn.vue';
import InputGroupsWrapper from 'components/common/groups/InputGroupsWrapper.vue';
import ButtonCta from 'components/common/ui/ButtonCta.vue';

const betButtonLabel = ref('Bet');
const isBetPlaced = ref(false);

const onBetHandler = () => {
  betButtonLabel.value = 'Bet Placed';
  isBetPlaced.value = true;
};
</script>

<template>
  <div class="input-groups">
    <InputGroupsColumn>
      <InputGroupsWrapper>
        <InputGroupsAmount :is-bet-placed="isBetPlaced" />
      </InputGroupsWrapper>
    </InputGroupsColumn>
    <InputGroupsColumn is-half-width>
      <InputGroupsWrapper is-half-width>
        <InputGroupsDefuse :is-bet-placed="isBetPlaced" />
      </InputGroupsWrapper>
      <ButtonCta :disabled="isBetPlaced" @click="onBetHandler">{{ betButtonLabel }}</ButtonCta>
    </InputGroupsColumn>
  </div>
</template>

<style lang="scss" scoped>
.input-groups {
  width: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .input-groups {
    flex-direction: row;
  }
}
</style>
