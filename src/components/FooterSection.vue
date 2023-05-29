<script setup>
import { ref } from 'vue'

const curDate = ref(new Date().getFullYear())
</script>

<template>
  <div class="footer text-center">
    <span>&copy; 2023 {{ !(2023 === curDate) ? "- " + curDate : "" }} CodeReviewShop</span>
  </div>
</template>

<style></style>
