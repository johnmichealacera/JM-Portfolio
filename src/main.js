import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import { createHead } from '@vueuse/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pinia = createPinia();
const app = createApp(App);
AOS.init();
const head = createHead();

app.use(pinia);
app.use(router);
app.use(head);
app.mount('#app');
