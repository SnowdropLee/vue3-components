<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="visible"
      :closeoverlay="false"
      :okfunc="okfunc"
      :canclefunc="canclefunc"
      confirmtext="ok"
      cancletext="cancle"
    >
      <template v-slot:title>
        <strong>我是标题</strong>
      </template>
      <template v-slot:content>
        <h1>第一行</h1>
        <h2>第二行</h2>
      </template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup(props, context) {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const okfunc = () => {
      return true;
    };
    const canclefunc = () => {
      return true;
    };
    return { visible, toggle, okfunc, canclefunc};
  },
};
</script>