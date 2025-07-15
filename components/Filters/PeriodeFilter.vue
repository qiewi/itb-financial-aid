<template>
  <div class="mb-6">
    <button
      class="flex w-full items-center justify-between text-sm font-medium text-gray-900 lg:text-base"
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
    <div v-show="isExpanded" class="mt-3">
      <div class="date-picker-container relative">
        <button
          class="flex w-full items-center justify-between rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          @click="showDatePicker = !showDatePicker"
        >
          <span class="text-sm text-gray-700">
            {{ dateRangeDisplay || 'Pilih rentang tanggal' }}
          </span>
          <UIcon
            name="i-heroicons-calendar-days"
            class="h-4 w-4 text-gray-400"
          />
        </button>

        <!-- Date Picker Dropdown -->
        <div
          v-if="showDatePicker"
          class="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
          @click.stop
        >
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="mb-1 block text-xs font-medium text-gray-700"
                >Tanggal Mulai</label
              >
              <input
                v-model="startDate"
                type="date"
                class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="mb-1 block text-xs font-medium text-gray-700"
                >Tanggal Akhir</label
              >
              <input
                v-model="endDate"
                type="date"
                :min="startDate"
                class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="flex gap-2 pt-2">
              <button
                class="flex-1 rounded bg-[var(--button-color)] px-3 py-2 text-sm text-white transition-colors hover:bg-[var(--button-color)]/90"
                @click="applyDateRange"
              >
                Terapkan
              </button>
              <button
                class="flex-1 rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                @click="clearDateRange"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Periode',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

// Component states
const isExpanded = ref(true)
const showDatePicker = ref(false)
const startDate = ref('')
const endDate = ref('')

// Initialize from model value if provided
if (props.modelValue) {
  const [start, end] = props.modelValue.split('_')
  startDate.value = start || ''
  endDate.value = end || ''
}

// Date formatting function
const formatDate = dateString => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

// Computed display value
const dateRangeDisplay = computed(() => {
  if (startDate.value && endDate.value) {
    return `${formatDate(startDate.value)} - ${formatDate(endDate.value)}`
  } else if (startDate.value) {
    return `${formatDate(startDate.value)} - ...`
  }
  return ''
})

// Date range functions
const applyDateRange = () => {
  if (startDate.value && endDate.value) {
    const dateRangeValue = `${startDate.value}_${endDate.value}`
    emit('update:modelValue', dateRangeValue)
    showDatePicker.value = false
  }
}

const clearDateRange = () => {
  startDate.value = ''
  endDate.value = ''
  emit('update:modelValue', '')
  showDatePicker.value = false
}

// Close date picker when clicking outside
const handleClickOutside = event => {
  if (showDatePicker.value && !event.target.closest('.date-picker-container')) {
    showDatePicker.value = false
  }
}

// Event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
