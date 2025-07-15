<template>
  <div class="flex flex-col gap-3">
    <button
      class="flex items-center justify-between text-sm font-medium text-gray-900 lg:text-base"
      @click="isExpanded = !isExpanded"
    >
      {{ title }}
      <UIcon
        :name="
          isExpanded ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'
        "
        class="h-4 w-4"
      />
    </button>
    <div v-show="isExpanded" class="flex flex-col gap-2">
      <label
        v-for="option in options"
        :key="option.value"
        class="flex cursor-pointer items-center gap-2"
      >
        <div class="relative">
          <input
            type="checkbox"
            :value="option.value"
            :checked="selectedValues.includes(option.value)"
            class="sr-only"
            @change="handleChange(option.value)"
          />
          <div
            :class="[
              'flex h-4 w-4 items-center justify-center rounded border-2 transition-all duration-200',
              selectedValues.includes(option.value)
                ? 'border-[var(--button-color)] bg-[var(--button-color)]'
                : 'border-gray-300 hover:border-gray-400',
            ]"
          >
            <UIcon
              v-if="selectedValues.includes(option.value)"
              name="i-heroicons-check"
              class="h-3 w-3 text-white"
            />
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
import { ref, computed } from 'vue'

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
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const isExpanded = ref(true)
const selectedValues = computed(() => props.modelValue || [])

const handleChange = value => {
  const newValues = [...selectedValues.value]
  const index = newValues.indexOf(value)

  if (index > -1) {
    newValues.splice(index, 1)
  } else {
    newValues.push(value)
  }

  emit('update:modelValue', newValues)
}
</script>
