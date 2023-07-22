import { _createApp } from './app-new';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import './index.css';

export default async ssrContext => {
    const { app, router } = _createApp();
    const { url } = ssrContext;

    console.log('url', url);

    router.push(url);

    await router.isReady();

    ssrContext.state = {};
    const portfolioStore = usePortfolioStore();

    await portfolioStore.fetchPersonalData();
    await portfolioStore.fetchIntroductionsData();
    ssrContext.state.personal = portfolioStore.personalData;
    ssrContext.state.introduction = portfolioStore.introductions;

    return app;
}