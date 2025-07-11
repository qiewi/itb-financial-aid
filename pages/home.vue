<template>
  <main class="pt-[70px]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-l from-blue-50 to-white"
    >
      <!-- Campus Background - Full Section -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/img/campus.png"
          alt="ITB Campus"
          class="h-full w-full object-cover opacity-20"
        />
      </div>

      <!-- Content Layer -->
      <div class="relative z-10 mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
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
            <!-- Main Student Image -->
            <div class="relative z-10">
              <img
                src="/assets/img/mahasiswa.png"
                alt="Mahasiswa ITB"
                class="h-full w-full object-cover"
              />
            </div>

            <!-- Decorative elements -->
            <div
              class="absolute -top-6 -right-6 z-5 h-24 w-24 rounded-full bg-[var(--button-color)] opacity-10"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 z-5 h-32 w-32 rounded-full bg-blue-200 opacity-30"
            ></div>
          </div>
        </div>
      </div>

      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 z-5 h-full w-1/3 opacity-5">
        <div
          class="h-full w-full bg-gradient-to-l from-[var(--button-color)] to-transparent"
        ></div>
      </div>
    </section>

    <!-- Scholarship Program Section -->
    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <div class="text-primary mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold md:text-4xl lg:text-7xl">
            <span class="text-primary">Kesempatan </span>
            <span class="text-primary">Emas </span>
            <span class="stroke-text">Menjadi </span>
          </h2>
          <h2 class="mb-4 text-3xl font-bold md:text-4xl lg:text-7xl">
            <span class="stroke-text stroke-primary">Penerima </span>
            <span class="text-primary">Beasiswa </span>
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
        <div class="mb-16 flex flex-wrap justify-center gap-16">
          <div class="flex items-center gap-4">
            <img
              class="h-[52px]"
              alt="Dukungan finansial"
              src="/assets/img/money-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Dukungan <br />
              Finansial
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img
              class="h-[52px]"
              alt="Softskill"
              src="/assets/img/softskill-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Pengembangan <br />
              Soft Skills
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img
              class="h-[52px]"
              alt="Jaringan Profesional"
              src="/assets/img/jaringan-icon.png"
            />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Jaringan <br />
              Profesional
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img
              class="h-[52px]"
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
          class="border-primary mx-auto grid max-w-6xl grid-cols-1 rounded-3xl border py-8 md:grid-cols-2 lg:grid-cols-3"
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

    <!-- Testimonial Section -->
    <CardsSliding />

    <!-- Announcements Section -->
    <section class="w-full bg-white py-14">
      <div class="container mx-auto px-4">
        <h2
          class="mb-14 text-center text-3xl font-bold text-[#1a1a1a] lg:text-4xl"
        >
          Pengumuman
        </h2>

        <div class="flex flex-col items-center gap-10">
          <div
            class="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <CardsAnnouncement
              v-for="(announcement, index) in announcements"
              :key="index"
              :announcement="announcement"
            />
          </div>

          <button
            class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="w-full bg-white py-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center gap-10">
          <div class="flex flex-col items-center gap-8">
            <h2 class="text-center text-4xl font-bold text-[#1a1a1a]">
              Mitra Pemberi Beasiswa
            </h2>

            <div class="flex flex-col items-center gap-4">
              <div class="relative w-full max-w-4xl overflow-hidden">
                <div
                  class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                >
                  <div
                    v-for="(slide, slideIndex) in partnerSlides"
                    :key="slideIndex"
                    class="w-full flex-shrink-0"
                  >
                    <div
                      class="flex flex-wrap justify-center gap-[49.35px] px-4"
                    >
                      <div
                        v-for="(partner, index) in slide"
                        :key="index"
                        class="flex h-[95px] w-[95px] items-center justify-center"
                      >
                        <img
                          class="max-h-[69px] max-w-[91px] object-contain transition-opacity duration-300 hover:opacity-75"
                          :alt="partner.alt"
                          :src="partner.logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Progress Dots -->
              <div class="flex items-center gap-3">
                <div
                  v-for="(slide, index) in partnerSlides"
                  :key="index"
                  :class="[
                    'cursor-pointer rounded-lg transition-all duration-300',
                    index === currentSlide
                      ? 'btn-button-color h-4 w-4'
                      : 'h-3 w-3 bg-[#d9d9d9] hover:bg-gray-400',
                  ]"
                  @click="goToSlide(index)"
                />
              </div>
            </div>
          </div>

          <button
            class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="w-full bg-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center gap-10">
          <h2 class="text-center text-3xl font-bold text-[#1a1a1a] lg:text-4xl">
            Temukan Jawaban untuk Pertanyaanmu
          </h2>

          <AccordionFaq :faqs="faqs" />

          <button
            class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CardsScholarship from '~/components/Cards/Scholarship.vue'
import CardsAnnouncement from '~/components/Cards/Announcement.vue'
import CardsSliding from '~/components/Cards/Sliding.vue'
import AccordionFaq from '~/components/Accordion/Faq.vue'

// Import data from separate files
import { scholarshipPrograms } from '~/data/scholarshipPrograms.js'
import { featuredScholarships } from '~/data/featuredScholarships.js'
import { announcements } from '~/data/announcements.js'
import { partners } from '~/data/partners.js'
import { faqs } from '~/data/faqs.js'

// Scholarship programs functionality
const activeTab = ref('sarjana')

const currentPrograms = computed(() => {
  return scholarshipPrograms[activeTab.value] || []
})

// Partners carousel functionality
const currentSlide = ref(0)
const autoSlideInterval = ref(null)

const partnerSlides = computed(() => {
  const slideSize = 5
  const slides = []
  for (let i = 0; i < partners.length; i += slideSize) {
    slides.push(partners.slice(i, i + slideSize))
  }
  return slides
})

const goToSlide = index => {
  currentSlide.value = index
  resetAutoSlide()
}

const startAutoSlide = () => {
  autoSlideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % partnerSlides.value.length
  }, 4000) // Change slide every 4 seconds
}

const resetAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
  }
  startAutoSlide()
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
  }
})
</script>
