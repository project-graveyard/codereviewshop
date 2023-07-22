<script setup>
import { ref } from "vue";

const curDate = ref(new Date().getFullYear());
</script>

<template>
  <footer
    class="sm:flex inline-block bg-orange-100 flex-col w-full h-max justify-center items-center text-center py-4"
  >
    <div>
      &copy; 2023
      {{ !(2023 === curDate) ? "- " + curDate : "" }} CodeReviewShop
    </div>

    <div
      class="flex sm:flex-row flex-col justify-around items-center p-4 mx-auto my-0 w-full max-w-7xl"
    >
      <div class="w-full text-center mb-3">
        <p class="text-xl">Contact Us</p>
        <a href="mailto:codereviewshop@gmail.com">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="text-red-600 text-lg"
          />
          codereviewshop@gmail.com</a
        >
      </div>

      <div
        class="flex flex-row justify-center gap-5 my-0 mx-10 w-full max-w-7xl"
      >
        <a
          href="https://www.linkedin.com/company/codereviewshop/"
          target="_blank"
          rel="noreferrer"
          ><font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="text-blue-600 text-xl"
          />
        </a>
        <a
          href="https://github.com/CodeReviewShop"
          target="_blank"
          rel="noreferrer"
          ><font-awesome-icon :icon="['fab', 'github']" class="text-xl"
        /></a>
      </div>
    </div>
  </footer>
</template>
