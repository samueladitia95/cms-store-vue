<template>
  <div>
    <button @click="handleCount(true)">Increment</button>
    <h1>{{ count }}</h1>
    <button @click="handleCount(false)">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import { useStore } from "../store";
export default defineComponent({
  name: "Home",
  //! COMPOSITION API
  setup: function () {
    const { state, commit } = useStore();
    const count: ComputedRef<number> = computed((): number => state.count);

    const handleCount = (isIncrement: boolean): void => {
      const result: number = isIncrement ? state.count + 1 : state.count - 1;
      commit("SET_COUNT", result);
    };

    return {
      count,
      handleCount,
    };
  },

  //! OPTION API
  // computed: {
  //   count: function (): number {
  //     return this.$store.state.count;
  //   },
  // },
  // methods: {
  //   handleCount: function (isIncrement: boolean): void {
  //     const count = this.$store.state.count;
  //     const result: number = isIncrement ? count + 1 : count - 1;
  //     this.$store.commit("SET_COUNT", result);
  //   },
  // },
});
</script>

<style></style>
