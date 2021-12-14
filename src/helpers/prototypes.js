import Vue from "vue";
import notify from "./custom-notifications";
import store from "../store";
import _omitBy from "lodash/omitBy";
import _isNil from "lodash/isNil";

Vue.prototype.$notify = (text, variant = "") => notify(text, variant);
Vue.prototype.$cancelRequests = () => store.dispatch("CANCEL_PENDING_REQUESTS");
Vue.prototype.$getQueryString = (obj) =>
  Object.entries(_omitBy(obj, _isNil))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
