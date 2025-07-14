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
                    class="w-full rounded-3xl border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <!-- Sort Button -->
                <button
                  class="flex items-center gap-2 rounded-3xl border border-gray-300 px-4 py-2 whitespace-nowrap hover:bg-gray-50"
                >
                  <UIcon name="i-heroicons-funnel" class="h-4 w-4" />
                  Urutkan Berdasarkan
                </button>
              </div>

              <!-- Results Count -->
              <p class="mb-4 text-gray-600">
                Menampilkan {{ (currentPage - 1) * itemsPerPage + 1 }}-{{
                  Math.min(
                    currentPage * itemsPerPage,
                    filteredScholarships.length,
                  )
                }}
                dari {{ filteredScholarships.length }} beasiswa untuk
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
                      'w-16 rounded px-2 py-1 text-center text-sm transition-colors text-black font-bold border-gray-50 border-1',
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

// Pagination states
const currentPage = ref(1)
const itemsPerPage = ref(3)
const pageInput = ref('')
const inputError = ref(false)

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
  {
    id: 3,
    title: 'Beasiswa Badjatex Tahun 2024',
    provider: 'PT Badjatex',
    type: 'Kerja Sama',
    level: 'Sarjana',
    status: 'Pendaftaran Dibuka',
    registrationPeriod: '15 Juni-30 Juni 2024',
    quota: '15 Orang',
    benefits: [
      'Biaya Pendidikan',
      'Tunjangan Bulanan',
      'Asuransi Kesehatan',
      'Lihat 5 Benefit Lainnya',
    ],
  },
  {
    id: 4,
    title: 'Beasiswa LPDP 2024',
    provider: 'Lembaga Pengelola Dana Pendidikan',
    type: 'LPDP',
    level: 'Pasca Sarjana',
    status: 'Pendaftaran Dibuka',
    registrationPeriod: '1 Juli-31 Juli 2024',
    quota: '100 Orang',
    benefits: [
      'Biaya Kuliah Penuh',
      'Biaya Hidup',
      'Tiket Pesawat',
      'Lihat 10 Benefit Lainnya',
    ],
  },
  {
    id: 5,
    title: 'Beasiswa KIP Kuliah 2024',
    provider: 'Kementerian Pendidikan',
    type: 'KIPK',
    level: 'Sarjana',
    status: 'Ditutup',
    registrationPeriod: '1 Maret-30 April 2024',
    quota: '200 Orang',
    benefits: [
      'Bantuan UKT',
      'Biaya Hidup Bulanan',
      'Buku dan Alat Tulis',
      'Lihat 6 Benefit Lainnya',
    ],
  },
  {
    id: 6,
    title: 'Beasiswa BCA Finance',
    provider: 'PT BCA Finance',
    type: 'Non Pemerintah',
    level: 'Sarjana',
    status: 'Segera Berakhir',
    registrationPeriod: '10 Juni-20 Juni 2024',
    quota: '25 Orang',
    benefits: [
      'Bantuan Biaya Kuliah',
      'Program Magang',
      'Mentoring Karir',
      'Lihat 4 Benefit Lainnya',
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

const totalPages = computed(() => {
  return Math.ceil(filteredScholarships.value.length / itemsPerPage.value)
})

const paginatedScholarships = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredScholarships.value.slice(start, end)
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
