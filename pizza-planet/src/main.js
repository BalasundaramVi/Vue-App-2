import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
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

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
