<template>
    <main class="pt-[70px]">
        <div class="min-h-screen bg-white">
            <div class="container mx-auto px-4 py-6">
            <div class="flex gap-6">
            <!-- Left Sidebar - Filters -->
            <div class="w-80 bg-white rounded-lg p-6 h-fit">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Filter Beasiswa</h2>
                
                <!-- Search -->
                <div class="mb-6">
                <div class="relative">
                    <UIcon name="i-heroicons-magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Cari Beasiswa Sarjana"
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                </div>
    
                <!-- Jenjang Filter (Dot Filter) -->
                <div class="mb-6">
                <DotFilter
                    title="Jenjang"
                    :options="jenjangOptions"
                    v-model="selectedJenjang"
                />
                </div>
    
                <div class="border-t border-gray-200 pt-6 mb-6">
                <h3 class="text-sm font-medium text-gray-900 mb-4">Kategori</h3>
                
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
                <h3 class="text-sm font-medium text-gray-900 mb-3">Periode</h3>
                <input
                    v-model="selectedPeriode"
                    type="date"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <!-- Results Header -->
                <div class="bg-white rounded-lg p-6 mb-6">
                <div class="flex items-center justify-between mb-4">
                    <p class="text-gray-600">
                    Menampilkan {{ filteredScholarships.length }} beasiswa untuk 
                    <span class="text-blue-600 font-medium">{{ selectedJenjang || 'Semua Jenjang' }}</span>
                    </p>
                    <button class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <UIcon name="i-heroicons-funnel" class="h-4 w-4" />
                    Urutkan Berdasarkan
                    </button>
                </div>
    
                <!-- Active Filters -->
                <div class="flex flex-wrap gap-2">
                    <span v-for="filter in activeFilters" :key="filter" class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {{ filter }}
                    <button class="hover:bg-blue-200 rounded-full p-0.5">
                        <UIcon name="i-heroicons-x-mark" class="h-3 w-3" />
                    </button>
                    </span>
                    <button v-if="activeFilters.length > 0" class="text-red-600 text-sm hover:underline">
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
                <div class="flex items-center justify-center gap-2 mt-8">
                <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <UIcon name="i-heroicons-chevron-left" class="h-4 w-4" />
                </button>
                <button class="px-3 py-1 bg-blue-500 text-white rounded">1</button>
                <span class="text-gray-500">dari 10</span>
                <button class="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
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
    { label: 'Pasca Sarjana', value: 'pasca-sarjana' }
  ]
  
  const internalOptions = [
    { label: 'Mahasiswa Kerja', value: 'mahasiswa-kerja' },
    { label: 'Keringanan UKT', value: 'keringanan-ukt' },
    { label: 'GTA', value: 'gta' },
    { label: 'Fasilitas', value: 'fasilitas' }
  ]
  
  const eksternalOptions = [
    { label: 'KIPK', value: 'kipk' },
    { label: 'LPDP', value: 'lpdp' },
    { label: 'BPI', value: 'bpi' },
    { label: 'Kerja Sama', value: 'kerja-sama' },
    { label: 'Non Pemerintah', value: 'non-pemerintah' }
  ]
  
  const angkatanOptions = [
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' }
  ]
  
  const ipkOptions = [
    { label: '1.00 - 2.00', value: '1-2' },
    { label: '2.00 - 3.00', value: '2-3' },
    { label: '3.00 - 4.00', value: '3-4' }
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
      benefits: ['Bantuan UKT', 'Pembelian Laptop', 'Biaya Hidup', 'Lihat 7 Benefit Lainnya']
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
      benefits: ['Biaya Hidup', 'Biaya Pendidikan USD 700', 'UKT', 'Lihat 7 Benefit Lainnya']
    }
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
    if (selectedEksternal.value.length > 0) filters.push(...selectedEksternal.value)
    if (selectedAngkatan.value.length > 0) filters.push(...selectedAngkatan.value)
    if (selectedIPK.value.length > 0) filters.push(...selectedIPK.value)
    return filters
  })
  </script>
  