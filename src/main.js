import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';
// import VueMeta from 'vue-meta';
import { createMetaManager } from 'vue-meta'
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
app.use(createMetaManager()); // Register vue-meta as a global plugin
app.mount('#app');
