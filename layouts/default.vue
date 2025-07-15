<template>
  <UApp>
    <NuxtLoadingIndicator />
    <Header />
    <!-- <ul class="skip-links">
      <li>
        <a ref="skipLink" href="#main" class="skip-link"
          >Skip to main content</a
        >
      </li>
    </ul> -->
    <slot />
    <Footer />
    <!-- <pre><code>{{ data }}</code></pre> -->
  </UApp>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()

useHead(() => ({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: `${config.public.BASE_URL}${route.path}`,
    },
  ],
  script: [
    // {
    //   src: 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js',
    //   // defer: true,
    // },
    {
      src: 'https://aframe.io/releases/1.6.0/aframe.min.js',
      // defer: true,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js',
      // defer: true,
    },
  ],
}))

// useHead({
// })

// DISABLED: API fetching - components now use fallback data for SSR safety
// This prevents SSR errors while maintaining functionality
//
// const endpoints = [
//   {
//     name: 'global',
//     query: {
//       populate: '*',
//     },
//   },
//   {
//     name: 'main-menus',
//     query: queryMenus,
//   },
//   {
//     name: 'footer-menus',
//     query: queryMenus,
//   },
//   {
//     name: 'pages',
//     query: {
//       populate: '*',
//     },
//   },
// ]

// const promises = endpoints.map(item =>
//   useFetch('/api/app/' + item.name, {
//     query: item.query,
//     key: item.name,
//   }).then(res => {
//     if (res.error.value !== null) {
//       throw new Error(`Failed to fetch ${item.name}: ${res.statusText}`)
//     }

//     return res
//   }),
// )

// const results = await Promise.allSettled(promises)

// results.forEach((result, index) => {
//   const key = endpoints[index].name
//   if (result.status === 'fulfilled') {
//     data.value[key] = result.value.data
//   } else {
//     errors.value[key] = result.reason.message || 'Unknown error'
//   }
// })

// console.log({ data })
</script>
