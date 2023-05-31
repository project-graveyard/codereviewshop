<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="md:container md:mx-auto py-24 text-center">
        <p class="text-base font-semibold text-blue-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p class="mt-6 mb-8 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <RouterLink to="/" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white">
            Go back home
        </RouterLink>
    </div>
</template>