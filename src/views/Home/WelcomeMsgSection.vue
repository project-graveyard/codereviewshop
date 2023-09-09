<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="flex flex-row md:gap-x-2.5 items-center md:justify-center lg:w-3/4 md:container"
  >
    <div class="px-4 md:w-1/2 md:pl-1 md:px-0">
      <h1 class="text-5xl">
        Better Software <br />
        is Built Together.
      </h1>
      <p class="mt-3 mb-5 text-lg 2xl:w-1/2">
        We help students grow with a solid foundation of the concepts and tools
        needed to be a thriving software engineer.
      </p>
      <RouterLink
        to="/about"
        class="bg-blue-200 hover:bg-blue-500 rounded-3xl hover:text-white px-4 py-2"
        aria-label="about"
        >LEARN MORE</RouterLink
      >
    </div>
    <div class="hidden md:inline">
      <img
        alt="pair programming"
        src="/home.jpg"
        class="object-contain w-[450px] rounded-xl"
      />
    </div>
  </div>
</template>
