import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import HTMLPage from '@/views/HTMLPage.vue';
import CSSPage from '@/views/CSSPage.vue';
import JSPage from '@/views/JSPage.vue';
import DemoPage from '@/views/demo-page/DemoPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/info/html',
    name: 'HTMLPage',
    component: HTMLPage,
  },
  {
    path: '/info/css',
    name: 'CSSPage',
    component: CSSPage,
  },
  {
    path: '/info/js',
    name: 'JSPage',
    component: JSPage,
  },
  {
    path: '/demo',
    name: 'DemoPage',
    component: DemoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
