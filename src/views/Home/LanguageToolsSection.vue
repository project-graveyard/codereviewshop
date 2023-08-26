<script setup>
import CardItem from "../../components/Home/CardItem.vue";

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
</template>
