<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterSection.vue";
import ConsentDialog from "./components/ConsentDialog.vue";
</script>

<template>
  <ConsentDialog />
  <header>
    <Navbar />
    <div class="container">
      <RouterView />
    </div>
  </header>
  <Footer />
</template>

<style scoped></style>
