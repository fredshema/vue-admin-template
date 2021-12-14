<template>
  <div class="w-100 d-flex flex-column" id="logout">
    <b-row
      no-gutters
      align-h="center"
      align-v="center"
      class="flex-grow-1 w-100"
    >
      <b-spinner variant="dark" />
    </b-row>
  </div>
</template>
<script>
export default {
  name: "logout",
  async mounted() {
    try {
      await this.axios.get("auth/logout");
    } catch (error) {
      throw error;
    } finally {
      this.$store.dispatch("CLEAR_DATA");
      sessionStorage.removeItem("access");
      sessionStorage.removeItem("refresh");
      this.$router.replace({ name: "home" });
    }
  },
};
</script>

<style lang="scss" scoped>
#logout {
  min-height: 100vh;
}
</style>