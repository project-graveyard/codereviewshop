<script setup>
import { RouterLink } from 'vue-router'
// import { ref } from 'vue'

// const windowWidth = ref(window.innerWidth)
</script>

<template>
  <nav class="navbar navbar-dark navbar__bg py-2 text-white sticky-top">
    <div class="container">
      <!-- Title -->
      <div class="d-flex align-items-center">
        <svg width="75" height="70" class="navbar__logo">
          <image href="/logo.svg" width="70" height="70" />
        </svg>
        <h2 class="display-6">Code Review Shop</h2>
      </div>

      <!-- Nav links toggler -->
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar">
          <div class="navbar-toggler-icon"></div>
        </button>
        
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">

          <!-- Offcanvas header -->
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <div class="d-flex align-items-center me-3">
                <svg width="35" height="30">
                  <image href="/logo.svg" width="30" height="30" />
                </svg>
                Code Review Shop
              </div>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>

          <!-- Offcanvas body -->
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/services">Services</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About Us</RouterLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://codereviewblog.web.app" target="_blank" rel="noreferrer">Blog</a>
              </li>
            </ul>
          </div>


        </div>
      </div>


      <!-- Full nav links -->
      <!-- <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-content-lg-start">
        <div class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-center">
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
        </div>
      </div> -->
    </div>
  </nav>
</template>

<style scoped>
.navbar__bg {
  background-color: #212529 !important;
}

.navbar__icon {
  font-size: 1.5rem;
}

/* Alter navbar when elements overflow to more than one line */
@media only screen and (max-width: 1000px) {

  html,
  body {
    width: auto;
  }

  /* reduce logo scale on medium screens */
  .navbar__logo {
    transform: scale(.8);
  }
}

/* remove logo for very small screens */
@media only screen and (max-width: 390px) {

  html,
  body {
    width: auto;
  }

  .navbar__logo {
    display: none;
  }
}
</style>
