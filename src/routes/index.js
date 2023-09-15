import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import DemoPage from '@/views/demo-page/DemoPage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';
import MethodologyPage from '@/views/MethodologyPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/demo',
    name: 'DemoPage',
    component: DemoPage,
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage,
  },
  {
    path: '/methodology',
    name: 'MethodologyPage',
    component: MethodologyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
