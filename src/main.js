import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';
// import auth0 from 'auth0-js';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(
  createAuth0({
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);
app.use(router);
app.mount('#app');
