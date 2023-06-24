<script setup>
const values = [
  { name: "Patience", desc: "", icon: ["fas", "heart"], color: "text-red-600" },
  {
    name: "Curiosity",
    desc: "",
    icon: ["fas", "person-hiking"],
    color: "text-amber-600",
  },
  {
    name: "Growth mindset",
    desc: "",
    icon: ["fas", "seedling"],
    color: "text-green-600",
  },
  {
    name: "Community",
    desc: "",
    icon: ["fas", "people-group"],
    color: "text-black",
  },
  {
    name: "Respect",
    desc: "",
    icon: ["fas", "handshake-simple"],
    color: "text-slate-600",
  },
  {
    name: "Teachableness",
    desc: "",
    icon: ["fas", "hand-holding-heart"],
    color: "text-indigo-600",
  },
];
</script>

<template>
  <div
    class="h-64 w-full text-center flex flex-col text-white justify-center items-center bg-[url(/aboutImg.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <h1 class="text-3xl sm:text-5xl font-semibold p-3">
      The CodeReviewShop Story
    </h1>
    <p class="p-3 italic text-md">Better software is built together</p>
  </div>
  <div class="py-4 px-2 container">
    <div><p>At CodeReviewShop, we believe</p></div>
  </div>
</template>
