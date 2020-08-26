<template>
  <div>
    <button class="aui-switch" @click="toggle" :disabled="disabled" :class="{'aui-checked':value}">
      <span></span>
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.aui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.aui-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.aui-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &[disabled] {
    cursor: not-allowed;

    > span {
      width: $h2;
    }
  }

  &[disabled].aui-checked:active {
    > span {
      width: $h2;
      margin-left: 0;
    }
  }
}
</style>