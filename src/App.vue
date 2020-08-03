<template>
  <div>
    导航栏 |
    <router-link to="/">topnave</router-link>|
    <router-link to="/home">home</router-link>|
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
