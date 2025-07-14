<template>
  <footer class="bg-gradient-to-b from-white to-blue-100 pt-12">
    <!-- Footer Card -->
    <div
      class="relative container mx-auto overflow-hidden rounded-t-3xl bg-gradient-to-r from-blue-50 to-white px-12 pt-6 pb-4 shadow-xl"
    >
      <!-- Decorative Background Elements -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <!-- Top Wave Decoration -->
        <svg
          class="absolute -top-10 -right-20 h-60 w-60 text-blue-100 opacity-30"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path
            d="M0,100 C30,80 70,120 100,100 C130,80 170,120 200,100 L200,200 L0,200 Z"
          />
        </svg>

        <!-- Left Side Wave -->
        <svg
          class="absolute top-20 -left-16 h-48 w-48 text-blue-200 opacity-20"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path
            d="M0,0 C50,20 80,60 100,80 C120,100 150,140 200,160 L200,200 L0,200 Z"
          />
        </svg>

        <!-- Bottom Right Decoration -->
        <svg
          class="absolute -right-12 bottom-10 h-40 w-40 text-blue-300 opacity-25"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="80" opacity="0.3" />
          <circle cx="120" cy="80" r="40" opacity="0.5" />
          <circle cx="80" cy="120" r="30" opacity="0.4" />
        </svg>

        <!-- Dot Pattern -->
        <div class="absolute top-32 right-40 h-20 w-20 opacity-20">
          <div class="grid grid-cols-4 gap-2">
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
            <div class="h-2 w-2 rounded-full bg-blue-400"></div>
          </div>
        </div>

        <!-- Left Bottom Wave Pattern -->
        <svg
          class="absolute bottom-0 left-20 h-24 w-32 text-blue-200 opacity-30"
          viewBox="0 0 120 80"
          fill="currentColor"
        >
          <path d="M0,40 Q30,20 60,40 T120,40 L120,80 L0,80 Z" />
        </svg>
      </div>

      <!-- Content with relative positioning to appear above decorations -->
      <div class="relative z-10">
        <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          <!-- Logo and Contact Info -->
          <div class="lg:col-span-4">
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--button-color)] bg-white"
              >
                <img
                  src="/assets/img/itb-logo.jpg"
                  alt="ITB Logo"
                  class="h-10 w-10 rounded-full object-contain"
                />
              </div>
              <div>
                <div class="text-primary text-lg font-bold">Financial Aid</div>
                <div class="text-sm font-semibold text-gray-700">
                  Institut Teknologi Bandung
                </div>
              </div>
            </div>

            <div class="space-y-3 text-sm text-gray-600">
              <div class="flex items-start gap-2">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500"
                />
                <span
                  >Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota
                  Bandung, Jawa Barat 40132</span
                >
              </div>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-envelope"
                  class="h-4 w-4 text-gray-500"
                />
                <span>itb.ac.id</span>
              </div>
            </div>
          </div>

          <!-- Temukan Section -->
          <div class="lg:col-span-2">
            <h6 class="text-primary mb-4 text-lg font-bold">Temukan</h6>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/about"
                  class="hover:text-primary text-sm text-gray-600 transition-colors"
                >
                  Tentang ITB Financial Aid
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/visit"
                  class="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[var(--button-color)]"
                >
                  Kunjungi ITB
                  <UIcon
                    name="i-heroicons-arrow-top-right-on-square"
                    class="h-3 w-3"
                  />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/privacy"
                  class="text-sm text-gray-600 transition-colors hover:text-[var(--button-color)]"
                >
                  Kebijakan Privasi
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/terms"
                  class="text-sm text-gray-600 transition-colors hover:text-[var(--button-color)]"
                >
                  Syarat dan Ketentuan
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Pusat Bantuan Section -->
          <div class="lg:col-span-3">
            <h6 class="text-primary mb-4 text-lg font-bold">Pusat Bantuan</h6>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/faq"
                  class="text-sm text-gray-600 transition-colors hover:text-[var(--button-color)]"
                >
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/help"
                  class="text-sm text-gray-600 transition-colors hover:text-[var(--button-color)]"
                >
                  Pusat Bantuan Website
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Media Sosial Section -->
          <div class="lg:col-span-3">
            <h6 class="text-primary mb-4 text-lg font-bold">Media Sosial</h6>
            <div class="flex gap-2">
              <a
                href="https://instagram.com/itbofficial"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/instagram-icon.png"
                  alt="Instagram"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://twitter.com/itbofficial"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/x-icon.png"
                  alt="X (Twitter)"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://line.me/itb"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/line-icon.png"
                  alt="Line"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://facebook.com/itb.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/facebook-icon.png"
                  alt="Facebook"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://youtube.com/itbofficial"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/youtube-icon.png"
                  alt="YouTube"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://tiktok.com/@itbofficial"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/tiktok-icon.png"
                  alt="TikTok"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
              <a
                href="/rss"
                target="_blank"
                rel="noopener noreferrer"
                class="block h-8 w-10 rounded-full"
              >
                <NuxtImg
                  src="/assets/img/wifi-icon.png"
                  alt="RSS"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div
      class="absolute flex w-full items-center justify-center bg-white py-4 text-center"
    >
      <div class="flex items-center justify-center">
        <p class="text-sm text-gray-500">©2024 Institut Teknologi Bandung</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component with static content matching the design reference
</script>
