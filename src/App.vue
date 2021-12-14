<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>

<style lang="scss">
#app {
  min-width: 300px;
  margin: auto;
}
</style>
