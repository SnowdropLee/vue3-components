<template>
  <div>
    <Button @click="toggle" leval="main">点击打开Dialog</Button>
    <Dialog
      v-model:visible="visible"
      :closeoverlay="true"
      :okfunc="okfunc"
      :canclefunc="canclefunc"
      confirmtext="ok"
      cancletext="cancle"
    >
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <h1>第一行</h1>
        <h2>第二行</h2>
      </template>
    </Dialog>
    <div class="demo">
      <Button @click="showDialog" leval="main">点击打开Dialog</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
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

    const showDialog = () => {
      openDialog({
        title: "我是标题",
        content: "我是内容",
        confirmtext: "确认",
        cancletext: "关闭",
       
        okfunc() {
          console.log("ok");
        },
        canclefunc() {
          console.log("cancle");
          return false;
        },
      });
    };
    return { visible, toggle, okfunc, canclefunc, showDialog };
  },
};
</script>
<style lang="sass" scope>
.demo
  margin: 20px 0
  padding: 0
</style>