<template>
  <main id="dashboard">
    <nav-bar
      @toggle-sidebar="toggleSidebar"
      :class="[{ active: showSidebar }]"
    />
    <div class="content position-relative">
      <div
        class="left-side bg-light shadow-sm"
        :class="[{ active: showSidebar }]"
      >
        <side-bar />
      </div>
      <div class="right-side">
        <div class="main-content mx-2 mx-sm-3 mb-2 mb-sm-3">
          <b-container class="pt-3 px-2 pb-2 px-sm-2 pb-sm-3 px-md-4">
            <transition name="component-fade" mode="out-in">
              <router-view />
            </transition>
          </b-container>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { navBar, sideBar } from "./components";
export default {
  components: {
    navBar,
    sideBar,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar(state) {
      this.$set(this, "showSidebar", state || !this.showSidebar);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/sidebar_variable";
#dashboard {
  height: 100vh;
  background: var(--light);
  display: flex;
  flex-direction: column;
  overflow: auto;

  .content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .left-side {
    width: $sb-lg-width;
    display: flex;
  }

  .right-side {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    background-color: var(--white);
    border-radius: 10px;
    flex: 1;
  }
}
@media only screen and (max-width: 600px) {
  .left-side {
    position: absolute;
    width: 0px !important;
    top: 0;
    height: 100%;
    overflow: hidden;
    z-index: 999;
    transition: all 400ms;

    &.active {
      width: $sb-sm-width !important;
    }
  }
}
@media only screen and (min-width: 600px) {
  .left-side {
    box-shadow: none !important;
  }
}
</style>