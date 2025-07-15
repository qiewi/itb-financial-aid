<template>
  <div
    class="relative aspect-[284/240] w-full overflow-hidden rounded-2xl sm:aspect-[284/260] lg:aspect-[284/277]"
    :style="{
      background: `linear-gradient(180deg, rgba(229,229,229,0) 60%, rgba(229,229,229,1) 89%, rgba(229,229,229,1) 100%), 
                  url(${announcement.image}) 50% 50% / cover`,
    }"
  >
    <!-- Content Card -->
    <div
      class="absolute right-3 bottom-3 left-3 sm:right-4 sm:bottom-4 sm:left-4"
    >
      <div class="rounded-xl bg-white p-3 shadow-lg sm:rounded-2xl sm:p-4">
        <div class="space-y-2 sm:space-y-3">
          <!-- Title -->
          <h3
            class="line-clamp-2 text-sm leading-tight font-bold text-[#1a1a1a] sm:text-base lg:text-lg"
          >
            {{ announcement.title }}
          </h3>

          <!-- Date -->
          <div class="flex items-center gap-2">
            <div
              class="flex h-4 w-4 flex-shrink-0 items-center justify-center sm:h-5 sm:w-5"
            >
              <UIcon
                name="i-heroicons-calendar-days"
                class="h-3 w-3 text-gray-500 sm:h-4 sm:w-4"
              />
            </div>
            <div class="text-xs text-gray-600 sm:text-sm">
              {{ announcement.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  announcement: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
