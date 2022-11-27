<script lang="ts" setup>
import ButtonAction from 'components/common/ButtonAction.vue';

type ButtonItem = {
  label: string;
  value: number;
  textColor: string;
};

defineProps<{
  buttonList: ButtonItem[];
}>();

const emit = defineEmits<{ (event: 'action-clicked', value: number): void }>();
</script>

<template>
  <div v-if="buttonList.length > 0" class="input-groups__other-actions">
    <template v-for="(button, index) in buttonList" :key="index">
      <ButtonAction :text-color="button.textColor" @click="emit('action-clicked', button.value)">
        {{ button.label }}}
      </ButtonAction>
    </template>
  </div>
</template>
