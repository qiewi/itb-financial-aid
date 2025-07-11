<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white"
    >
      <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <!-- Left Content -->
          <div class="max-w-xl space-y-8">
            <div class="space-y-4">
              <h1
                class="text-2xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-4xl"
              >
                Gapai Mimpi Besar Diri untuk Pendidikan Tinggi demi Masa Depan
                Penuh Prestasi
              </h1>
              <p class="text-lg leading-relaxed text-gray-600">
                Setiap mahasiswa memiliki kemampuan finansial yang berbeda
                sehingga membutuhkan beasiswa. Berbagai dukungan pendanaan
                membantumu mewujudkan impian.
              </p>
            </div>

            <!-- CTA Buttons -->
            <button
              class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Tentang FinAid
            </button>
          </div>

          <!-- Right Image -->
          <div class="relative">
            <div class="relative z-10">
              <img
                src="/assets/img/mahasiswa.png"
                alt="Mahasiswa ITB"
                class="h-full w-full object-cover"
              />
            </div>
            <!-- Decorative elements -->
            <div
              class="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[var(--button-color)] opacity-10"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-200 opacity-30"
            ></div>
          </div>
        </div>
      </div>

      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 h-full w-1/3 opacity-5">
        <div
          class="h-full w-full bg-gradient-to-l from-[var(--button-color)] to-transparent"
        ></div>
      </div>
    </section>

    <!-- Scholarship Program Section -->
    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <div class="mb-12 text-center">
          <h2
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            Kesempatan
            <span class="text-[var(--button-color)]">Emas</span> Menjadi
            <br />
            Penerima <span class="text-[var(--button-color)]">Beasiswa</span>
          </h2>
        </div>

        <!-- Tabs -->
        <div class="mb-12 flex justify-center">
          <div class="flex rounded-full bg-gray-100 p-1">
            <button
              :class="[
                'rounded-full px-8 py-3 font-semibold transition-all duration-300',
                activeTab === 'sarjana'
                  ? 'bg-[var(--button-color)] text-white'
                  : 'text-gray-600 hover:text-[var(--button-color)]',
              ]"
              @click="activeTab = 'sarjana'"
            >
              Sarjana
            </button>
            <button
              :class="[
                'rounded-full px-8 py-3 font-semibold transition-all duration-300',
                activeTab === 'pascasarjana'
                  ? 'bg-[var(--button-color)] text-white'
                  : 'text-gray-600 hover:text-[var(--button-color)]',
              ]"
              @click="activeTab = 'pascasarjana'"
            >
              Pascasarjana
            </button>
          </div>
        </div>

        <!-- Scholarship Cards -->
        <div class="mb-8 flex flex-wrap justify-center gap-6">
          <ScholarshipCard
            v-for="(program, index) in currentPrograms"
            :key="index"
            :program="program"
          />
        </div>

        <!-- View All Button -->
        <div class="flex justify-center">
          <button
            class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Lihat Semua Program
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ScholarshipCard from '~/components/Scholarship/ScholarshipCard.vue'

// Reactive state
const activeTab = ref('sarjana')

// Scholarship programs data
const scholarshipPrograms = {
  sarjana: [
    {
      title: 'KIPK',
      description:
        'Gapai cita-cita dengan bantuan biaya pendidikan dari pemerintah Indonesia',
      type: 'Eksternal',
      typeClass: 'bg-shades-blue20 text-shades-blue70',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-1.png',
    },
    {
      title: 'Keringanan UKT',
      description:
        'Dapatkan keringanan biaya studi untuk tetap melanjutkan pendidikan tanpa hambatan',
      type: 'Internal',
      typeClass: 'bg-shades-yellow40 text-[#ea9f1c]',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-2.png',
    },
    {
      title: 'Mahasiswa Kerja',
      description:
        'Raih peluang dan kesempatan bekerja di ITB untuk membantu finansialmu',
      type: 'Eksternal',
      typeClass: 'bg-shades-blue20 text-shades-blue70',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-3.png',
    },
    {
      title: 'Beasiswa Non Pemerintah',
      description:
        'Wujudkan impian melalui beragam beasiswa lembaga swadaya hingga yayasan',
      type: 'Internal',
      typeClass: 'bg-shades-yellow40 text-[#ea9f1c]',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-4.png',
    },
  ],
  pascasarjana: [
    {
      title: 'Beasiswa S2',
      description:
        'Program beasiswa untuk jenjang magister dengan berbagai bidang studi',
      type: 'Eksternal',
      typeClass: 'bg-shades-blue20 text-shades-blue70',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-1.png',
    },
    {
      title: 'Beasiswa S3',
      description:
        'Program beasiswa untuk jenjang doktor dengan fokus penelitian',
      type: 'Internal',
      typeClass: 'bg-shades-yellow40 text-[#ea9f1c]',
      image: 'https://c.animaapp.com/mcyb8rkkDU1Yru/img/mask-group-2.png',
    },
  ],
}

// Computed property for current programs
const currentPrograms = computed(() => {
  return scholarshipPrograms[activeTab.value] || []
})
</script>
