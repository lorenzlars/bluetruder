<template>
  <div class="slider">
    <InputNumber
      v-model.number="model"
      type="number"
      class="slider__input"
      :step="step"
      :min="min"
      :max="max"
      suffix="%"
    />
    <input
      v-model.number="model"
      class="slider__range"
      type="range"
      :min="min"
      :max="max"
      :step="step"
    >
  </div>
</template>

<script setup lang="ts">
import {shallowRef, watch} from "vue";
import InputNumber from "@/components/controls/InputNumber.vue";

type Props = {
  min?: number
  max?: number
  step?: number
  modelValue?: number
}

type Emits = {
  'update:modelValue': [value: number]
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  step: 1,
  modelValue: 0
})
const emit = defineEmits<Emits>()
const model = shallowRef(props.modelValue)

watch(() => props.modelValue, (value) => {
  model.value = value
})

watch(model, (value) => {
  emit('update:modelValue', value)
})
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  display: flex;
  gap: 1rem;

  &__range {
    width: 100%;
  }

  &__input {
    width: 9rem;
  }
}

</style>