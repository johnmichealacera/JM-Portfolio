import { createRouter, createWebHistory } from 'vue-router';
import ThankYouComponent from '../views/ThankYou.vue';
import HomeComponent from '../views/Home.vue';
import AboutComponent from '../views/About.vue';
import PortfolioComponent from '../views/Portfolio.vue';
import ContactComponent from '../views/Contact.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta: {
      title: 'Home Page',
    },
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYouComponent,
    meta: {
      title: 'Thank You Page',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
    meta: {
      title: 'About Me',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioComponent,
    meta: {
      title: 'Portfolio',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent,
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
