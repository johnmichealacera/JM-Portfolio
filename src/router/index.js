const { createRouter, createWebHistory, createMemoryHistory } = require('vue-router');
// import auth from '../services/auth';

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import('@/views/ThankYou.vue'),
    meta: {
      title: 'Thank You Page',
      // requiresAuth: true // requires authentication to access this route
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home Page',
      // requiresAuth: true // requires authentication to access this route
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
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio.vue'),
    meta: {
      title: 'Portfolio',
      // requiresAuth: true // requires authentication to access this route
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Contact',
      // requiresAuth: true // requires authentication to access this route
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue'),
    meta: {
      title: 'Login',
    },
  }
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// });

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   let isAuthenticated;
//   await auth.checkSession().catch(() => {
//     isAuthenticated = false;
//   });
//   isAuthenticated = await auth.isAuthenticated();
//   if (requiresAuth && !isAuthenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

const router = createRouter({
  history,
  routes,
});

module.exports = router;