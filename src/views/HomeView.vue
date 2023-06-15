<script setup>
import { RouterLink } from "vue-router";
import CardItem from "../components/CardItem.vue";

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
  <h1>This is the Homepage</h1>
</template>
