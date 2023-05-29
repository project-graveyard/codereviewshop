<script setup>
import { ref } from 'vue'

const curDate = ref(new Date().getFullYear())
</script>

<template>
  <div class="footer text-center">
    <span>&copy; 2023 {{ !(2023 === curDate) ? '- ' + curDate : '' }} CodeReviewShop</span>
  </div>
</template>

<style>
.footer {
  background-color: #c2bdbd;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 15px;
}
</style>
