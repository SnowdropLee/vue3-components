<template>
  <template v-if="visible">
    <teleport to="body">
      <div>
        <div class="aui-dialog-overlay" @click="clickModal"></div>
        <div class="aui-dialog-wrapper">
          <div class="aui-dialog">
            <header>
              <slot name="title" />
              <span class="aui-dialog-close" @click="close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <Button @click="ok">{{ confirmtext }}</Button>
              <Button @click="cancle">{{ cancletext }}</Button>
            </footer>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeoverlay: {
      type: Boolean,
      default: true,
    },
    okfunc: {
      type: Function,
    },
    canclefunc: {
      type: Function,
    },
    title: {
      type: String,
      default: "标题",
    },
    cancletext: {
      type: String,
      defalut: "确定111",
    },
    confirmtext: {
      type: String,
      default: "确定",
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const clickModal = () => {
      if (props.closeoverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.okfunc?.() !== false) {
        close();
      }
    };
    const cancle = () => {
      if (props.canclefunc?.() !== false) {
        close();
      }
    };

    return { close, clickModal, ok, cancle, props };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.aui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>