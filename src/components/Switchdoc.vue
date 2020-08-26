<template>
  <div>
    <Switch v-model:value="v" />
    <h1>disabled</h1>
    <div>
      <Switch v-model:value="v" :disabled="disabled" />
      <Switch v-model:value="v2" :disabled="disabled" />
    </div>
  </div>
</template>
<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch: Switch,
  },
  setup(props) {
    const v = ref(true);
    const v2 = ref(false);
    const disabled = true;
    const disabled1 = false;

    return { v, disabled, disabled1 };
  },
};
</script>