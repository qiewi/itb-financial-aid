<template>
  <!-- Carousel Part -->
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
            class="flex flex-wrap justify-center gap-6 px-4 lg:gap-[49.35px]"
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { partners } from '~/data/partners.js'

// Partners carousel functionality
const currentSlide = ref(0)
const autoSlideInterval = ref(null)
const isMobile = ref(false)

// Check if screen is mobile size
const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 1024 // lg breakpoint - shows 2 logos on mobile/tablet, 5 on desktop
  }
}

const partnerSlides = computed(() => {
  const slideSize = isMobile.value ? 2 : 5 // 2 logos on mobile, 5 on larger screens
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

// Handle window resize
const handleResize = () => {
  const wasMobile = isMobile.value
  checkMobile()
  // Reset to first slide if mobile state changed
  if (wasMobile !== isMobile.value) {
    currentSlide.value = 0
    resetAutoSlide()
  }
}

// Lifecycle hooks
onMounted(() => {
  checkMobile()
  startAutoSlide()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})
</script>
