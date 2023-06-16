<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const msg = ref("");
const clicked = ref(false);
const checked = ref(false);
const db = ref(feedbackDB);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function sendMsg(e) {
  // prevent default behaviour of form submission
  e.preventDefault();

  console.log("name: ", name.value);
  console.log("email: ", email.value);
  console.log("msg: ", msg.value);
  console.log("clicked: ", clicked.value);

  // clear the input fields
  name.value = "";
  email.value = "";
  msg.value = "";

  // prevent default behaviour of form submission
  e.preventDefault();

  // disable toast after 5 secs
  await sleep(5000);
  clicked.value = !clicked.value;
}
</script>

<template>
  <div
    class="mt-6 flex flex-col items-center justify-center md:container md:pr-5"
  >
    <div class="px-4">
      <h1 class="text-3xl mb-3 text-center">Write to us</h1>
      <p class="mb-3 text-lg">
        Do you have any questions or suggestions for CodeReviewShop?<br />
        Would you like to share how CodeReviewShop has impacted you?
      </p>
    </div>
    <!-- form -->
    <form @submit="sendMsg" method="post">
      <div>
        <div
          class="flex md:flex-row flex-col gap-x-5 items-center justify-center"
        >
          <div class="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              class="mb-3 p-2 rounded-md border-2 border-gray-400 accent-gray-500 shadow-md"
              v-model.lazy="name"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              class="mb-3 p-2 rounded-md border-2 border-gray-400 accent-gray-500 shadow-md"
              v-model.lazy="email"
              required
            />
            <div class="mb-3">
              <input
                type="checkbox"
                name="isSuggestion"
                class="mr-1"
                v-model="checked"
                @click="togggleDB"
              />
              <label for="isSuggestion">Is your message a suggestion?</label>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Write your feedback/suggestion"
              class="rounded-md h-40 w-60 md:w-96 p-2 border-2 border-gray-400 accent-gray-500 shadow-md"
              v-model.lazy="msg"
              required
            />
          </div>
        </div>
        <div class="mt-5 grid place-items-center">
          <input
            type="submit"
            value="Submit"
            class="bg-blue-200 rounded-lg py-2 px-28 hover:bg-blue-500 hover:text-white"
          />
        </div>
      </div>
    </form>
    <!-- success toast -->
    <div
      v-if="clicked"
      class="fixed right-8 bottom-8 px-5 py-3 border-r-8 border-green-500 bg-green-100 drop-shadow-lg"
    >
      <p class="text-sm">
        <font-awesome-icon
          class="mr-2 text-green-800"
          :icon="['far', 'circle-check']"
        />
        Message sent successfully!
      </p>
    </div>
  </div>
</template>
