<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterSection.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
  <Footer />
</template>
