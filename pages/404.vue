<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="pt-[70px]">
      <div
        class="flex min-h-[calc(100vh-70px)] items-center justify-center px-4 py-16"
      >
        <div class="mx-auto max-w-2xl text-center">
          <!-- Error Illustration -->
          <div class="mb-8 flex justify-center">
            <img
              src="/assets/img/404.png"
              alt="Tidak ada konten"
              class="h-64 w-auto object-contain md:h-80"
              loading="eager"
            />
          </div>

          <!-- Error Title -->
          <h1
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            Tidak Ada Konten
          </h1>

          <!-- Error Description -->
          <p class="mb-8 text-lg text-gray-600 md:text-xl">
            Maaf, konten atau halaman yang Anda cari belum tersedia untuk saat
            ini.
          </p>

          <!-- Back to Home Button -->
          <NuxtLink
            to="/home"
            class="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none md:px-10 md:py-4 md:text-lg"
          >
            Kembali ke Beranda
          </NuxtLink>

          <!-- Additional Help Text -->
          <div class="mt-8 text-sm text-gray-500">
            <p>Jika masalah berlanjut, silakan hubungi tim dukungan kami.</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Set proper 404 status code
setResponseStatus(404)
</script>
