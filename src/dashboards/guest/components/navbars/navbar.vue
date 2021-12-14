<template>
  <div class="pt-2 pb-3" id="admin-navbar">
    <b-navbar variant="transparent" fixed>
      <b-navbar-brand :to="{ name: 'login' }">
        <h2 class="mb-0 font-weight-bold">ADMIN</h2>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item> </b-nav-item>
        <b-nav-item>
          <b-button
            :to="{ name: 'logout' }"
            variant="dark"
            class="logout px-2 px-md-3"
          >
            <b-icon-person-circle scale="0.8" /> Logout
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row no-gutters>
        <b-button
          size="sm"
          id="sidebar-toggler"
          class="mr-1 bg-white border border-light"
          @click="$emit('toggle-sidebar')"
        >
          <b-icon-arrow-right scale="0.75" />
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$emit("toggle-sidebar", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 600px) {
  #sidebar-toggler {
    display: none;
  }
}
@media only screen and (max-width: 320px) {
  .navbar-brand h4 {
    font-size: 80% !important;
  }
}
@media only screen and (max-width: 600px) {
  .logout {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 5px;

    svg {
      display: none;
    }
  }
}
</style>
<style lang="scss">
#admin-navbar {
  #sidebar-toggler svg {
    transform: rotate(0deg);
    transition: all 400ms;
  }
  &.active #sidebar-toggler svg {
    transform: rotate(-180deg);
  }
}
</style>