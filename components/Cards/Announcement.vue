<template>
  <div
    class="relative aspect-[284/277] w-full overflow-hidden rounded-2xl"
    :style="{
      background: `linear-gradient(180deg, rgba(229,229,229,0) 60%, rgba(229,229,229,1) 89%, rgba(229,229,229,1) 100%), 
                  url(${announcement.image}) / cover`,
    }"
  >
    <!-- Content Card -->
    <div class="absolute right-4 bottom-4 left-4">
      <div class="rounded-2xl bg-white p-4 shadow-lg">
        <div class="space-y-3">
          <!-- Title -->
          <h3
            class="line-clamp-2 text-base leading-tight font-bold text-[#1a1a1a] lg:text-lg"
          >
            {{ announcement.title }}
          </h3>

          <!-- Date -->
          <div class="flex items-center gap-2">
            <div class="flex h-5 w-5 flex-shrink-0 items-center justify-center">
              <UIcon
                name="i-heroicons-calendar-days"
                class="h-4 w-4 text-gray-500"
              />
            </div>
            <div class="text-sm text-gray-600">
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
