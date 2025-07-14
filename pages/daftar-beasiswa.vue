<template>
  <main class="pt-[70px]">
    <div class="min-h-screen bg-white">
      <div class="container mx-auto px-4 py-6">
        <div class="flex gap-6">
          <!-- Left Sidebar - Filters -->
          <div class="h-fit w-80 rounded-lg bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Filter Beasiswa
            </h2>

            <!-- Jenjang Filter (Dot Filter) -->
            <div class="mb-6">
              <FiltersDotFilter
                title="Jenjang"
                :options="jenjangOptions"
                v-model="selectedJenjang"
              />
            </div>

            <div class="mb-6 border-t border-gray-200 pt-6">
              <h3 class="mb-4 text-sm font-medium text-gray-900">Kategori</h3>

              <!-- Internal Filter -->
              <div class="mb-4">
                <FiltersBoxFilter
                  title="Internal"
                  :options="internalOptions"
                  v-model="selectedInternal"
                />
              </div>

              <!-- Eksternal Filter -->
              <div class="mb-4">
                <FiltersBoxFilter
                  title="Eksternal"
                  :options="eksternalOptions"
                  v-model="selectedEksternal"
                />
              </div>
            </div>

            <!-- Angkatan Filter -->
            <div class="mb-6">
              <FiltersBoxFilter
                title="Angkatan"
                :options="angkatanOptions"
                v-model="selectedAngkatan"
              />
            </div>

            <!-- Periode Filter -->
            <FiltersPeriodeFilter v-model="selectedPeriode" />

            <!-- IPK Filter -->
            <div class="mb-6">
              <FiltersBoxFilter
                title="IPK"
                :options="ipkOptions"
                v-model="selectedIPK"
              />
            </div>
          </div>

          <!-- Main Content -->
          <div class="flex-1">
            <!-- Search and Sort Header -->
            <div class="mb-6 rounded-lg bg-white p-6">
              <div class="mb-4 flex items-center gap-4">
                <!-- Search Bar -->
                <div class="relative flex-1">
                  <UIcon
                    name="i-heroicons-magnifying-glass"
                    class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
                  />
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Cari Beasiswa Sarjana"
                    class="w-full rounded-3xl border border-gray-300 py-2 pr-4 pl-10 text-black focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <!-- Sort Button -->
                <div class="relative">
                  <button
                    @click="showSortDropdown = !showSortDropdown"
                    class="flex items-center gap-2 rounded-3xl border border-gray-300 px-4 py-2 whitespace-nowrap text-gray-500 hover:bg-gray-50"
                  >
                    <UIcon name="i-heroicons-funnel" class="h-4 w-4" />
                    {{ currentSortLabel }}
                    <UIcon name="i-heroicons-chevron-down" class="h-3 w-3" />
                  </button>

                  <!-- Sort Dropdown -->
                  <div
                    v-if="showSortDropdown"
                    class="absolute top-full right-0 z-50 mt-1 w-56 rounded-lg border border-gray-200 bg-white shadow-lg"
                  >
                    <div class="py-1">
                      <button
                        v-for="option in sortOptions"
                        :key="`${option.value}-${option.order}`"
                        @click="setSortOption(option)"
                        :class="[
                          'w-full px-4 py-2 text-left text-sm hover:bg-gray-50',
                          option.value === sortBy && option.order === sortOrder
                            ? 'bg-blue-50 font-medium text-blue-600'
                            : 'text-gray-700',
                        ]"
                      >
                        {{ option.label }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Results Count -->
              <p class="mb-4 text-gray-600">
                Menampilkan {{ (currentPage - 1) * itemsPerPage + 1 }}-{{
                  Math.min(
                    currentPage * itemsPerPage,
                    enhancedScholarships.length,
                  )
                }}
                dari {{ enhancedScholarships.length }} beasiswa untuk
                <span class="font-medium text-blue-600">{{
                  selectedJenjang || 'Semua Jenjang'
                }}</span>
              </p>

              <!-- Active Filters -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="filter in activeFilters"
                  :key="filter"
                  class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {{ filter }}
                  <button
                    @click="removeFilter(filter)"
                    class="rounded-full p-0.5 transition-colors hover:bg-blue-200"
                  >
                    <UIcon name="i-heroicons-x-mark" class="h-3 w-3" />
                  </button>
                </span>
                <button
                  v-if="activeFilters.length > 0"
                  @click="clearAllFilters"
                  class="text-sm text-red-600 transition-colors hover:underline"
                >
                  Hapus Semua
                </button>
              </div>
            </div>

            <!-- Scholarship Cards -->
            <div class="space-y-4">
              <CardsScholarshipDetail
                v-for="scholarship in paginatedScholarships"
                :key="scholarship.id"
                :scholarship="scholarship"
              />
            </div>

            <!-- Pagination -->
            <div class="mt-8 flex items-center justify-center gap-4">
              <!-- Previous Button -->
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                :class="[
                  'rounded-full px-3 py-2 transition-colors',
                  currentPage === 1
                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                    : 'bg-[var(--button-color)] text-white hover:bg-[var(--button-color)]/90',
                ]"
              >
                <UIcon name="i-heroicons-chevron-left" class="h-4 w-4" />
              </button>

              <!-- Page Info and Input -->
              <div class="flex flex-col items-center gap-1">
                <div class="flex items-center gap-2">
                  <input
                    v-model="pageInput"
                    @keyup.enter="handlePageInput"
                    @blur="handlePageInput"
                    type="number"
                    :min="1"
                    :max="totalPages"
                    :placeholder="currentPage.toString()"
                    :class="[
                      'w-16 rounded border-1 border-gray-50 px-2 py-1 text-center text-sm font-bold text-black transition-colors',
                      inputError
                        ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                    ]"
                  />
                  <span class="text-sm text-gray-600"
                    >dari {{ totalPages }}</span
                  >
                </div>
                <span v-if="inputError" class="text-xs text-red-500">
                  Halaman 1-{{ totalPages }} saja
                </span>
              </div>

              <!-- Next Button -->
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                :class="[
                  'rounded-full px-3 py-2 transition-colors',
                  currentPage === totalPages
                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                    : 'bg-[var(--button-color)] text-white hover:bg-[var(--button-color)]/90',
                ]"
              >
                <UIcon name="i-heroicons-chevron-right" class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

// Import data constants
import {
  jenjangOptions,
  internalOptions,
  eksternalOptions,
  angkatanOptions,
  ipkOptions,
} from '~/data/scholarshipFilters.js'
import { scholarships as scholarshipData } from '~/data/scholarships.js'
import { sortOptions } from '~/data/constants.js'

// Data constants are now imported from /data folder

// Reactive filter states
const searchQuery = ref('')
const selectedJenjang = ref('Sarjana')
const selectedInternal = ref([])
const selectedEksternal = ref(['kerja-sama', 'non-pemerintah'])
const selectedAngkatan = ref(['2024', '2023'])
const selectedPeriode = ref('')
const selectedIPK = ref(['1-2'])

// Pagination states
const currentPage = ref(1)
const itemsPerPage = ref(3)
const pageInput = ref('')
const inputError = ref(false)

// Sorting states
const sortBy = ref('endDate') // Default sort by end date
const sortOrder = ref('asc') // 'asc' or 'desc'

// Scholarship data imported from data folder
const scholarships = ref(scholarshipData)

// Computed properties
const filteredScholarships = computed(() => {
  return scholarships.value.filter(scholarship => {
    // Search filter - check if title contains search query (case insensitive)
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase().trim()
      const title = scholarship.title.toLowerCase()
      if (!title.includes(query)) {
        return false
      }
    }

    // Add other filtering logic here based on selected filters
    // For now, return true for all other filters
    return true
  })
})

// Enhanced scholarships with sorting (formatting handled by CardsScholarshipDetail component)
const enhancedScholarships = computed(() => {
  // Sort scholarships
  return filteredScholarships.value.sort((a, b) => {
    let compareValue = 0

    if (sortBy.value === 'endDate') {
      const dateA = new Date(a.registrationEndDate)
      const dateB = new Date(b.registrationEndDate)
      compareValue = dateA - dateB
    } else if (sortBy.value === 'title') {
      compareValue = a.title.localeCompare(b.title)
    } else if (sortBy.value === 'quota') {
      const quotaA = parseInt(a.quota.replace(/\D/g, ''))
      const quotaB = parseInt(b.quota.replace(/\D/g, ''))
      compareValue = quotaA - quotaB
    }

    return sortOrder.value === 'desc' ? -compareValue : compareValue
  })
})

const totalPages = computed(() => {
  return Math.ceil(enhancedScholarships.value.length / itemsPerPage.value)
})

const paginatedScholarships = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return enhancedScholarships.value.slice(start, end)
})

// Pagination functions
const goToPage = page => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const handlePageInput = () => {
  const page = parseInt(pageInput.value)
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    pageInput.value = ''
    inputError.value = false
  } else if (pageInput.value !== '') {
    // Show validation feedback for out of range values
    inputError.value = true
    setTimeout(() => {
      inputError.value = false
      pageInput.value = ''
    }, 2000)
  }
}

// Sorting functions
const showSortDropdown = ref(false)

const setSortOption = option => {
  sortBy.value = option.value
  sortOrder.value = option.order
  showSortDropdown.value = false
  currentPage.value = 1 // Reset to first page when sorting changes
}

const currentSortLabel = computed(() => {
  const option = sortOptions.find(
    opt => opt.value === sortBy.value && opt.order === sortOrder.value,
  )
  return option ? option.label : 'Tanggal Berakhir (Terlama)'
})

// Close dropdown when clicking outside
const handleSortClickOutside = event => {
  if (showSortDropdown.value && !event.target.closest('.relative')) {
    showSortDropdown.value = false
  }
}

// Watchers
watch(searchQuery, () => {
  // Reset to first page when search query changes
  currentPage.value = 1
})

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleSortClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleSortClickOutside)
})

// Filter removal functions
const removeFilter = filterValue => {
  // Check which filter array contains this value and remove it
  if (selectedInternal.value.includes(filterValue)) {
    selectedInternal.value = selectedInternal.value.filter(
      item => item !== filterValue,
    )
  } else if (selectedEksternal.value.includes(filterValue)) {
    selectedEksternal.value = selectedEksternal.value.filter(
      item => item !== filterValue,
    )
  } else if (selectedAngkatan.value.includes(filterValue)) {
    selectedAngkatan.value = selectedAngkatan.value.filter(
      item => item !== filterValue,
    )
  } else if (selectedIPK.value.includes(filterValue)) {
    selectedIPK.value = selectedIPK.value.filter(item => item !== filterValue)
  } else if (filterValue.startsWith('Periode:')) {
    // Clear date range filter
    selectedPeriode.value = ''
  }
  // Reset to first page when filter changes
  currentPage.value = 1
}

const clearAllFilters = () => {
  selectedInternal.value = []
  selectedEksternal.value = []
  selectedAngkatan.value = []
  selectedIPK.value = []
  selectedPeriode.value = ''
  // Reset to first page when filters are cleared
  currentPage.value = 1
}

// Helper function to format date for display in filters
const formatDateDisplay = dateString => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const activeFilters = computed(() => {
  const filters = []
  if (selectedInternal.value.length > 0) filters.push(...selectedInternal.value)
  if (selectedEksternal.value.length > 0)
    filters.push(...selectedEksternal.value)
  if (selectedAngkatan.value.length > 0) filters.push(...selectedAngkatan.value)
  if (selectedIPK.value.length > 0) filters.push(...selectedIPK.value)
  if (selectedPeriode.value) {
    const [startDate, endDate] = selectedPeriode.value.split('_')
    const dateDisplay = `${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`
    filters.push(`Periode: ${dateDisplay}`)
  }
  return filters
})
</script>
