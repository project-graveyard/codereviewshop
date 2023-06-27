<script setup>
const values = [
  {
    name: "Patience",
    desc: "The capacity to tolerate delay without becoming annoyed or anxious easily. Things may not always go our way, but our response impacts the future outcome.",
    icon: ["fas", "heart"],
    color: "text-red-600",
  },
  {
    name: "Curiosity",
    desc: "A path of discovery and openness to learn something. Relevance in our industry requires consistent upskilling; those with the desire to learn are those who remain.",
    icon: ["fas", "person-hiking"],
    color: "text-amber-600",
  },
  {
    name: "Growth mindset",
    desc: "Skills are not immutable; they can be improved through consistent practice and discipline. Learning is a life-long journey.",
    icon: ["fas", "seedling"],
    color: "text-green-600",
  },
  {
    name: "Community",
    desc: "If you want to go fast, go alone; if you want to go far, go with people. We encourage active partipation in communities, whether local or global.",
    icon: ["fas", "people-group"],
    color: "text-black",
  },
  {
    name: "Respect",
    desc: "Everyone has value regardless of differences or beliefs. Treat others the way you want to be treated.",
    icon: ["fas", "handshake-simple"],
    color: "text-slate-600",
  },
  {
    name: "Teachableness",
    desc: "Lessons and inspirations can come from unexpected places. Be willing to teach and learn from others.",
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
  <div class="pt-6 pb-8 px-4 container lg:w-3/4 2xl:w-1/2">
    <div>
      <h1 class="text-4xl font-mono py-2">Present Day</h1>
      <p class="text-lg">
        CodeReviewShop was originally started to handle the increasing requests
        to assist my colleagues and friends in programing related courses.
        CodeReviewShop is the medium I chose to share what I have learnt with
        other students. We do this by guiding the thought process of students to
        identify and solve any issues they may face in their software
        engineering journey.
      </p>
    </div>
    <div>
      <h1 class="text-4xl font-mono py-2">Prospective Future</h1>
      <p class="text-lg">
        We plan to expand to high schools and organise workshops for students to
        build their problem solving skills and mentor those who want to pursue a
        career in software.
      </p>
    </div>
    <div>
      <h1 class="text-4xl font-mono py-2">Values</h1>
      <div
        class="pt-3 grid grid-cols-1 mx-4 sm:grid-cols-2 gap-5 justify-start items-start"
      >
        <div v-for="item in values">
          <div class="flex text-2xl items-center">
            <font-awesome-icon
              :icon="item.icon"
              :class="['mr-2 ', item.color]"
            />
            <p>{{ item.name }}</p>
          </div>
          <p class="text-lg">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
