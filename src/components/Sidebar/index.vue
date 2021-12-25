<template>
  <div class="md:static">
    <!-- Black Shadow -->
    <div
      class="bg-black opacity-40 fixed h-full w-screen top-0 left-0 md:hidden md:static z-10"
      :class="{ 'hidden': sidebarClass }"
      @click="toggleSidebar"
    ></div>
    
    <div
      class="flex flex-col bg-gray-50 min-h-full w-72 h-1 p-4 z-40 overflow-y-auto transform transition duration-200 ease-in-out fixed top-0 md:transform-none"
      :class="{ '-translate-x-full': sidebarClass }"
    >
      <!-- Header -->
      <div class="flex justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-1">
          <svg-logo
            :size="10"
            logo="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            class="text-orange-400"
          />
          <span class="text-2xl font-medium">StoreCMS</span>
        </div>

        <!-- Close Button -->
        <button-logo @click="toggleSidebar" logo="M6 18L18 6M6 6l12 12" class="md:hidden" />
      </div>

      <!-- Navigation + Footer -->
      <div class="flex flex-col flex-1 space-y-4 justify-around">
        <!-- Navigation -->
        <div class="flex-1 flex flex-col space-y-2 pt-4">
          <nav-item v-for="navigation in navigations" :navigation="navigation" />
        </div>

        <hr />

        <!-- Footer -->
        <div class="flex flex-col space-y-2">
          <p class="font-light mb-1">Powered by</p>
          <div class="flex flex-col space-y-2">
            <div class="flex space-x-3">
              <svg-logo
                logo="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
              />
              <p>Samuel</p>
            </div>
            <div class="flex space-x-3">
              <svg-logo
                logo="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
              <p>samueladitia95</p>
            </div>
            <div class="flex space-x-3">
              <svg-logo
                logo="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
              <p>vortexhack8</p>
            </div>
          </div>

          <!-- Social Media Link -->
          <div class="flex space-x-3 pt-2">
            <svg-logo
              logo="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            <svg-logo
              logo="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
            <svg-logo
              logo="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </div>
          <p class="text-xs">© Vortex 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { useStore } from "../../store";
import { Navigation } from "./interface";

import ButtonLogo from "../ButtonLogo/index.vue";
import SvgLogo from "../SvgLogo/index.vue";
import NavItem from "./subComponents/NavItem.vue"

export default defineComponent({
  name: "Sidebar",
  components: {
    SvgLogo,
    ButtonLogo,
    NavItem
  },
  setup() {
    const { state, commit } = useStore();

    //! Data
    const navigations: Navigation[] = [
      {
        category: "Dashboard",
        link: "/dashboard",
        logo: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        category: "Store",
        logo: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
        children: [
          {
            label: "Orders",
            link: "/orders"
          },
          {
            label: "Spare Parts",
            link: "/spare-parts",
            secondaryLink: "/spare-parts/add"
          },
          {
            label: "Category",
            link: "/category",
            secondaryLink: "/category/add"
          }
        ]
      },
      {
        category: "Setting",
        logo: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        children: [
          {
            label: "Users",
            link: "/users",
            secondaryLink: "/users/add"
          }
        ]
      }
    ];

    //! Methods
    const toggleSidebar = (): void => commit("SET_IS_SIDEBAR_OPEN", false);

    //! Computed
    const sidebarClass: ComputedRef<boolean> = computed((): boolean => !state.isSidebarOpen);

    return {
      sidebarClass,
      toggleSidebar,
      navigations
    };
  },
});
</script>