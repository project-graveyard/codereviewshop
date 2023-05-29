<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="px-3 py-1 nav__bg text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-content-lg-start">
        <span class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white">
          <svg width="85" height="75" class="logo-img">
            <image href="/logo.svg" width="75" height="75" />
          </svg>
          <h2 class="display-6">Code Review Shop</h2>
        </span>
        <nav class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-center">
          <RouterLink to="/" class="nav-link text-white"><i
              class="d-block mx-auto mb-1 bi bi-house-fill navbar__icon"></i>Home</RouterLink>
          <RouterLink to="/services" class="nav-link text-white">
            <i class="d-block mx-auto mb-1 bi bi-cart-fill navbar__icon"></i>Services
          </RouterLink>
          <RouterLink to="/about" class="nav-link text-white">
            <i class="d-block mx-auto mb-1 bi bi-info-circle navbar__icon"></i>About Us
          </RouterLink>
          <a href="https://codereviewblog.web.app" target="_blank" class="nav-link text-white" rel="noreferrer">
            <i class="d-block mx-auto mb-1 bi bi-pencil-square navbar__icon"></i>Blog</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style></style>
