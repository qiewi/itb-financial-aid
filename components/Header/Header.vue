<template>
  <header
    class="fixed top-0 right-0 left-0 z-[9999] h-[70px] w-full border-b border-gray-200 bg-white shadow-sm"
  >
    <div
      class="mx-auto flex h-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
    >
      <!-- Logo and Institution Name -->
      <NuxtLink
        to="/home"
        class="flex items-center gap-3"
      >
        <div
          class="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border-2 border-[var(--button-color)] bg-white"
        >
          <img
            src="/assets/img/logo-itb.png"
            alt="ITB Logo"
            class="h-[46px] w-[46px] object-contain"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-sm leading-tight font-semibold text-gray-800">
            Financial Aid
          </span>
          <span class="text-sm leading-tight font-semibold text-gray-800">
            Institut Teknologi Bandung
          </span>
        </div>
      </NuxtLink>

      <!-- Navigation and Actions -->
      <div class="ml-8 flex max-w-[800px] flex-1 items-center justify-between">
        <!-- Navigation Menu -->
        <nav class="hidden lg:block">
          <ul class="flex items-center gap-8">
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink
                :to="item.url"
                class="hover:text-button-color flex items-center gap-1 text-gray-700 transition-colors"
              >
                <span class="text-sm font-medium">
                  {{ item.label }}
                </span>
                <UIcon
                  v-if="item.hasDropdown"
                  name="i-heroicons-chevron-down"
                  class="h-4 w-4"
                />
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Actions: Search, Notifications, Login -->
        <div class="flex items-center gap-3">
          <button class="rounded-full p-2 transition-colors hover:bg-gray-50">
            <UIcon
              name="i-heroicons-magnifying-glass"
              class="text-button-color h-5 w-5"
            />
          </button>
          <button class="rounded-full p-2 transition-colors hover:bg-gray-50">
            <UIcon name="i-heroicons-bell" class="text-button-color h-5 w-5" />
          </button>
          <UButton
            class="btn-button-color ml-2 h-10 rounded-full px-12 text-sm font-medium text-white"
            to="/login"
          >
            Login
          </UButton>
        </div>

        <!-- Mobile menu button -->
        <button class="ml-4 p-2 lg:hidden">
          <UIcon name="i-heroicons-bars-3" class="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Navigation menu items data
const navItems = [
  { label: 'Daftar Beasiswa', url: '/daftar-beasiswa', hasDropdown: false },
  { label: 'Program', url: '/program', hasDropdown: false },
  { label: 'Informasi', url: '/informasi', hasDropdown: true },
  {
    label: 'Kisah Menginspirasi',
    url: '/kisah-menginspirasi',
    hasDropdown: false,
  },
  { label: 'Mitra', url: '/mitra', hasDropdown: false },
]
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
