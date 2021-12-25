<template>
  <div class="font-display md:flex">
    <sidebar />
    <div class="md:absolute md:left-72 md:top-0">
      <navbar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style></style>
