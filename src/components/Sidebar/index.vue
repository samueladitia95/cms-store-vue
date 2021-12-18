<template>
  <div
    class="bg-gray-50 min-h-full w-72 transform transition duration-200 ease-in-out fixed top-0"
    :class="{ '-translate-x-full': sidebarClass }"
  >
    <p>This is Sidebar</p>

    <button
      class="hover:bg-gray-100 rounded-full p-2 duration-100 sm:hidden"
      @click="toggleSidebar"
    >
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">import { computed, ComputedRef } from "vue";
import { useStore } from "../../store";

export default {
  name: "Sidebar",
  setup() {
    const { state, commit } = useStore();

    //! Methods
    const toggleSidebar = (): void => commit("SET_IS_SIDEBAR_OPEN", false);

    //! Computed
    const sidebarClass: ComputedRef<boolean> = computed((): boolean => !state.isSidebarOpen);

    return {
      sidebarClass,
      toggleSidebar
    };
  }
};
</script>