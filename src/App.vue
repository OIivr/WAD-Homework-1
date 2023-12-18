<template>
  <div id="app">
    <AppHeader />
    <router-view class="content" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
body {
  background-color: #1f1f1f;
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
/* #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */

.content {
  flex-grow: 1;
}
</style>