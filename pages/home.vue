<template>
  <main class="pt-[70px]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-l from-blue-50 to-white">
      <!-- Campus Background - Full Section -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/img/campus.png"
          alt="ITB Campus"
          class="h-full w-full object-cover opacity-20"
        />
      </div>

      <!-- Content Layer -->
      <div class="relative z-10 w-full px-6 pt-8">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <!-- Left Content -->
            <div class="max-w-xl space-y-8">
              <div class="space-y-4">
                <h1 class="text-2xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-4xl">
                  Gapai Mimpi Besar Diri untuk Pendidikan Tinggi demi Masa Depan Penuh Prestasi
                </h1>
                <p class="text-lg leading-relaxed text-gray-600">
                  Setiap mahasiswa memiliki kemampuan finansial yang berbeda sehingga membutuhkan beasiswa. Berbagai dukungan pendanaan membantumu mewujudkan impian.
                </p>
              </div>

              <!-- CTA Buttons -->
              <button class="btn-button-color rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg">
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

              <!-- Decorative elements - adjusted for mobile -->
              <div class="absolute -top-6 -right-6 z-5 h-24 w-24 rounded-full bg-[var(--button-color)] opacity-10 hidden sm:block"></div>
              <div class="absolute -bottom-6 -left-6 z-5 h-32 w-32 rounded-full bg-blue-200 opacity-30 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Pattern - hidden on mobile to prevent overflow -->
      <div class="absolute top-0 right-0 z-5 h-full w-1/3 opacity-5 hidden lg:block">
        <div class="h-full w-full bg-gradient-to-l from-[var(--button-color)] to-transparent"></div>
      </div>
    </section>

    <!-- Scholarship Program Section -->
    <TabsSwitch />

    <!-- Statistics Section -->
    <section class="relative w-full bg-white px-6 py-16 overflow-hidden">
      <div class="mx-auto max-w-7xl">
        <!-- Background elements - adjusted to prevent overflow -->
        <div class="absolute top-[143px] left-0 h-[332px] w-[200px] rotate-[-7.69deg] rounded-[164.64px/166.1px] bg-[linear-gradient(184deg,rgba(6,157,216,0.07)_0%,rgba(255,255,255,0)_100%)] hidden lg:block" />
        <div class="absolute top-[-122px] right-0 h-[397px] w-[200px] rotate-[-77.80deg] rounded-[195.28px/198.58px] bg-[linear-gradient(121deg,rgba(6,157,216,0.07)_0%,rgba(255,255,255,0)_100%)] hidden lg:block" />

        <!-- Heading -->
        <h2 class="mb-4 text-center text-4xl font-bold text-[#1a1a1a]">
          Perubahan Besar yang Kami Lakukan
        </h2>
        <p class="mx-auto mb-12 max-w-[671px] text-center text-base text-[#4c4c4c]">
          Tidak hanya beasiswa, namun kami juga memberikan dukungan pengembangan karier
        </p>

        <!-- Features -->
        <div class="mb-16 grid grid-cols-2 gap-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-16">
          <div class="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
            <img class="h-[52px]" alt="Dukungan finansial" src="/assets/img/money-icon.png" />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Dukungan <br />
              Finansial
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
            <img class="h-[52px]" alt="Softskill" src="/assets/img/softskill-icon.png" />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Pengembangan <br />
              Soft Skills
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
            <img class="h-[52px]" alt="Jaringan Profesional" src="/assets/img/jaringan-icon.png" />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Jaringan <br />
              Profesional
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
            <img class="h-[52px]" alt="Prestasi" src="/assets/img/prestasi-icon.png" />
            <div class="text-lg font-semibold text-[#1a1a1a]">
              Apresiasi <br />
              Prestasi
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="border-primary mx-auto grid max-w-6xl grid-cols-1 rounded-3xl border py-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Statistic 1 -->
          <div class="border-primary text-primary border-r-0 lg:border-r-1 sm:border-b-1 lg:border-b-0 bg-white px-6 text-center md:text-start lg:px-8 py-4 md:py-0">
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">15000+</div>
            <p class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg">
              Mahasiswa dapat melanjutkan kuliah dengan beasiswa
            </p>
          </div>

          <!-- Statistic 2 -->
          <div class="border-primary text-primary border-r-0 lg:border-r-1 sm:border-b-1 lg:border-b-0 bg-white px-6 text-center md:text-start lg:px-8 py-4 md:py-0">
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">80%</div>
            <p class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg">
              Awardee beasiswa memperoleh IPK > 3,5
            </p>
          </div>

          <!-- Statistic 3 -->
          <div class="text-primary bg-white px-6 text-center md:text-start md:col-span-2 lg:col-span-1 lg:px-8 py-4 md:py-0">
            <div class="mb-3 text-3xl font-bold sm:text-4xl lg:text-6xl">80%</div>
            <p class="text-base leading-relaxed font-semibold opacity-80 lg:text-lg">
              Awardee berhasil mendapatkan pekerjaan tetap sebelum lulus
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Scholarships Section -->
    <section class="w-full bg-white px-6 py-16">
      <div class="mx-auto max-w-7xl">
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
    <section class="w-full bg-white px-6 py-6">
      <div class="mx-auto max-w-7xl">
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
              class="relative z-10 flex h-full items-center justify-between p-6 sm:p-8 lg:p-10 lg:flex-row flex-col"
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
    <section class="w-full bg-white px-6 py-14">
      <div class="mx-auto max-w-7xl">
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
    <CarouselCarousel />

    <!-- FAQ Section -->
    <section class="w-full bg-white px-6 py-12">
      <div class="mx-auto max-w-7xl">
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
// Import data from separate files
import { featuredScholarships } from '~/data/featuredScholarships.js'
import { announcements } from '~/data/announcements.js'
import { faqs } from '~/data/faqs.js'
</script>
