<script setup></script>

<template>
  <div class="py-8 container px-4 lg:w-3/4 2xl:w-1/2">
    <h1 class="text-center text-5xl pb-3">Book a session with us today</h1>
    <h3 class="text-2xl font-mono text-slate-700">
      Find out if Code Review Shop is a fit for you:
    </h3>
    <ul class="py-2 ml-8 list-item list-disc leading-9 text-lg">
      <li>
        I am learning a new language at school and things are not quite clear.
      </li>
      <li>
        I have a school project and it's open ended. What technologies do you
        recommend for me or my team?
      </li>
      <li>
        I am exploring one of the technologies listed on the homepage and I
        wanted to learn more.
      </li>
      <li>I want to practice problem solving.</li>
      <li>Version control and github looks cool. How can I get started?</li>
      <li>I know something about git. Wanted to learn more advanced uses.</li>
      <li>I just installed linux. Directions please.</li>
      <li>I want to start a project. Can I get supervision?</li>
    </ul>

    <h2 class="text-center my-3 text-4xl font-mono">Timeline</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <div>
        <p
          class="text-center text-xl bg-blue-600 py-2.5 text-white rounded-t-lg"
        >
          30-minute session
        </p>
        <div class="border-x border-b rounded-b-lg px-2 py-2 border-blue-500">
          <ul class="list-item list-disc leading-9 text-xl h-60 ml-7">
            <li>Project supervision check-in.</li>
            <li>
              General consulting. E.g. Guide on handling challenging
              assignments.
            </li>
          </ul>
          <div class="mt-auto">
            <a href="#"
              ><p
                class="mx-20 py-3 bg-blue-600 text-center rounded-md font-semibold text-white"
              >
                Book
              </p></a
            >
          </div>
        </div>
      </div>
      <div>
        <p
          class="text-center text-xl bg-blue-600 py-2.5 text-white rounded-t-lg"
        >
          45-minute session
        </p>
        <div class="border-x border-b rounded-b-lg px-2 py-2 border-blue-500">
          <ul class="list-item list-disc leading-9 text-xl h-60 ml-7">
            <li>Practice problem solving.</li>
            <li>Learn more about tools you already use.</li>
            <li>Setup linux for software development.</li>
          </ul>
          <div class="mt-auto">
            <a href="#"
              ><p
                class="mx-4 py-3 bg-blue-600 text-center rounded-md font-semibold text-white"
              >
                Book
              </p></a
            >
          </div>
        </div>
      </div>
      <div>
        <p
          class="text-center text-xl bg-blue-600 py-2.5 text-white rounded-t-lg"
        >
          1 hour session
        </p>
        <div class="border-x border-b rounded-b-lg px-2 py-2 border-blue-500">
          <ul class="list-item list-disc leading-9 text-xl h-60 ml-7">
            <li>I am new to programming.</li>
            <li>I want to learn a new tool.</li>
          </ul>
          <div class="mt-auto">
            <a href="#"
              ><p
                class="mx-4 py-3 bg-blue-600 text-center rounded-md font-semibold text-white"
              >
                Book
              </p></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="text-lg text-center">
      <p>
        * The services listed under each block is a guide. You are free to pick
        a time that suits you.
      </p>
      <p>
        If you like to support our mission, kindly reach out to us via
        <a href="mailto:codereviewshop@gmail.com" class="text-blue-900">email</a
        >.
      </p>
    </div>
  </div>
</template>
