import { createSSRApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { createMetaManager } from 'vue-meta';
import App from './App.vue';
import './index.css';

export function _createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  const metaManager = createMetaManager(false, {
    meta: { tag: 'meta', nameless: true },
  });

  app
    .use(router)
    .use(pinia)
    .use(metaManager)

  return { app, router, pinia };
}
