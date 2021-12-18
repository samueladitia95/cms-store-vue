<template>
  <div class="font-display">
    <Navbar />
    <Sidebar />
    <router-view />
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
