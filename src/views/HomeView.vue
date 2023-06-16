<script setup>
import { RouterLink } from "vue-router";
import CardItem from "../components/CardItem.vue";
import FeedbackForm from "../components/FeedbackForm.vue";

const langs_and_tools = [
  {
    title: "Java",
    color: "text-red-800",
    icon: ["fab", "java"],
  },
  {
    title: "Python",
    color: "text-yellow-600",
    icon: ["fab", "python"],
  },
  {
    title: "HTML5",
    color: "text-red-600",
    icon: ["fab", "html5"],
  },
  {
    title: "CSS3",
    color: "text-blue-600",
    icon: ["fab", "css3-alt"],
  },
  {
    title: "Terminal",
    color: "text-black-600",
    icon: ["fas", "terminal"],
  },
  {
    title: "Git",
    color: "text-red-600",
    icon: ["fas", "code-branch"],
  },
  {
    title: "Github",
    color: "text-black-600",
    icon: ["fab", "github"],
  },
];
</script>

<template>
  <div class="py-8 px-2">
    <!-- Welcome msg section -->
    <div
      class="flex flex-row md:gap-x-2.5 items-center md:justify-center lg:w-3/4 md:container"
    >
      <div class="px-4 md:w-1/2 md:pl-1 md:px-0">
        <h1 class="text-5xl">
          Better Software <br />
          is Built Together.
        </h1>
        <p class="mt-3 mb-5 text-lg 2xl:w-1/2">
          We help students grow with a solid foundation of the concepts and
          tools needed to be a thriving software engineer.
        </p>
        <RouterLink
          to="/about"
          class="bg-blue-200 hover:bg-blue-500 rounded-3xl hover:text-white px-4 py-2"
          >LEARN MORE</RouterLink
        >
      </div>
      <div class="hidden md:inline">
        <img
          alt="pair programming"
          src="/home.jpg"
          class="object-contain w-[450px] rounded-xl"
        />
      </div>
    </div>
    <!-- Add languages & tools section -->
    <div
      class="mt-6 flex flex-col md:flex-row items-center justify-center md:container md:pr-5"
    >
      <h1 class="text-center text-3xl mb-3 md:pr-10">Languages & Tools</h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:gap-x-8 md:grid-cols-3 xl:grid-cols-4"
      >
        <div v-for="item in langs_and_tools">
          <CardItem
            :title="item.title"
            :about="item.about"
            :color="item.color"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
    <!-- insert feedback form -->
    <FeedbackForm />
  </div>
</template>
