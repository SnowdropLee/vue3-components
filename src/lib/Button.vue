<template>
  <button class="aui-button" :class="classes" :disabled="disabled">
    <span class="aui-button-loading iconfont icon-loading" v-if="loading"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    them: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    leval: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { them, size, leval } = props;
    const classes = computed(() => {
      return {
        [`aui-them-${them}`]: them,
        [`aui-size-${size}`]: size,
        [`aui-leval-${leval}`]: leval,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.aui-button {
  box-sizing: border-box;
  height: $h;
  line-height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  vertical-align: middle;
  vertical-align: -moz-middle-with-baseline;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.aui-leval-main {
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover,
    &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  &.aui-leval-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }

  &.aui-them-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }

    &.aui-leval-main {
      background: white;
      color: $blue;
      border-color: white;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.aui-leval-danger {
      background: white;
      border-color: transparent;
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 20%);
      }
    }
  }

  &.aui-them-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.aui-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.aui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.aui-them-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.aui-them-link,
  &.aui-them-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .aui-button-loading {
    display: inline-block;
    margin-right: 4px;
    animation: identifier 0.8s linear infinite;
  }
  &.aui-button-loading:hover {
    color: $blue;
  }
}
@keyframes identifier {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>