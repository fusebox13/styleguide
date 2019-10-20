import Vue from "vue";
import Vuex from "vuex";
import i18n from "./modules/i18n";

Vue.use(Vuex);

/* USE THE MODULE PATTERN */
export default new Vuex.Store({
  state: {
    /* NO GLOBAL STATE */
  },
  getters: {
    /* NO GLOBAL GETTERS */
  },
  mutations: {
    /* NO GLOBAL MUTATIONS */
  },
  actions: {
    /* NO GLOBAL ACTIONS */
  },
  modules: {
    i18n
  }
});
