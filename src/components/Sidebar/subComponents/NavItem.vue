<template>
  <div>
    <!-- Category -->
    <span class="font-medium">
      <span v-if="navigation.link" class="flex justify-between p-1 hover:bg-gray-200 rounded">
        <router-link :to="navigation.link" class="flex space-x-2 items-center">
          <svg-logo :logo="navigation.logo" />
          <p>{{ navigation.category }}</p>
        </router-link>
        <router-link v-if="navigation.secondaryLink" :to="navigation.secondaryLink">
          <svg-logo logo="M12 4v16m8-8H4" />
        </router-link>
      </span>

      <span v-else class="flex justify-between p-1">
        <a class="flex space-x-2 items-center">
          <svg-logo :logo="navigation.logo" />
          <p>{{ navigation.category }}</p>
        </a>
        <router-link v-if="navigation.secondaryLink" :to="navigation.secondaryLink">
          <svg-logo logo="M12 4v16m8-8H4" :size="5" />
        </router-link>
      </span>
    </span>

    <!-- Sub-Category -->
    <span v-if="navigation.children" class="flex flex-col space-y-1 mt-1">
      <span
        v-for="navChild in navigation.children"
        class="pl-5 hover:bg-gray-200 rounded flex justify-between p-1"
      >
        <router-link :to="navChild.link">
          <p class="text-sm">{{ navChild.label }}</p>
        </router-link>

        <router-link v-if="navChild.secondaryLink" :to="navChild.secondaryLink">
          <svg-logo logo="M12 4v16m8-8H4" :size="5" />
        </router-link>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Navigation } from "../interface";
import ButtonLogo from "../../ButtonLogo/index.vue";
import SvgLogo from "../../SvgLogo/index.vue";

export default defineComponent({
  name: "NavItem",
  components: {
    ButtonLogo,
    SvgLogo
  },
  props: {
    navigation: {
      type: Object as PropType<Navigation>,
      required: true
    }
  },
})
</script>