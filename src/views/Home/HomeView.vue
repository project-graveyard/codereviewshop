<script setup>
import FeedbackForm from "./FeedbackForm.vue";
import WelcomeMsgSection from "./WelcomeMsgSection.vue";
import SessionInfo from "./SessionInfo.vue";
import LanguageToolsSection from "./LanguageToolsSection.vue";
</script>

<template>
  <div class="py-8 px-2">
    <!-- Welcome msg section -->
    <WelcomeMsgSection />

    <!-- Add languages & tools section -->
    <LanguageToolsSection />

    <!--Add past workshops sessions -->
    <SessionInfo />

    <!-- insert feedback form -->
    <FeedbackForm />
  </div>
</template>
