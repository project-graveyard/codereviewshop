<script setup>
defineProps({
  title: String,
  info: String,
  img: String,
  time: String,
  month: String,
  day: String,
})
</script>

<template>
  <div class="py-4">
    <div class="mx-auto h-fit flex items-center justify-center px-8">
      <div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div class="w-full h-64 bg-top bg-cover rounded-t add-img">
        </div>
        <div class="flex flex-col w-full md:flex-row">
          <div
            class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div class="md:text-3xl">{{ month }}</div>
            <div class="md:text-6xl">{{ day }}</div>
            <div class="md:text-xl">{{ time }}</div>
          </div>
          <div class="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{{ title }}</h1>
            <p class="leading-normal">{{ info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-img {
  background-image: v-bind(img);
}
</style>
