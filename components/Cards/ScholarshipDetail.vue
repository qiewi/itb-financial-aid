<template>
  <div
    class="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
  >
    <!-- Background Image -->
    <NuxtImg
      src="/assets/img/scholarship-detail-bg.png"
      alt="Scholarship detail background"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />

    <div class="relative z-10 p-4 sm:p-6">
      <!-- Status badge with triangular notch -->
      <div class="absolute top-0 right-0">
        <div class="relative">
          <div
            :class="statusBadgeClasses"
            class="relative rounded-tr-2xl rounded-bl-[25px] px-3 py-2 text-xs font-bold sm:text-sm"
          >
            {{ enhancedScholarship.status }}
            <!-- Small triangular notch -->
            <div
              :class="statusNotchClasses"
              class="absolute -bottom-1 left-0 h-0 w-0 border-b-[6px] border-l-[6px] border-b-transparent"
            ></div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-6">
        <!-- Title -->
        <div class="flex flex-col gap-3">
          <h3
            class="text-lg leading-tight font-bold text-[#1a1a1a] sm:text-xl lg:text-2xl pr-20"
          >
            {{ enhancedScholarship.title }}
          </h3>
        </div>

        <!-- Two Column Layout - Stack on mobile -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <!-- Left Column -->
          <div class="space-y-4 lg:space-y-6 lg:border-r-2 lg:border-gray-200 lg:pr-6">
            <!-- Basic Info Grid -->
            <div class="flex items-center gap-3">
              <img
                class="h-5 w-5 rounded-full object-cover lg:h-6 lg:w-6"
                alt="Provider logo"
                src="/assets/img/logo-itb.png"
              />
              <a
                href="#"
                class="text-primary text-sm underline transition-all hover:no-underline lg:text-base"
              >
                {{ enhancedScholarship.provider }}
              </a>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col gap-1">
                <div class="text-xs text-gray-500 lg:text-sm">
                  Jenis Beasiswa
                </div>
                <div class="text-sm font-medium text-[#1a1a1a] lg:text-base">
                  {{ enhancedScholarship.type }}
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="text-xs text-gray-500 lg:text-sm">
                  Jenjang Beasiswa
                </div>
                <div class="text-sm font-medium text-[#1a1a1a] lg:text-base">
                  {{ enhancedScholarship.level }}
                </div>
              </div>
            </div>

            <!-- Benefits Section -->
            <div>
              <h4 class="mb-3 text-sm font-bold text-[#1a1a1a] lg:text-base">
                Benefit Beasiswa
              </h4>
              <div class="grid grid-cols-2 gap-2">
                <div
                  v-for="benefit in enhancedScholarship.benefits"
                  :key="benefit"
                  class="flex items-start gap-2"
                >
                  <img
                    src="/assets/img/check-icon.png"
                    alt="Check icon"
                    class="h-5 w-5 flex-shrink-0 mt-0.5"
                    width="20"
                    height="20"
                  />
                  <span class="text-xs text-gray-600 lg:text-sm">{{
                    benefit
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-4 lg:space-y-6">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div class="flex flex-col gap-1">
                <div class="text-xs text-gray-500 lg:text-sm">
                  Periode Pendaftaran
                </div>
                <div class="text-sm font-medium text-[#1a1a1a] lg:text-base">
                  {{ enhancedScholarship.registrationPeriod }}
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="text-xs text-gray-500 lg:text-sm">
                  Kuota Diterima
                </div>
                <div class="text-sm font-medium text-[#1a1a1a] lg:text-base">
                  {{ enhancedScholarship.quota }}
                </div>
              </div>
            </div>
            <!-- Additional Info or Actions -->
            <div class="flex flex-col gap-4">
              <!-- Daftar Button -->
              <button
                class="w-full rounded-full bg-[var(--button-color)] py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--button-color)]/90 lg:py-4 lg:text-base"
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { indonesianMonths } from '~/data/constants.js'

const props = defineProps({
  scholarship: {
    type: Object,
    required: true,
  },
})

// Function to format date in Indonesian format
const formatIndonesianDate = dateString => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = indonesianMonths[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

// Function to format registration period
const formatRegistrationPeriod = (startDate, endDate) => {
  if (!startDate || !endDate) return ''
  return `${formatIndonesianDate(startDate)} - ${formatIndonesianDate(endDate)}`
}

// Function to limit benefits for display on cards
const limitBenefitsForDisplay = (benefits, maxDisplayed = 3) => {
  if (!benefits || benefits.length <= maxDisplayed) {
    return benefits
  }

  const displayedBenefits = benefits.slice(0, maxDisplayed)
  const remainingCount = benefits.length - maxDisplayed

  if (remainingCount > 0) {
    displayedBenefits.push(`${remainingCount} Benefit Lainnya`)
  }

  return displayedBenefits
}

// Function to format scholarship type for display
const formatScholarshipType = type => {
  const typeMap = {
    'kerja-sama': 'Kerja Sama',
    lpdp: 'LPDP',
    kipk: 'KIPK',
    'non-pemerintah': 'Non Pemerintah',
    'mahasiswa-kerja': 'Mahasiswa Kerja',
    'keringanan-ukt': 'Keringanan UKT',
    gta: 'GTA',
    fasilitas: 'Fasilitas',
    bpi: 'BPI',
  }
  return typeMap[type] || type
}

// Enhanced scholarship with formatted data
const enhancedScholarship = computed(() => ({
  ...props.scholarship,
  registrationPeriod: formatRegistrationPeriod(
    props.scholarship.registrationStartDate,
    props.scholarship.registrationEndDate,
  ),
  type: formatScholarshipType(props.scholarship.type),
  benefits: limitBenefitsForDisplay(props.scholarship.benefits, 3),
  fullBenefits: props.scholarship.benefits, // Keep original benefits for detail view
}))

// Dynamic badge styling based on status
const statusBadgeClasses = computed(() => {
  const status = enhancedScholarship.value.status?.toLowerCase()

  if (status === 'segera berakhir') {
    return 'bg-red-100 text-red-600'
  } else if (status === 'pendaftaran dibuka' || status === 'tersedia') {
    return 'bg-green-100 text-green-600'
  } else if (status === 'ditutup') {
    return 'bg-gray-100 text-gray-600'
  }

  // Default to green for unknown status
  return 'bg-green-100 text-green-600'
})

// Dynamic notch styling to match badge background
const statusNotchClasses = computed(() => {
  const status = enhancedScholarship.value.status?.toLowerCase()

  if (status === 'segera berakhir') {
    return 'border-l-red-100'
  } else if (status === 'pendaftaran dibuka' || status === 'tersedia') {
    return 'border-l-green-100'
  } else if (status === 'ditutup') {
    return 'border-l-gray-100'
  }

  // Default to green for unknown status
  return 'border-l-green-100'
})
</script>
