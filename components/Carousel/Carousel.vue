<template>
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { partners } from '~/data/partners.js'

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