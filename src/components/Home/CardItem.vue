<script setup>
defineProps({
  title: String,
  color: String,
  icon: String[2],
});
</script>

<template>
  <div
    class="inline-flex w-[200px] flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <div
      class="relative m-4 flex h-40 flex-col justify-between rounded-lg bg-gray-200 p-4 shadow"
    >
      <div class="z-10">
        <h3 class="font-bold mb-2 text-lg">{{ title }}</h3>
      </div>
      <div class="absolute right-5 top-10 text-8xl backdrop-blur">
      <font-awesome-icon :icon="icon" :class="color" />
      </div>
    </div>
  </div>
</template>
