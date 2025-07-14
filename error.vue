<script setup>
const error = useError()

const handleError = () => {
  clearError({
    redirect: `/home`,
  })
}

// Get appropriate message based on error code
const getErrorMessage = statusCode => {
  switch (statusCode) {
    case 404:
      return {
        title: 'Tidak Ada Konten',
        subtitle:
          'Maaf, konten atau halaman yang Anda cari belum tersedia untuk saat ini.',
      }
    case 500:
      return {
        title: 'Terjadi Kesalahan',
        subtitle:
          'Maaf, terjadi kesalahan pada server. Silakan coba lagi nanti.',
      }
    default:
      return {
        title: 'Terjadi Kesalahan',
        subtitle:
          'Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.',
      }
  }
}

const errorMessage = getErrorMessage(error.value?.statusCode)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Main Content Container -->
    <main class="pt-[70px]">
      <!-- Main Content -->
      <div class="flex items-center justify-center px-4 py-16">
        <div class="mx-auto max-w-2xl text-center">
          <!-- Error Illustration -->
          <div class="flex justify-center">
            <NuxtImg
              src="/assets/img/not-found.png"
              alt="Tidak ada konten"
              class="h-64 w-auto object-contain md:h-80"
              loading="eager"
            />
          </div>

          <!-- Error Title -->
          <h1
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            {{ errorMessage.title }}
          </h1>

          <!-- Error Description -->
          <p class="mb-8 text-lg text-gray-600 md:text-xl">
            {{ errorMessage.subtitle }}
          </p>

          <!-- Back to Home Button -->
          <button
            @click="handleError"
            class="inline-flex items-center rounded-full bg-[var(--button-color)] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--button-color)]/90 focus:ring-2 focus:ring-[var(--button-color)] focus:ring-offset-2 focus:outline-none md:px-10 md:py-4 md:text-lg"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
