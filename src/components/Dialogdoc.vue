<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible"></Dialog>
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
    return { visible, toggle };
  },
};
</script>