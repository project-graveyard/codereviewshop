<script setup>
/*
 * Bundles 
 * Walkthroough Session 
 *    Navigating Github(Pushing, pulling, commiting, how to keep up a good streak for code interview etc)
 *    Assignment Review
 *    Code debugging
 *    Technical Requirement analysis for software project
 *
 *Semester-wide Tutoring Session
      Git(Version control)
      foundational programming concepts(Understanding Data structures, Algorithms)
*     Software Development Life Cycle(Key to every project success)
*     Become a command line pro
 */
const service_list = [
  {
    heading: "Code Review Session",
    options: ["Java", "Python", "SQL", "HTML/CSS", "Golang"],
    link: "https://cal.com/codereviewshop/meet",
    tier: "free",
  },
  {
    heading: "Walkthrough Session",
    options: [
      "Navigating Github",
      "Work on my first open source issue",
      "Publish my code to github",
      "Deploy my website (Make it available on the internet)",
      "Consultation on a project design",
      "Assignment review & pair programming",
    ],
    link: "https://cal.com/codereviewshop/walkthrough",
    tier: "paid",
  },
  {
    heading: "Tutoring Session",
    options: [
      "Learn version control systems using git",
      "Learn the linux command line",
      "Learn programming fundamentals",
    ],
    link: "https://cal.com/codereviewshop/tutoring",
    tier: "paid",
  },
];
</script>

<template>
  <div class="pt-8 container px-4 lg:w-3/4 2xl:w-1/2">
    <h1 class="text-center text-5xl mb-3">Book a session with us today</h1>
    <div v-for="service in service_list">
      <div class="flex items-center text-center">
        <h1 class="text-3xl text-slate-700 mt-6">
          {{ service.heading }}
        </h1>
        <span class="text-red-600 text-md">{{ service.tier }}</span>
      </div>
      <ul class="py-2 ml-8 list-disc leading-9 text-lg">
        <li v-for="item in service.options">{{ item }}</li>
      </ul>
      <div class="container my-2">
        <div class="text-center">
          <a :href="service.link" target="_blank" rel="noreferrer">
            <button
              class="bg-blue-600 text-white py-3 px-16 text-lg font-semibold rounded-lg"
            >
              Book
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="text-lg text-center my-8 mx-3">
      <p>
        If you like to have a custom tutoring session, kindly reach out to us
        via
        <a href="mailto:codereviewshop@gmail.com" class="text-blue-900">email</a
        >.
      </p>
    </div>
  </div>
</template>
