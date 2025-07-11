<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white"
    >
      <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <!-- Left Content -->
          <div class="space-y-8 max-w-xl">
            <div class="space-y-4">
              <h1
                class="text-2xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-4xl"
              >
                Gapai Mimpi Besar Diri untuk Pendidikan Tinggi demi Masa Depan Penuh Prestasi
              </h1>
              <p class="text-lg leading-relaxed text-gray-600">
                Setiap mahasiswa memiliki kemampuan finansial yang berbeda sehingga membutuhkan beasiswa. Berbagai dukungan pendanaan membantumu mewujudkan impian.
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
  </main>
</template>
