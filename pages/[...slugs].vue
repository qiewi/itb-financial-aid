<template>
  <main class="app-main">
    <!-- Debug info - remove in production -->
    <!-- <div class="prose container w-full overflow-auto text-xs">
      <pre><code>{{ pageData }}</code></pre>
      <hr />
      <pre><code>{{ route.params.slugs }}</code></pre>
    </div> -->

    <span v-if="isLoading">LOADING</span>
    <div v-else>
      <!-- Dynamic component mapping -->
      <LazyPagesDynamic v-if="pageData !== null" :slugs="slug" />
    </div>
  </main>
</template>

<script setup>
// definePageMeta({ auth: false })
const route = useRoute()
const pageData = ref(null)
const isLoading = ref(true)
// const fullPath = '/' + (route.params.slugs?.join('/') ?? '')
const slug = route.params.slugs[route.params.slugs.length - 1]

// Recursively find the page by URL
function findPageByUrl(pages) {
  // console.log({ MENUS: menus, url })
  for (const page of pages) {
    // console.log({ menuUrl: menu.Url, url })
    if (page.Slug === slug) return page
    // if (menu.Child?.length) {
    //   const found = findPageByUrl(menu.Child, url)
    //   if (found) return found
    // }
  }
  return null
}

// Get pages data
const { data: pages } = useNuxtData('pages')

// Safe data access with fallback
const safePages = computed(() => pages.value?.data || [])

// Handle page loading and error checking
onMounted(() => {
  const page = findPageByUrl(safePages.value)

  if (page) {
    pageData.value = page
    isLoading.value = false
  } else {
    // Show error page using Nuxt's error handling
    isLoading.value = false
    showError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    })
  }
})
</script>
