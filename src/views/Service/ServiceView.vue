<script setup>
import CodeReviewSection from './CodeReviewSection.vue';
import WalkthroughSection from './WalkthroughSection.vue';
import MentorshipSection from './MentorshipSection.vue';
</script>

<template>
  <div class="pt-8 container px-4 lg:w-3/4 2xl:w-1/2">
    <h1 class="text-center text-5xl mb-3">Book a session with us today</h1>
    <CodeReviewSection />
    <WalkthroughSection />
    <MentorshipSection />
    <div class="text-lg text-center my-8 mx-3">
      <p>
        If you like to support our mission, kindly reach out to us via
        <a href="mailto:codereviewshop@gmail.com" class="text-blue-900">email</a
        >.
      </p>
    </div>
  </div>
</template>
