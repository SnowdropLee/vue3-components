<template>
  <div>
    <div>
      导航栏 |
      <router-link to="/">首页</router-link>|
      <router-link to="/doc">文档</router-link>|
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
