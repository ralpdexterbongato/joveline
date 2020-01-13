import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueSmoothScroll from 'vue2-smooth-scroll';
import vWow from 'v-wow';
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);
Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;
Vue.use(vWow);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
