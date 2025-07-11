<template>
  <!-- Testimonial Section -->
  <section class="w-full bg-white py-12">
    <div class="container mx-auto px-4">
      <h2
        class="mb-8 text-center text-2xl font-bold text-[#1a1a1a] sm:text-3xl lg:mb-16 lg:text-4xl"
      >
        Kisah Inspiratif Terbaru dari Mahasiswa Kami
      </h2>

      <div
        class="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16"
      >
        <!-- Stacked Cards Section -->
        <div class="relative h-80 w-full max-w-sm lg:h-96 lg:max-w-md">
          <!-- Background Cards (Stacked) -->
          <div
            v-for="(story, index) in stories"
            :key="index"
            class="absolute ml-8 max-w-[300px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out"
            :class="getCardClasses(index)"
            :style="getCardStyles(index)"
          >
            <img
              :src="story.photo"
              :alt="story.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Content Section -->
        <div
          class="flex max-w-md flex-col items-start gap-6 text-left lg:max-w-lg"
        >
          <div class="flex flex-col items-start gap-4">
            <blockquote
              class="text-lg leading-relaxed font-medium text-[#1a1a1a] sm:text-xl lg:text-2xl"
            >
              {{ currentStory.quote }}
            </blockquote>
            <p class="text-sm font-medium text-[#666666] sm:text-base">
              {{ currentStory.name }} - {{ currentStory.program }}
            </p>
          </div>

          <div class="group flex cursor-pointer items-center gap-2">
            <span
              class="text-button-color text-base font-medium group-hover:underline"
            >
              Lihat Detail
            </span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="text-button-color h-5 w-5 transition-transform group-hover:translate-x-1"
            />
          </div>

          <!-- Navigation Controls -->
          <div class="mt-4 flex items-center gap-4">
            <button
              @click="previousStory"
              class="rounded-full p-3 pb-2 shadow-lg transition-all"
              :class="{
                'cursor-not-allowed bg-gray-400 opacity-50':
                  currentStoryIndex === 0,
                'btn-button-color': currentStoryIndex !== 0,
              }"
              :disabled="currentStoryIndex === 0"
            >
              <UIcon name="i-heroicons-arrow-left" class="h-5 w-5 text-white" />
            </button>

            <button
              @click="nextStory"
              class="rounded-full p-3 pb-2 shadow-lg transition-all"
              :class="{
                'cursor-not-allowed bg-gray-400 opacity-50':
                  currentStoryIndex === stories.length - 1,
                'btn-button-color': currentStoryIndex !== stories.length - 1,
              }"
              :disabled="currentStoryIndex === stories.length - 1"
            >
              <UIcon
                name="i-heroicons-arrow-right"
                class="h-5 w-5 text-white"
              />
            </button>

            <button
              class="btn-button-color ml-4 rounded-full px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { stories } from '~/data/testimonials.js'

// Testimonial functionality
const currentStoryIndex = ref(0)
const currentStory = computed(() => stories[currentStoryIndex.value])

const getCardClasses = index => {
  const position =
    (index - currentStoryIndex.value + stories.length) % stories.length

  if (position === 0) {
    return 'z-30 w-full h-full'
  } else if (position === 1) {
    return 'z-20 w-full h-full opacity-60'
  } else if (position === 2) {
    return 'z-10 w-full h-full opacity-40'
  } else {
    return 'z-0 w-full h-full opacity-20'
  }
}

const getCardStyles = index => {
  const position =
    (index - currentStoryIndex.value + stories.length) % stories.length

  if (position === 0) {
    return {
      top: '0px',
      left: '0px',
      transform: 'translateX(0px) scale(1)',
    }
  } else if (position === 1) {
    return {
      top: '0px',
      left: '0px',
      transform: 'translateX(-40px) scale(0.9)',
    }
  } else if (position === 2) {
    return {
      top: '0px',
      left: '0px',
      transform: 'translateX(-80px) scale(0.8)',
    }
  } else {
    return {
      top: '0px',
      left: '0px',
      transform: `translateX(${-40 * position}px) scale(${Math.max(0.6, 1 - position * 0.1)})`,
    }
  }
}

const nextStory = () => {
  if (currentStoryIndex.value < stories.length - 1) {
    currentStoryIndex.value++
  }
}

const previousStory = () => {
  if (currentStoryIndex.value > 0) {
    currentStoryIndex.value--
  }
}
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>
