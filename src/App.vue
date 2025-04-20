<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainComponent from "./components/MainComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    MainComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>
