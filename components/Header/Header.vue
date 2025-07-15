<template>
  <header
    :class="[
      'fixed top-0 right-0 left-0 z-[9999] h-[70px] w-full border-b border-gray-200 bg-white shadow-sm transition-all duration-500',
      mobileMenuOpen ? 'bg-white' : 'bg-white',
      'md:' + (show ? 'translate-y-0' : '-translate-y-full'),
    ]"
    :style="{ willChange: 'transform' }"
  >
    <div class="mx-auto flex h-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <!-- Logo and Institution Name -->
      <NuxtLink to="/home" class="flex items-center gap-3">
        <div class="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full bg-white">
          <img
            src="/assets/img/logo-itb.png"
            alt="ITB Logo"
            class="lg:h-[46px] lg:w-[46px] object-contain h-[36px] w-[36px]"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-xs lg:text-sm leading-tight font-semibold text-gray-800">
            Financial Aid
          </span>
          <span class="text-xs lg:text-sm leading-tight font-semibold text-gray-800 hidden lg:block">
            Institut Teknologi Bandung
          </span>
          <span class="text-xs lg:text-sm leading-tight font-semibold text-gray-800 lg:hidden">
            ITB
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation and Actions -->
      <div class="ml-8 hidden max-w-[800px] flex-1 items-center justify-between lg:flex">
        <!-- Navigation Menu -->
        <nav>
          <ul class="flex items-center gap-8">
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink
                :to="item.url"
                :class="[
                  'flex items-center gap-1 transition-colors',
                  isActive(item.url)
                    ? 'text-primary font-medium'
                    : 'hover:text-button-color font-medium text-gray-700',
                ]"
              >
                <span class="text-sm">
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
      </div>

      <!-- Mobile Actions and Hamburger -->
      <div class="flex items-center gap-3 lg:hidden">
        <!-- Mobile Search and Notifications -->
        <button class="rounded-full p-2 transition-colors hover:bg-gray-50">
          <UIcon
            name="i-heroicons-magnifying-glass"
            class="text-button-color h-5 w-5"
          />
        </button>
        <button class="rounded-full p-2 transition-colors hover:bg-gray-50">
          <UIcon name="i-heroicons-bell" class="text-button-color h-5 w-5" />
        </button>

        <!-- Mobile Hamburger Button -->
        <button
          class="flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
          aria-label="Toggle mobile menu"
          @click="toggleMobileMenu"
        >
          <span
            :class="[
              'block h-0.5 w-6 bg-gray-700 transition-all duration-300',
              mobileMenuOpen ? 'translate-y-2 rotate-45' : '',
            ]"
          />
          <span
            :class="[
              'block h-0.5 w-6 bg-gray-700 transition-all duration-300',
              mobileMenuOpen ? 'opacity-0' : '',
            ]"
          />
          <span
            :class="[
              'block h-0.5 w-6 bg-gray-700 transition-all duration-300',
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : '',
            ]"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'absolute top-full left-0 w-full overflow-hidden bg-white border-b border-gray-200 shadow-lg transition-all duration-300 lg:hidden',
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div class="px-6 py-4">
        <!-- Mobile Navigation -->
        <ul class="mb-6 space-y-1">
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              :to="item.url"
              :class="[
                'flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                isActive(item.url)
                  ? 'bg-blue-50 text-[var(--button-color)]'
                  : 'text-gray-700 hover:bg-gray-50',
              ]"
              @click="closeMobileMenu"
            >
              <span>{{ item.label }}</span>
              <UIcon
                v-if="item.hasDropdown"
                name="i-heroicons-chevron-right"
                class="h-4 w-4"
              />
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Login Button -->
        <UButton
          class="btn-button-color w-full rounded-full py-3 text-sm font-medium text-white flex text-center items-center justify-center"
          to="/login"
          @click="closeMobileMenu"
        >
          Login
        </UButton>
      </div>
    </div>
  </header>
</template>

<script setup>
// Get current route
const route = useRoute()

// Reactive state
const show = ref(true)
const isAtTop = ref(true)
const lastScroll = ref(0)
const mobileMenuOpen = ref(false)

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

// Function to check if current route matches the nav item
const isActive = itemUrl => {
  return route.path === itemUrl
}

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Scroll handling
const handleScroll = () => {
  const currentScroll = window.scrollY
  isAtTop.value = currentScroll <= 0

  // Close mobile menu on scroll
  if (mobileMenuOpen.value) {
    closeMobileMenu()
  }

  if (currentScroll <= 0) {
    show.value = true
    lastScroll.value = 0
    return
  }

  // Only hide/show header on desktop (lg and up)
  // On mobile, header always stays visible
  if (window.innerWidth >= 1024) {
    if (currentScroll > lastScroll.value) {
      show.value = false // Hide on scroll down
    } else {
      show.value = true // Show on scroll up
    }
  } else {
    show.value = true // Always show on mobile
  }

  lastScroll.value = currentScroll
}

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    closeMobileMenu()
  },
)

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
