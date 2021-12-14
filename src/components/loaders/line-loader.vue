<template>
  <section id="line-loader">
    <div class="loader">
      <div class="bar"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#line-loader {
  overflow: hidden;
  width: 100%;
  position: relative;
}
@keyframes loader-animation {
  0% {
    left: -100%;
  }
  49% {
    left: 100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
.loader {
  height: 5px;
  width: 100%;
}
.loader .bar {
  width: 100%;
  position: absolute;
  height: 5px;
  background-color: currentColor;
  animation-name: loader-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>