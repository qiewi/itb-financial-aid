<template>
  <main class="app-main bg-slate-200">
    <div class="flex h-full flex-col items-center justify-center">
      <div
        class="mx-auto w-full max-w-sm rounded-lg bg-white px-8 py-6 shadow-lg"
      >
        <div class="text-center">
          <h1 class="mb-4 text-2xl font-semibold">Redirecting...</h1>
          <p class="mb-4 text-gray-600">
            Authentication is temporarily disabled.
          </p>
          <p class="text-sm text-gray-500">
            You will be redirected to the home page now.
          </p>
        </div>

        <!-- DISABLED: Login form - authentication bypassed for development -->
        <!-- 
        <h1 class="mb-4 text-center text-2xl font-semibold">Login Page</h1>
        <UForm :schema="schema" :state="state" @submit.prevent="signMeIn">
          <UFormField
            label="Username"
            name="username"
            :required="true"
            class="mb-4"
          >
            <UInput
              v-model="state.identifier"
              type="text"
              placeholder="Username"
              class="w-full"
              size="lg"
              :required="true"
            />
          </UFormField>
          <UFormField
            label="Password"
            name="password"
            :required="true"
            class="mb-4"
          >
            <UInput
              v-model="state.password"
              type="password"
              placeholder="Password"
              class="w-full"
              size="lg"
              :required="true"
            />
          </UFormField>
          <UButton
            type="submit"
            label="Sign In"
            block
            :disabled="isLoading"
            size="lg"
          />
        </UForm>
        -->
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// DISABLED: Authentication logic - bypassed for development
// import * as z from 'zod'
// import type { FormSubmitEvent } from '@nuxt/ui'

// const { signIn, status } = useAuth()
const route = useRoute()
// const toast = useToast()

// Bypass authentication and redirect to home or specified redirect URL
const redirectTo = computed(() => {
  const redirect = route.query.redirect
  // Handle TypeScript type safety for redirect parameter
  if (Array.isArray(redirect)) {
    return redirect[0] || '/home'
  }
  return redirect || '/home'
})

// Auto-redirect immediately to bypass login
onMounted(() => {
  // Immediate redirect to /home
  navigateTo(redirectTo.value, { replace: true })
})

// REMOVED: Duplicate redirect that was causing the loop
// navigateTo(redirectTo.value, { replace: true })

// DISABLED: All authentication-related code below
/* 
// const identifier = ref('chandra')
// const password = ref('@Pass123word')
const isLoading = ref(false)
const authenticated = computed(() => status.value === 'authenticated')

const schema = z.object({
  identifier: z.string().min(4, 'Must be at least 8 characters'),
  password: z.string().min(8, 'Must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  identifier: 'chandra',
  password: '@Pass123word',
})

async function signMeIn(event: FormSubmitEvent<Schema>) {
  isLoading.value = true

  await signIn(
    {
      identifier: state.identifier,
      password: state.password,
    },
    { redirect: false },
  )

  console.log('authenticated', authenticated.value, redirectTo.value)

  if (authenticated.value) {
    toast.add({
      title: 'Success',
      description: 'You are logged in',
      icon: 'i-lucide-alert-triangle',
      color: 'success',
    })
    navigateTo(redirectTo.value)
    isLoading.value = false
  } else {
    isLoading.value = false

    toast.add({
      title: 'Error',
      description: 'You are not authenticated',
      icon: 'i-lucide-alert-triangle',
      color: 'warning',
    })
  }
}

if (authenticated.value) {
  navigateTo(redirectTo.value)
}
*/

// DISABLED: Authentication-only page meta - allowing all users for now
// definePageMeta({
//   auth: {
//     unauthenticatedOnly: true,
//     // navigateAuthenticatedTo: redirectTo,
//   },
// })
</script>
