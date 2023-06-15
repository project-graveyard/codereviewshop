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
  </header>
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>
