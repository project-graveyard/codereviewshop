<script setup></script>

<template>
  <div class="pt-8 container px-4 lg:w-3/4 2xl:w-1/2">
    <h1 class="text-center text-5xl mb-3">Book a session with us today</h1>
    <h1 class="text-3xl text-slate-700 mt-6">
      Find out if Code Review Shop is a fit for you:
    </h1>
    <ul class="py-2 ml-8 list-disc leading-9 text-lg">
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
  </div>

  <div class="container mt-6">
    <h1 class="text-center text-3xl mb-3">Timeline</h1>
    <div
      class="w-3/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 container"
    >
      <div>
        <p class="text-center text-xl bg-blue-600 py-4 text-white rounded-t-lg">
          30-minute session
        </p>
        <div
          class="flex flex-col items-center border-x border-b rounded-b-lg px-2 py-2 border-blue-500 md:h-72 h-max"
        >
          <ul class="list-disc leading-9 text-xl ml-7 grow">
            <li>Project supervision check-in.</li>
            <li>
              General consulting. E.g. Guide on handling challenging
              assignments.
            </li>
          </ul>
          <a href="#"
            ><p
              class="py-3 mb-2 mt-3 px-10 bg-blue-600 text-center rounded-md font-semibold text-white"
            >
              Book
            </p></a
          >
        </div>
      </div>
      <div>
        <p class="text-center text-xl bg-blue-600 py-4 text-white rounded-t-lg">
          45-minute session
        </p>
        <div
          class="flex flex-col items-center border-x border-b rounded-b-lg px-2 py-2 border-blue-500 md:h-72 h-max"
        >
          <ul class="list-disc leading-9 text-xl ml-7 grow">
            <li>Practice problem solving.</li>
            <li>Learn more about tools you already use.</li>
            <li>Setup linux for software development.</li>
          </ul>
          <a href="#"
            ><p
              class="py-3 px-10 bg-blue-600 text-center rounded-md font-semibold text-white"
            >
              Book
            </p></a
          >
        </div>
      </div>
      <div>
        <p class="text-center text-xl bg-blue-600 py-4 text-white rounded-t-lg">
          1-hour session
        </p>
        <div
          class="flex flex-col items-center border-x border-b rounded-b-lg px-2 py-2 border-blue-500 h-56 lg:h-72"
        >
          <ul class="list-disc leading-9 text-xl ml-3 2xl:ml-0 grow">
            <li>I am new to programming.</li>
            <li>I want to learn a new tool.</li>
          </ul>
          <a href="#"
            ><p
              class="py-3 px-10 bg-blue-600 text-center rounded-md font-semibold text-white"
            >
              Book
            </p></a
          >
        </div>
      </div>
    </div>
    <div class="text-lg text-center my-8 mx-3">
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
