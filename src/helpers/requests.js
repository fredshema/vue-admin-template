import Vue from "vue";

const profile = async () => {
  try {
    const { data } = await Vue.axios.get("merchants/me");
    return data;
  } catch (error) {
    return null;
  }
};

export default { profile };
