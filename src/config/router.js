import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store";
import { loadLanguageAsync } from "@/config/i18n";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const lang = store.getters["i18n/getLang"];
  loadLanguageAsync(lang).then(() => next());
});

export default router;
