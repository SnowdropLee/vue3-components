<template>
  <Topnave />
  <Home />
</template>

<script>
import Home from "./components/Home.vue";
import Topnave from "./components/Topnave.vue";

export default {
  name: "App",
  components: {
    Home,
    Topnave,
  },
};
</script>
