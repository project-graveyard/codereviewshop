<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const navItems = ref([
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false },
  { name: "About Us", href: "/about", current: false },
]);

function toggleState(item) {
  // set other nav links state to false and set selected nav link state to true
  navItems.value.forEach((element) => {
    item != element ? (element.current = false) : (element.current = true);
  });
}
</script>

<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <div class="sr-only">Open main menu</div>
            <!-- <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" /> -->
            <font-awesome-icon
              v-if="!open"
              :icon="['fas', 'bars']"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <!-- <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" /> -->
            <font-awesome-icon
              v-else
              :icon="['fas', 'xmark']"
              aria-hidden="true"
              class="block h-6 w-6"
            />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex sm:flex-grow items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="/logo.svg"
              alt="CodeReviewShop"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/logo.svg"
              alt="CodeReviewShop"
            />
            <h3 class="text-white px-2 font-semibold">Code Review Shop</h3>
          </div>

          <!-- Default Navbar view -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navItems"
                @click="toggleState(item)"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-semibold',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
              <a
                href="https://codereviewblog.web.app"
                target="_blank"
                @click="toggleState(null)"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
                aria-current="undefined"
                >Blog</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu view -->
    <DisclosurePanel class="sm:hidden" v-slot="{ close }">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navItems"
          @click="
            toggleState(item);
            close(ref);
          "
          :key="item.name"
          :as="RouterLink"
          :to="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
        <a
          @click="
            toggleState(null);
            close(ref);
          "
          target="_blank"
          href="https://codereviewblog.web.app"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="undefined"
          >Blog</a
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
