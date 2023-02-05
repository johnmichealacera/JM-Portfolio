import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
    createAuth0({
      domain: process.env.VUE_APP_AUTH0_DOMAIN,
      clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  )
  .use(router).mount('#app');
