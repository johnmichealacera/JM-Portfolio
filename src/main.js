import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pinia = createPinia();
const app = createApp(App);
AOS.init();

app.use(pinia);
app.use(router);
app.mount('#app');
