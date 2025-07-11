<template>
    <div
      class="h-[267px] w-[284px] overflow-hidden rounded-[25px] bg-[linear-gradient(139deg,rgba(255,255,255,1)_0%,rgba(224,235,243,1)_100%)]"
    >
      <div class="relative h-full p-0">
        <div class="relative h-full w-full">
          <!-- Background image -->
          <div
            class="absolute top-0 left-0 h-full w-full rounded-3xl bg-cover bg-center"
            :style="{ backgroundImage: `url(${program.image})` }"
          />
  
          <!-- Type badge -->
          <div class="absolute top-[17px] left-0">
            <div class="absolute top-[5px] left-[21px] h-[37px] w-[91px]">
              <div
                :class="`relative inline-flex flex-col items-start gap-2.5 py-2.5 pr-4 pl-2.5 ${program.typeClass} rounded-[0px_25px_25px_0px]`"
              >
                <div
                  class="relative inline-flex flex-[0_0_auto] items-center gap-3"
                >
                  <div class="relative mt-[-1.00px] w-fit text-xs font-bold">
                    {{ program.type }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Content -->
          <div
            class="absolute top-[71px] left-[39px] flex w-[248px] flex-col items-start gap-4"
          >
            <div
              class="relative flex w-full flex-col items-start gap-2 self-stretch"
            >
              <h3
                class="relative mt-[-1.00px] self-stretch text-lg font-bold text-[#1a1a1a] opacity-80"
              >
                {{ program.title }}
              </h3>
              <p class="relative self-stretch text-sm text-gray-600">
                {{ program.description }}
              </p>
            </div>
            <div class="relative flex w-full items-center gap-2 self-stretch">
              <span
                class="relative mt-[-1.00px] w-fit text-base font-medium whitespace-nowrap text-[var(--button-color)]"
              >
                Lihat Detail
              </span>
              <UIcon
                name="i-heroicons-arrow-right"
                class="h-4 w-4 text-[var(--button-color)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    program: {
      type: Object,
      required: true,
    },
  })
  </script>
  