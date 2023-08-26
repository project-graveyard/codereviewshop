<script setup>
import FeedbackForm from "../../components/Home/FeedbackForm.vue";
import WelcomeMsgSection from "./WelcomeMsgSection.vue";
import LanguageToolsSection from "./LanguageToolsSection.vue";
</script>

<template>
  <div class="py-8 px-2">
    <!-- Welcome msg section -->
    <WelcomeMsgSection />

    <!-- Add languages & tools section -->
    <LanguageToolsSection />

    <!-- insert feedback form -->
    <FeedbackForm />
  </div>
</template>
