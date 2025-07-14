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
              <DotFilter
                title="Jenjang"
                :options="jenjangOptions"
                v-model="selectedJenjang"
              />
            </div>

            <div class="mb-6 border-t border-gray-200 pt-6">
              <h3 class="mb-4 text-sm font-medium text-gray-900">Kategori</h3>

              <!-- Internal Filter -->
              <div class="mb-4">
                <BoxFilter
                  title="Internal"
                  :options="internalOptions"
                  v-model="selectedInternal"
                />
              </div>

              <!-- Eksternal Filter -->
              <div class="mb-4">
                <BoxFilter
                  title="Eksternal"
                  :options="eksternalOptions"
                  v-model="selectedEksternal"
                />
              </div>
            </div>

            <!-- Angkatan Filter -->
            <div class="mb-6">
              <BoxFilter
                title="Angkatan"
                :options="angkatanOptions"
                v-model="selectedAngkatan"
              />
            </div>

            <!-- Periode Filter -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-900">Periode</h3>
              <input
                v-model="selectedPeriode"
                type="date"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- IPK Filter -->
            <div class="mb-6">
              <BoxFilter
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
                    class="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <!-- Sort Button -->
                <button
                  class="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 whitespace-nowrap hover:bg-gray-50"
                >
                  <UIcon name="i-heroicons-funnel" class="h-4 w-4" />
                  Urutkan Berdasarkan
                </button>
              </div>

              <!-- Results Count -->
              <p class="mb-4 text-gray-600">
                Menampilkan {{ filteredScholarships.length }} beasiswa untuk
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
                  <button class="rounded-full p-0.5 hover:bg-blue-200">
                    <UIcon name="i-heroicons-x-mark" class="h-3 w-3" />
                  </button>
                </span>
                <button
                  v-if="activeFilters.length > 0"
                  class="text-sm text-red-600 hover:underline"
                >
                  Hapus Semua
                </button>
              </div>
            </div>

            <!-- Scholarship Cards -->
            <div class="space-y-4">
              <ScholarshipDetail
                v-for="scholarship in paginatedScholarships"
                :key="scholarship.id"
                :scholarship="scholarship"
              />
            </div>

            <!-- Pagination -->
            <div class="mt-8 flex items-center justify-center gap-2">
              <button class="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
                <UIcon name="i-heroicons-chevron-left" class="h-4 w-4" />
              </button>
              <button class="rounded bg-blue-500 px-3 py-1 text-white">
                1
              </button>
              <span class="text-gray-500">dari 10</span>
              <button
                class="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
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
import DotFilter from '~/components/Filters/DotFilter.vue'
import BoxFilter from '~/components/Filters/BoxFilter.vue'
import ScholarshipDetail from '~/components/Cards/ScholarshipDetail.vue'
import { ref, computed } from 'vue'

// Filter options
const jenjangOptions = [
  { label: 'Sarjana', value: 'sarjana' },
  { label: 'Pasca Sarjana', value: 'pasca-sarjana' },
]

const internalOptions = [
  { label: 'Mahasiswa Kerja', value: 'mahasiswa-kerja' },
  { label: 'Keringanan UKT', value: 'keringanan-ukt' },
  { label: 'GTA', value: 'gta' },
  { label: 'Fasilitas', value: 'fasilitas' },
]

const eksternalOptions = [
  { label: 'KIPK', value: 'kipk' },
  { label: 'LPDP', value: 'lpdp' },
  { label: 'BPI', value: 'bpi' },
  { label: 'Kerja Sama', value: 'kerja-sama' },
  { label: 'Non Pemerintah', value: 'non-pemerintah' },
]

const angkatanOptions = [
  { label: '2024', value: '2024' },
  { label: '2023', value: '2023' },
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
  { label: '2020', value: '2020' },
]

const ipkOptions = [
  { label: '1.00 - 2.00', value: '1-2' },
  { label: '2.00 - 3.00', value: '2-3' },
  { label: '3.00 - 4.00', value: '3-4' },
]

// Reactive filter states
const searchQuery = ref('')
const selectedJenjang = ref('sarjana')
const selectedInternal = ref([])
const selectedEksternal = ref(['kerja-sama', 'non-pemerintah'])
const selectedAngkatan = ref(['2024', '2023'])
const selectedPeriode = ref('')
const selectedIPK = ref(['1-2'])

// Sample scholarship data
const scholarships = ref([
  {
    id: 1,
    title: 'Beasiswa TASLA Tahun 2024',
    provider: 'Institut Teknologi Bandung',
    type: 'Kerja Sama',
    level: 'Sarjana',
    status: 'Pendaftaran Dibuka',
    registrationPeriod: '27 Mei-2 Juni 2024',
    quota: '20 Orang',
    benefits: [
      'Bantuan UKT',
      'Pembelian Laptop',
      'Biaya Hidup',
      'Lihat 7 Benefit Lainnya',
    ],
  },
  {
    id: 2,
    title: 'Beasiswa Roberto Rocca',
    provider: 'Roberto Rocca',
    type: 'Kerja Sama',
    level: 'Sarjana',
    status: 'Segera Berakhir',
    registrationPeriod: '1 Mei-8 Juni 2024',
    quota: '5 Orang',
    benefits: [
      'Biaya Hidup',
      'Biaya Pendidikan USD 700',
      'UKT',
      'Lihat 7 Benefit Lainnya',
    ],
  },
])

// Computed properties
const filteredScholarships = computed(() => {
  return scholarships.value.filter(scholarship => {
    // Add filtering logic here based on selected filters
    return true
  })
})

const paginatedScholarships = computed(() => {
  return filteredScholarships.value.slice(0, 10)
})

const activeFilters = computed(() => {
  const filters = []
  if (selectedInternal.value.length > 0) filters.push(...selectedInternal.value)
  if (selectedEksternal.value.length > 0)
    filters.push(...selectedEksternal.value)
  if (selectedAngkatan.value.length > 0) filters.push(...selectedAngkatan.value)
  if (selectedIPK.value.length > 0) filters.push(...selectedIPK.value)
  return filters
})
</script>
