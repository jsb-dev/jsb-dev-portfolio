// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/home-page/HomePage.vue';
import HTMLPage from './pages/html-page/HTMLPage.vue';
import CSSPage from './pages/css-page/CSSPage.vue';
import JSPage from './pages/js-page/JSPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/info/html', component: HTMLPage },
    { path: '/info/css', component: CSSPage },
    { path: '/info/js', component: JSPage },
  ],
});
