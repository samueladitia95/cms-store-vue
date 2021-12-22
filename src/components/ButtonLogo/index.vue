<template>
  <button class="hover:bg-gray-100 rounded-full p-2 duration-100 sm:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="sizeClass"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="logo" />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "ButtonLogo",
  props: {
    size: {
      type: Number,
      required: false,
      default: 6
    },
    logo: {
      type: String,
      required: true
    }
  },
  setup({ size, logo }) {
    const sizeClass: Ref<string> = ref(`h-${size} w-${size}`);
    return {
      sizeClass,
      logo
    };
  }
});

</script>