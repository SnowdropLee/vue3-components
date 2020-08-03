<template>
  <div>
    <Topnave />
    <div class="banner">
      <h1>vue3UI</h1>
      <h2>一个vue3的UI框架</h2>
      <p class="actions">
        <a href="#">GitHub</a> |
        <a href="#">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnave from "../components/Topnave.vue";
export default {
  components: {
    Topnave,
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>