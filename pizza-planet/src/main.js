import Vue from 'vue';
import VueRouter from 'vue-router';
import Accounting from 'accounting-js';

import routes from './routes';
import store from './store/store';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

Vue.filter('currency', val => Accounting.formatMoney(val));

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
