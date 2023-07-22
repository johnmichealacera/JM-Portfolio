import { _createApp } from './app-new';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import './index.css';

export default async ssrContext => {
    const { app, router } = _createApp();
    const { url } = ssrContext;

    router.push(url);

    await router.isReady();

    ssrContext.state = {};
    const portfolioStore = usePortfolioStore();

    await portfolioStore.fetchPersonalData(process.env.VUE_APP_USER_EMAIL);
    await portfolioStore.fetchIntroductionsData(process.env.VUE_APP_USER_EMAIL);
    ssrContext.state.personal = portfolioStore.personalData;
    ssrContext.state.introduction = portfolioStore.introductions;

    return app;
}