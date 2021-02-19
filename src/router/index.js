import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/layout.vue'),
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import('../views/container.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue'),
  },
  {
    path: '/inlineform',
    name: 'Inlineform',
    component: () => import('../views/inlineform.vue'),
  },
  {
    path: '/positionFrom',
    name: 'positionFrom',
    component: () => import('../views/positionFrom.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
