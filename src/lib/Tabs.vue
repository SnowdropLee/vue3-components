<template>
  <div class="aui-tabs">
    <div class="aui-tabs-nav">
      <div
        class="aui-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ selected: title === selected }"
        @click="select(title)"
      >
        {{ title }}
      </div>
    </div>
  </div>
  <div class="aui-tabs-content">
    <component
      class="aui-tabs-content-item"
      :is="current"
      :key="current.props.title"
    />
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const titles: Array<string> = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.aui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
