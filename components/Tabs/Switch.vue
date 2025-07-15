<template>
  <!-- Scholarship Program Section -->
  <section class="bg-white py-8 lg:py-16">
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
</template>

<script setup>
import { ref, computed } from 'vue'
import { scholarshipPrograms } from '~/data/scholarshipPrograms.js'

// Scholarship programs functionality
const activeTab = ref('sarjana')

const currentPrograms = computed(() => {
  return scholarshipPrograms[activeTab.value] || []
})
</script>
