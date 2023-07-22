import axios from 'axios';
import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore({
  id: 'portfolio',
  state: () => ({
    introductions: null,
    socialMedia: null,
    projects: null,
    skills: null,
    userInfo: null,
    userDetails: null,
    softSkills: null,
    personal: null,
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
    personalData(state) {
      return state.personal;
    }
  },
  actions: {
    async fetchIntroductionsData() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.introductions) {
          const introductionObj = {
            expertise: [],
            fullName: '',
            jobDescription: {},
            backgroundUrl: '',
          };
          const expertise = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/skill-overview/${userEmail}`,);
          introductionObj.expertise = expertise?.data;
          const userData = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-info/${userEmail}`,);
          introductionObj.fullName = userData?.data?.fullName;
          const personal = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/personal/${userEmail}`,);
          introductionObj.jobDescription = personal?.data?.jobDescription;
          introductionObj.backgroundUrl = personal?.data?.backgroundUrl;
          this.introductions = introductionObj;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSocialMediaData() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.socialMedia) {
          const socialMedia = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/social-media/${userEmail}`);
          this.socialMedia = socialMedia?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjectsData() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.projects) {
          const projects = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/projects/${userEmail}`);
          this.projects = projects?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSkillsData() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.skills){
          const skills = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/skills/${userEmail}`);
          this.skills = skills?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserInfo() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.userInfo) {
          const userInfo = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-info/${userEmail}`);
          this.userInfo = userInfo?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserDetails() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.userDetails) {
          const userDetails= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-details/${userEmail}`);
          this.userDetails = userDetails?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSoftSkills() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.softSkills) {
          const softSkills= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/soft-skills/${userEmail}`);
          this.softSkills = softSkills?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPersonalData() {
      const userEmail = process.env.VUE_APP_USER_EMAIL;
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.personal) {
          const personal = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/personal/${userEmail}`);
          this.personal = personal?.data;
        } 
      } catch (error) {
        console.error(error);
      }
    },
  },
});