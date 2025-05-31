import { createRouter, createWebHistory } from 'vue-router';

const HomeComponent = () => import('../views/Home.vue');
const ThankYouComponent = () => import('../views/ThankYou.vue');
const AboutComponent = () => import('../views/About.vue');
const ContactComponent = () => import('../views/Contact.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta: { title: 'Home Page' },
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYouComponent,
    meta: { title: 'Thank You Page' },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
    meta: { title: 'About Me' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent,
    meta: { title: 'Contact' },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
