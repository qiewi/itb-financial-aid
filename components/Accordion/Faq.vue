<template>
  <div class="mx-auto w-full max-w-4xl">
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <div
        class="rounded-xl bg-white shadow-md transition-shadow duration-200 hover:shadow-lg"
      >
        <!-- Question Header -->
        <div
          class="flex cursor-pointer items-center justify-between p-4 lg:p-6"
          @click="toggleFaq(index)"
        >
          <span class="pr-4 text-base font-medium text-[#4c4c4c] lg:text-lg">
            {{ faq.question }}
          </span>
          <UIcon
            name="i-heroicons-plus"
            class="h-5 w-5 flex-shrink-0 text-[var(--button-color)] transition-transform duration-200 lg:h-6 lg:w-6"
            :class="{ 'rotate-45': openFaq === index }"
          />
        </div>

        <!-- Accordion Content -->
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="openFaq === index ? 'max-h-screen' : 'max-h-0'"
        >
          <div
            class="border-t border-gray-100 px-4 py-4 text-sm leading-relaxed text-[#4c4c4c] lg:px-6 lg:text-base"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
})

const openFaq = ref(null)

const toggleFaq = index => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.shadow-md {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
