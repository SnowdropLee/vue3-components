<template>
  <div>
    <Topnave />
    <div class="banner">
      <h1>vue3UI</h1>
      <h2>一个vue3的UI框架</h2>
      <p class="actions">
        <a href="#">GitHub</a> |
        <router-link to="/doc">开始</router-link>
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
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>