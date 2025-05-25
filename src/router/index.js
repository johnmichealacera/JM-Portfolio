import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import('@/views/ThankYou.vue'),
    meta: {
      title: 'Thank You Page',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home Page',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About Me',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Contact',
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
