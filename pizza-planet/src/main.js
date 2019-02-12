import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
