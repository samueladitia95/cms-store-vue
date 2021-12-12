<template>
  <nav :class="navbarClass">
    <div class="px-6 py-2 mx-auto flex justify-between">
      <div class="flex content-center items-center">
        <!--Sidebar button mobile only-->
        <button class="hover:bg-gray-100 rounded-full p-2 duration-100 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <span class="text-2xl font-medium">StoreCMS</span>
        </div>
      </div>
      <div class="px-1">
        <img src="../../assets/avatar.png" class="w-12 h-12 rounded-full cursor-pointer" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { onMounted, onUnmounted, Ref, ref, computed, ComputedRef } from "vue";

export default {
  name: "Navbar",
  setup() {
    const isTop: Ref<boolean> = ref<boolean>(true);

    const test = (): void => {
      const newValue: boolean = window.scrollY === 0;
      if (isTop.value !== newValue) {
        isTop.value = newValue;
      }
    };

    onMounted((): void => {
      document.addEventListener("scroll", test);
    });

    onUnmounted((): void => {
      document.removeEventListener("scroll", test);
    });

    const navbarClass: ComputedRef<string> = computed((): string => {
      let fixedClass = "sticky top-0 bg-white ";
      fixedClass += !isTop.value ? "border-b-2 border-orange-400" : "";
      return fixedClass;
    });

    return {
      navbarClass
    };
  }
};
</script>
