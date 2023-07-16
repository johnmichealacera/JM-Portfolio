import { createSSRApp, createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './index.css';

const isSSR = typeof window === 'undefined';

export default function buildApp() {
  const app = (isSSR ? createSSRApp(App) : createApp(App));
  const store = createPinia();

  app.use(router);
  app.use(store);

  return { app, router, store };
}
