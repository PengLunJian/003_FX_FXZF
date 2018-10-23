import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import axios from './axios/axios';
import Routes from './router/routes';
import VueWaves from '../node_modules/vue-waves/dist/vue-waves.js';

Vue.use(VueWaves);
Vue.prototype.$axios = axios;
Vue.prototype.$routes = Routes;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
