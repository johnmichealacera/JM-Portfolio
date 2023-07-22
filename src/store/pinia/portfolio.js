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
    async fetchIntroductionsData(userEmail) {
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
          const expertise = await axios.get(`https://portfolio-backend-revamp.onrender.com/skill-overview/${userEmail}`,);
          introductionObj.expertise = expertise?.data;
          const userData = await axios.get(`https://portfolio-backend-revamp.onrender.com/user-info/${userEmail}`,);
          introductionObj.fullName = userData?.data?.fullName;
          const personal = await axios.get(`https://portfolio-backend-revamp.onrender.com/personal/${userEmail}`,);
          introductionObj.jobDescription = personal?.data?.jobDescription;
          introductionObj.backgroundUrl = personal?.data?.backgroundUrl;
          this.introductions = introductionObj;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSocialMediaData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.socialMedia) {
          const socialMedia = await axios.get(`https://portfolio-backend-revamp.onrender.com/social-media/${userEmail}`);
          this.socialMedia = socialMedia?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjectsData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.projects) {
          const projects = await axios.get(`https://portfolio-backend-revamp.onrender.com/projects/${userEmail}`);
          this.projects = projects?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSkillsData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.skills){
          const skills = await axios.get(`https://portfolio-backend-revamp.onrender.com/skills/${userEmail}`);
          this.skills = skills?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserInfo(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.userInfo) {
          const userInfo = await axios.get(`https://portfolio-backend-revamp.onrender.com/user-info/${userEmail}`);
          this.userInfo = userInfo?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserDetails(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.userDetails) {
          const userDetails= await axios.get(`https://portfolio-backend-revamp.onrender.com/user-details/${userEmail}`);
          this.userDetails = userDetails?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSoftSkills(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.softSkills) {
          const softSkills= await axios.get(`https://portfolio-backend-revamp.onrender.com/soft-skills/${userEmail}`);
          this.softSkills = softSkills?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPersonalData(userEmail) {
      if (typeof userEmail === 'undefined') {
        return;
      }
      try {
        if (!this.personal) {
          const personal = await axios.get(`https://portfolio-backend-revamp.onrender.com/personal/${userEmail}`);
          this.personal = personal?.data;
        } 
      } catch (error) {
        console.error(error);
      }
    },
  },
});