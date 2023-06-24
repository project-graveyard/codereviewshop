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
  <div class="py-6 px-4 container lg:w-1/2">
    <div>
      <h1 class="text-4xl font-mono py-2">Present Day</h1>
      <p class="text-lg">
        CodeReviewShop was originally started to handle the increasing requests
        to assist my colleagues and friends in programing related courses.
        CodeReviewShop is the meduim I chose to use to share what I have learnt
        with other students. We do this by guiding the thought process of
        students to identify and solve any issues they may face in their
        software engineering journey.
      </p>
    </div>
    <div>
      <h1 class="text-4xl font-mono py-2">Prospective Future</h1>
      <p class="text-lg">
        We wish ti expand to high schools and organise workshops for students to
        build their problem solving skills and mentor those who want to pursue a
        career in software.
      </p>
    </div>
    <div>
      <h1 class="text-4xl font-mono py-2">Values</h1>
      <div
        class="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 justify-start items-start"
      >
        <div v-for="item in values">
          <div class="flex text-2xl items-center justify-center">
            <font-awesome-icon
              :icon="item.icon"
              :class="['mr-2 ', item.color]"
            />
            <p>{{ item.name }}</p>
          </div>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
