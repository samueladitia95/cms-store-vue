<template>
  <div class="font-display">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar/index.vue";
export default {
  name: "App",
  components: { Navbar }
}
</script>

<style></style>
