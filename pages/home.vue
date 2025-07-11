<template>
  <main class="pt-[70px]">
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
          <CardsProgram
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

    <!-- Statistics Section -->
    <section class="relative w-full bg-white py-16">
      <div class="container mx-auto px-4">
        <!-- Background elements -->
        <div
          class="absolute top-[143px] left-[-190px] h-[332px] w-[329px] rotate-[-7.69deg] rounded-[164.64px/166.1px] bg-[linear-gradient(184deg,rgba(6,157,216,0.07)_0%,rgba(255,255,255,0)_100%)]"
        />
        <div
          class="absolute top-[-122px] right-[-100px] h-[397px] w-[391px] rotate-[-77.80deg] rounded-[195.28px/198.58px] bg-[linear-gradient(121deg,rgba(6,157,216,0.07)_0%,rgba(255,255,255,0)_100%)]"
        />

        <!-- Heading -->
        <h2 class="mb-4 text-center text-4xl font-bold text-[#1a1a1a]">
          Perubahan Besar yang Kami Lakukan
        </h2>
        <p
          class="mx-auto mb-12 max-w-[671px] text-center text-base text-[#4c4c4c]"
        >
          Tidak hanya beasiswa, namun kami juga memberikan dukungan pengembangan
          karier
        </p>

        <!-- Features -->
        <div class="mb-16 flex flex-wrap justify-center gap-8">
          <div class="flex w-[230px] items-center gap-4">
            <img
              class="h-[72px] w-[67.15px]"
              alt="Dukungan finansial"
              src="/assets/img/money-icon.png"
            />
            <div class="w-[145px] text-lg font-semibold text-[#1a1a1a]">
              Dukungan Finansial
            </div>
          </div>

          <div class="flex w-[230px] items-center gap-4">
            <img
              class="h-[72px] w-[67.15px]"
              alt="Softskill"
              src="/assets/img/softskill-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Pengembangan <br />
              Soft Skills
            </div>
          </div>

          <div class="flex w-[230px] items-center gap-4">
            <img
              class="h-[72px] w-[67.15px]"
              alt="Jaringan Profesional"
              src="/assets/img/jaringan-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Jaringan <br />
              Profesional
            </div>
          </div>

          <div class="flex w-[230px] items-center gap-4">
            <img
              class="h-[72px] w-[67.15px]"
              alt="Prestasi"
              src="/assets/img/prestasi-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Apresiasi <br />
              Prestasi
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div
          class="border-primary mx-auto grid max-w-6xl grid-cols-1 rounded-lg border py-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <!-- Statistic 1 -->
          <div
            class="border-primary text-primary border-r-1 bg-white px-6 text-start lg:px-8"
          >
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">
              15000+
            </div>
            <p
              class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg"
            >
              Mahasiswa dapat melanjutkan kuliah dengan beasiswa
            </p>
          </div>

          <!-- Statistic 2 -->
          <div
            class="border-primary text-primary border-r-1 bg-white px-6 text-start lg:px-8"
          >
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">
              80%
            </div>
            <p
              class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg"
            >
              Awardee beasiswa memperoleh IPK > 3,5
            </p>
          </div>

          <!-- Statistic 3 -->
          <div
            class="text-primary bg-white px-6 text-start md:col-span-2 lg:col-span-1 lg:px-8"
          >
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">
              80%
            </div>
            <p
              class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg"
            >
              Awardee berhasil mendapatkan pekerjaan tetap sebelum lulus
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Scholarships Section -->
    <section class="w-full bg-white py-16">
      <div class="container mx-auto px-4">
        <h2
          class="mx-auto mb-14 max-w-4xl text-center text-3xl font-bold text-[#1a1a1a] md:text-4xl"
        >
          Temukan Beasiswa Impianmu dan Persiapkan Diri Menjadi Penerima
          Beasiswa
        </h2>

        <div
          class="mx-auto mb-14 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <CardsScholarship
            v-for="(scholarship, index) in featuredScholarships"
            :key="index"
            :scholarship="scholarship"
          />
        </div>

        <div class="flex justify-center">
          <button
            class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="w-full bg-white py-6">
      <div class="container mx-auto px-4">
        <div class="relative h-[238px] w-full rounded-[25px]">
          <!-- Shadow/blur element -->
          <div
            class="absolute top-[35px] left-[15px] h-[178px] w-[98%] rounded-[25px] bg-[#0660a64f] blur-[37.5px]"
          />

          <!-- Main banner -->
          <div
            class="absolute top-0 left-0 h-[238px] w-full overflow-hidden rounded-[25px] bg-[linear-gradient(342deg,rgba(6,96,166,1)_0%,rgba(106,160,202,1)_100%)]"
          >
            <!-- Background decorative elements -->
            <div
              class="absolute top-0 left-[325px] h-[382px] w-[382px] rotate-180 rounded-[191px] bg-[linear-gradient(102deg,rgba(21,106,172,0.36)_0%,rgba(55,128,184,0)_100%)]"
            />
            <div
              class="absolute top-[328px] left-0 h-[181px] w-[181px] rounded-[90.5px] bg-[linear-gradient(20deg,rgba(36,123,190,0)_0%,rgba(126,199,255,1)_100%)]"
            />
            <div
              class="absolute top-[-52px] right-[20px] h-[365px] w-[365px] rounded-[182.5px] bg-[linear-gradient(75deg,rgba(21,106,172,0.36)_0%,rgba(0,103,171,1)_100%)]"
            />

            <!-- Content -->
            <div
              class="relative z-10 flex h-full items-center justify-between p-6 sm:p-8 lg:p-10"
            >
              <!-- Left side: Title -->
              <div class="max-w-[400px] flex-1 lg:max-w-[500px]">
                <h2
                  class="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl"
                >
                  Buka Peluang Besar Menggapai Mimpi Diri melalui Beasiswa
                </h2>
              </div>

              <!-- Center: ITB Logo -->
              <div
                class="mx-6 hidden items-center justify-center sm:flex lg:mx-8"
              >
                <div
                  class="flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 lg:h-32 lg:w-32"
                >
                  <img
                    src="/assets/img/logo-itb.png"
                    alt="ITB Logo"
                    class="h-full w-full rounded-full object-contain"
                  />
                </div>
              </div>

              <!-- Right side: CTA Button -->
              <div class="flex-shrink-0">
                <button
                  class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--button-color)] shadow-lg transition-colors hover:bg-gray-50 lg:px-8 lg:py-4 lg:text-base"
                >
                  Daftar Beasiswa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import CardsScholarship from '~/components/Cards/Scholarship.vue'

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

// Featured scholarships data
const featuredScholarships = [
  {
    title: 'Beasiswa Roberto Rocca',
    provider: 'Ikatan Alumni ITB 1978',
    period: '1 Mei-8 Juni 2024',
    quota: '5 Orang',
    type: 'Eksternal',
    level: 'Sarjana',
    status: 'Segera Berakhir',
  },
  {
    title: 'Beasiswa Roberto Rocca',
    provider: 'Ikatan Alumni ITB 1978',
    period: '1 Juni-15 Juli 2024',
    quota: '10 Orang',
    type: 'Internal',
    level: 'Sarjana',
    status: 'Tersedia',
  },
  {
    title: 'Beasiswa Roberto Rocca',
    provider: 'Ikatan Alumni ITB 1978',
    period: '1 Mei-8 Juni 2024',
    quota: '5 Orang',
    type: 'Eksternal',
    level: 'Sarjana',
    status: 'Segera Berakhir',
  },
]
</script>
