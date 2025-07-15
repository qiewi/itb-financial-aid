<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-sm font-medium text-gray-900 lg:text-base">{{ title }}</h3>
    <div class="flex flex-col gap-2">
      <label
        v-for="option in options"
        :key="option.value"
        class="flex cursor-pointer items-center gap-2"
      >
        <div class="relative">
          <input
            type="radio"
            :name="title"
            :value="option.value"
            :checked="selectedValue === option.value"
            class="sr-only"
            @change="handleChange(option.value)"
          />
          <div
            :class="[
              'flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-200',
              selectedValue === option.value
                ? 'border-[var(--button-color)]'
                : 'border-gray-300 hover:border-gray-400',
            ]"
          >
            <div
              v-if="selectedValue === option.value"
              class="h-2 w-2 rounded-full bg-[var(--button-color)]"
            ></div>
          </div>
        </div>
        <span class="text-sm text-gray-700 lg:text-base">{{
          option.label
        }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const selectedValue = computed(() => props.modelValue)

const handleChange = value => {
  emit('update:modelValue', value)
}
</script>
