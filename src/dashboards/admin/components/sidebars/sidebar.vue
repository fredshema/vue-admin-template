<template>
  <aside id="sidebar" class="pt-3 px-2">
    <ul class="side-menu">
      <b-link
        active-class="active"
        :to="{ name: 'dashboard-home' }"
        class="text-decoration-none"
      >
        Dashboard
      </b-link>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/sidebar_variable";
#sidebar {
  flex: 1;
  min-width: $sb-lg-width;
  max-width: $sb-lg-width;

  .side-menu {
    list-style: none;

    a {
      padding: 0.5rem 0.75rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 250ms;
      margin: 5px 0;
      display: block;
      color: var(--gray-dark);

      &:hover,
      &.active {
        background-color: var(--white);
        color: var(--dark);
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #sidebar {
    width: $sb-sm-width !important;
  }
}
</style>