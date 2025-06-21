import { createRouter, createWebHistory } from 'vue-router';

const HomeComponent = () => import('../views/Home.vue');
const ThankYouComponent = () => import('../views/ThankYou.vue');
const AboutComponent = () => import('../views/About.vue');
const ContactComponent = () => import('../views/Contact.vue');
const ManifestoComponent = () => import('../views/Manifesto.vue');
const PortfolioComponent = () => import('../views/Portfolio.vue');
const LoginComponent = () => import('../views/Login.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta: { 
      title: 'John Micheal Acera - Developer Portfolio',
      description: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      keywords: 'John Micheal Acera, portfolio, software developer, programming, projects',
      ogTitle: 'John Micheal Acera - Developer Portfolio',
      ogDescription: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/',
      twitterTitle: 'John Micheal Acera - Developer Portfolio',
      twitterDescription: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/'
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioComponent,
    meta: { 
      title: 'Portfolio - John Micheal Acera',
      description: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      keywords: 'portfolio, projects, web development, mobile apps, software solutions, John Micheal Acera',
      ogTitle: 'Portfolio - John Micheal Acera',
      ogDescription: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/portfolio',
      twitterTitle: 'Portfolio - John Micheal Acera',
      twitterDescription: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/portfolio'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    meta: { 
      title: 'Login - John Micheal Acera',
      description: 'Access the admin panel for John Micheal Acera\'s portfolio.',
      keywords: 'login, admin, John Micheal Acera, portfolio management',
      ogTitle: 'Login - John Micheal Acera',
      ogDescription: 'Access the admin panel for John Micheal Acera\'s portfolio.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/login',
      twitterTitle: 'Login - John Micheal Acera',
      twitterDescription: 'Access the admin panel for John Micheal Acera\'s portfolio.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/login'
    },
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYouComponent,
    meta: { 
      title: 'Thank You - John Micheal Acera',
      description: 'Thank you for your message. I\'ll get back to you soon!',
      keywords: 'thank you, contact, John Micheal Acera',
      ogTitle: 'Thank You - John Micheal Acera',
      ogDescription: 'Thank you for your message. I\'ll get back to you soon!',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/thank-you',
      twitterTitle: 'Thank You - John Micheal Acera',
      twitterDescription: 'Thank you for your message. I\'ll get back to you soon!',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/thank-you'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
    meta: { 
      title: 'About Me - John Micheal Acera',
      description: 'Learn more about John Micheal Acera, a passionate software developer with expertise in modern web technologies and mobile development.',
      keywords: 'about, John Micheal Acera, software developer, experience, skills',
      ogTitle: 'About Me - John Micheal Acera',
      ogDescription: 'Learn more about John Micheal Acera, a passionate software developer with expertise in modern web technologies and mobile development.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/about',
      twitterTitle: 'About Me - John Micheal Acera',
      twitterDescription: 'Learn more about John Micheal Acera, a passionate software developer with expertise in modern web technologies and mobile development.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/about'
    },
  },
  {
    path: '/manifesto',
    name: 'Manifesto',
    component: ManifestoComponent,
    meta: { 
      title: 'Developer Manifesto - John Micheal Acera',
      description: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      keywords: 'manifesto, development philosophy, principles, John Micheal Acera',
      ogTitle: 'Developer Manifesto - John Micheal Acera',
      ogDescription: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/manifesto',
      twitterTitle: 'Developer Manifesto - John Micheal Acera',
      twitterDescription: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/manifesto'
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent,
    meta: { 
      title: 'Contact - John Micheal Acera',
      description: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      keywords: 'contact, John Micheal Acera, collaboration, project inquiry',
      ogTitle: 'Contact - John Micheal Acera',
      ogDescription: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/contact',
      twitterTitle: 'Contact - John Micheal Acera',
      twitterDescription: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/contact'
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
