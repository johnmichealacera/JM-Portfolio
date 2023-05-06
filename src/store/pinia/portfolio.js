import axios from 'axios';
import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore({
  id: 'portfolio',
  state: () => ({
    introductions: [],
    socialMedia: [],
    projects: [],
    skills: [],
    userInfo: {},
    userDetails: {},
    softSkills: [],
  }),
  getters: {
    getLocalStorage(key) {
      if (localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key));
      return {}
      },
    introductionData(state) {
      return state.introductions;
    },
    socialMediaData(state) {
      return state.socialMedia;
    },
    projectData(state) {
      return state.projects;
    },
    skillData(state) {
      return state.skills;
    },
    userInfoData(state) {
      return state.userInfo;
    },
    userDetailsData(state) {
      return state.userDetails;
    },
    softSkillsData(state) {
      return state.softSkills;
    },
  },
  actions: {
    async fetchIntroductionsData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const introductions = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/introductions/${userEmail}`,);
        this.introductions = introductions?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSocialMediaData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const socialMedia = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/social-media/${userEmail}`);
        this.socialMedia = socialMedia?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjectsData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const projects = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/projects/${userEmail}`);
        this.projects = projects?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSkillsData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const skills = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/skills/${userEmail}`);
        this.skills = skills?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserInfo(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const userInfo = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-info/${userEmail}`);
        this.userInfo = userInfo?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserDetails(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const userDetails= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-details/${userEmail}`);
        this.userDetails = userDetails?.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSoftSkills(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        const softSkills= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/soft-skills/${userEmail}`);
        this.softSkills = softSkills?.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});