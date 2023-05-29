<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> | 
    <RouterLink to="/services">Services</RouterLink>
  </nav>
  <RouterView />
</template>

<style></style>
