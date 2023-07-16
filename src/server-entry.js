import { _createApp } from './app-new';
// import { usePortfolioStore } from '@/store/pinia/portfolio';
import './index.css';

export default async ssrContext => {
    const { app, router } = _createApp();
    const { url } = ssrContext;

    console.log('url', url);

    router.push(url);

    await router.isReady();

    // console.log('url', url);
    // ssrContext.state = {};

    // // Call the Pinia store actions or fetch data as needed
    // const portfolioStore = usePortfolioStore(pinia);

    // if (url === '/') {
    //   await portfolioStore.fetchPersonalData('jeanndelapena22@gmail.com');
    //   ssrContext.state.personal = portfolioStore.personalData?.lifeStory;
    //   await portfolioStore.fetchSoftSkills('jeanndelapena22@gmail.com')
    //   ssrContext.state.softSkills = portfolioStore.softSkillsData;
    //   await portfolioStore.fetchSocialMediaData('jeanndelapena22@gmail.com');
    //   ssrContext.state.socialMedia = portfolioStore.socialMediaData;
    // }

    // if (url === '/portfolio') {
    //   await portfolioStore.fetchPersonalData('jeanndelapena22@gmail.com');
    //   ssrContext.state.personal = portfolioStore.personalData?.lifeStory;
    //   await portfolioStore.fetchSoftSkills('jeanndelapena22@gmail.com')
    //   ssrContext.state.softSkills = portfolioStore.softSkillsData;
    //   await portfolioStore.fetchSocialMediaData('jeanndelapena22@gmail.com');
    //   ssrContext.state.socialMedia = portfolioStore.socialMediaData;
    // }

    // console.log('portfolioStore', portfolioStore);

    return app;
}