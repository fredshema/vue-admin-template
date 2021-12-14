import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "../store/index";
import router from "../router/index";

const { VUE_APP_API_ENDPOINT = "/api/" } = process.env;

const axiosInstance = axios.create({
  baseURL: VUE_APP_API_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    //  Generate cancel token source
    let source = axios.CancelToken.source();

    // Set cancel token on this request
    config.cancelToken = source.token;

    // Add to vuex to make cancellation available from anywhere
    store.commit("ADD_CANCEL_TOKEN", source);

    if (sessionStorage.getItem("access")) {
      config.headers["Authorization"] = sessionStorage.getItem("access");
    }

    return config;
  },

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    try {
      if (error.response) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const access_token = await refreshAccessToken();
          originalRequest.headers["Authorization"] = access_token;
          return axiosInstance(originalRequest);
        }
        if (error.response.status === 401 && originalRequest._retry) {
          sessionStorage.removeItem("access");
          sessionStorage.removeItem("refresh");
          router.replace("/login");
        } else if (error.code && error.code === "ECONNABORTED")
          return Promise.reject({
            errorMessage: "Your connection is weak! try again",
          });
        else if (error.response.status === 404)
          return Promise.reject({
            errorMessage:
              error.response.data.message ||
              error.response.data.errors[0] ||
              error,
          });
        else if (axios.isCancel(error)) throw "";
        else
          return Promise.reject({
            errorMessage:
              error.response.data.message ||
              error.response.data.errors[0] ||
              error,
          });
      } else {
        return "";
      }
    } catch (e) {
      return Promise.reject({
        errorMessage: "something is wrong! try refreshing this page",
      });
    }
  }
);
async function refreshAccessToken() {
  const refresh_token = sessionStorage.getItem("refresh");
  if (!refresh_token) return;
  const { data } = await axiosInstance.get(`auth/refresh/${refresh_token}`);
  sessionStorage.setItem("access", data.access);
  sessionStorage.setItem("refresh", data.refresh);
  return data.access;
}
Vue.use(VueAxios, axiosInstance);
