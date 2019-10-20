import Vue from "vue";
import App from "./App.vue";
import router from "./config/router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "./styles/custom.scss";
import Fragment from "vue-fragment";
import i18n from "./config/i18n";

Vue.use(Fragment.Plugin);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");