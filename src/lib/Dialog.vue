<template>
  <div>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
      <header>标题</header>
      <main>
        <p>第一行</p>
        <p>二行</p>
      </main>
      <footer>
        <Button>ok</Button>
        <Button>cancle</Button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>
<style lang="scss">
</style>