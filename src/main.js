import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Toast from "vue-toastification";
import "./assets/styles/main.scss";
import AOS from "aos";

// helpers
import "./helpers/axios";
import "./helpers/prototypes";

Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 3,
  newestOnTop: true,
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("Line-Loader", () =>
  import(
    /* webpackChunkName: "line-loader" */ "./components/loaders/line-loader.vue"
  )
);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')