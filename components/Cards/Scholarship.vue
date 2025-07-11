<template>
  <div
    class="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
  >
    <!-- Blue wave background shapes -->
    <div class="absolute right-0 bottom-0 h-40 w-full overflow-hidden">
      <div class="absolute right-0 bottom-0 h-full w-full">
        <!-- First wave layer -->
        <svg
          width="100%"
          height="60"
          viewBox="0 0 400 120"
          class="absolute bottom-0 text-[var(--button-color)] opacity-8"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C100,20 200,100 400,40 L400,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

        <!-- Second overlapping wave layer -->
        <svg
          width="100%"
          height="30"
          viewBox="0 0 400 100"
          class="absolute bottom-0 text-[var(--button-color)] opacity-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C150,80 250,10 400,50 L800,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

    <div class="relative z-10 p-4 sm:p-6">
      <!-- Status badge with triangular notch -->
      <div class="absolute top-0 left-0">
        <div class="relative">
          <div
            :class="statusBadgeClasses"
            class="relative rounded-tl-2xl rounded-br-[25px] px-3 py-2 text-xs font-bold sm:text-sm"
          >
            {{ scholarship.status }}
            <!-- Small triangular notch -->
            <div
              :class="statusNotchClasses"
              class="absolute -bottom-1 left-0 h-0 w-0 border-b-[6px] border-l-[6px] border-b-transparent"
            ></div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 pt-8">
        <div class="flex flex-col gap-3">
          <h3
            class="text-base leading-tight font-bold text-[#1a1a1a] sm:text-lg lg:text-xl"
          >
            {{ scholarship.title }}
          </h3>
          <div class="flex items-center gap-3">
            <img
              class="h-5 w-5 rounded-full object-cover lg:h-6 lg:w-6"
              alt="Provider logo"
              src="https://c.animaapp.com/mcyb8rkkDU1Yru/img/image-2-1.png"
            />
            <a
              href="#"
              class="text-xs font-medium text-[var(--button-color)] underline transition-all hover:no-underline sm:text-sm lg:text-base"
            >
              {{ scholarship.provider }}
            </a>
          </div>
        </div>

        <div class="h-px w-full bg-gray-200"></div>

        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div class="flex flex-col gap-1 sm:gap-2">
              <div class="text-xs text-gray-500 lg:text-sm">
                Periode Pendaftaran
              </div>
              <div
                class="text-xs font-medium text-[#1a1a1a] sm:text-sm lg:text-base"
              >
                {{ scholarship.period }}
              </div>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2">
              <div class="text-xs text-gray-500 lg:text-sm">Kuota Diterima</div>
              <div
                class="text-xs font-medium text-[#1a1a1a] sm:text-sm lg:text-base"
              >
                {{ scholarship.quota }}
              </div>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2">
              <div class="text-xs text-gray-500 lg:text-sm">Jenis Beasiswa</div>
              <div
                class="text-xs font-medium text-[#1a1a1a] sm:text-sm lg:text-base"
              >
                {{ scholarship.type }}
              </div>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2">
              <div class="text-xs text-gray-500 lg:text-sm">
                Jenjang Beasiswa
              </div>
              <div
                class="text-xs font-medium text-[#1a1a1a] sm:text-sm lg:text-base"
              >
                {{ scholarship.level }}
              </div>
            </div>
          </div>

          <button
            class="w-full rounded-full bg-[var(--button-color)] py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--button-color)]/90 lg:py-4 lg:text-base"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  scholarship: {
    type: Object,
    required: true,
  },
})

// Dynamic badge styling based on status
const statusBadgeClasses = computed(() => {
  const status = props.scholarship.status?.toLowerCase()

  if (status === 'segera berakhir') {
    return 'bg-red-100 text-red-600'
  } else if (status === 'tersedia') {
    return 'bg-green-100 text-green-600'
  } else if (status === 'ditutup') {
    return 'bg-gray-100 text-gray-600'
  }

  // Default to red for unknown status
  return 'bg-red-100 text-red-600'
})

// Dynamic notch styling to match badge background
const statusNotchClasses = computed(() => {
  const status = props.scholarship.status?.toLowerCase()

  if (status === 'segera berakhir') {
    return 'border-l-red-100'
  } else if (status === 'tersedia') {
    return 'border-l-green-100'
  } else if (status === 'ditutup') {
    return 'border-l-gray-100'
  }

  // Default to red for unknown status
  return 'border-l-red-100'
})
</script>
