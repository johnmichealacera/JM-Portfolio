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
    manifestos: [],
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
    manifestoData(state) {
      return state.manifestos;
    },
  },
  actions: {
    // Graphql api equivalent from rust api
    async fetchIntroductionsData(forceRefresh = false) {
      if (this?.introductions?.fullName && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          users {
            fullName
            email
            contactNumber
            website
          }
          manifestos {
            sectionName
            content
            order
          }
          personals {
            jobDescription
          }
          skillsOverview  {
            title
            icon
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const userData = data?.data?.data.users?.[0];
        const personalData = data?.data?.data.personals?.[0];
        const skillsOverviewData = data?.data?.data.skillsOverview;
        const manifestoData = data?.data?.data.manifestos;
        this.introductions = {
          fullName: userData?.fullName,
          jobDescription: personalData?.jobDescription,
          expertise: skillsOverviewData,
        };
        this.userDetails = userData;
        this.manifestos = manifestoData;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSocialMediaData(forceRefresh = false) {
      if (this?.socialMedia?.length > 0 && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          socialMedia {
            socialMediaType
            url
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const rawSocials = data?.data?.data.socialMedia?.map((item) => ({
          url: item?.url,
          type: item?.socialMediaType,
        }));
        this.socialMedia = rawSocials;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserInfo(forceRefresh = false) {
      if (this?.userInfo?.lifeStory && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          personals {
            backgroundUrl
            jobDescription
            whyDoThis
            lifeStory
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const personalData = data?.data?.data?.personals?.[0];
        const userInfo = {
          lifeStory: personalData?.lifeStory,
          bgUrl: personalData?.backgroundUrl,
          userWhy: personalData?.whyDoThis,
        }
        this.userInfo = userInfo;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjectsData(forceRefresh = false) {
      if (this?.projects?.length > 0 && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          projects {
            backgroundImage
            description
            title
            url
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const rawProjectsData = data?.data?.data?.projects;
        const projectsdata = rawProjectsData?.map((project) => ({
          imageLink: project?.backgroundImage,
          title: project?.title,
          description: project?.description,
          url: project?.url,
        }))
        this.projects = projectsdata;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSkillsData(forceRefresh = false) {
      if (this?.skills?.length > 0 && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          skills {
            name
            mastery
            skillType
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const rawSkillsData = data?.data?.data?.skills;
        const skillsdata = rawSkillsData?.map((skill) => ({
          ...skill,
          type: skill?.skillType,
        }))
        this.skills = skillsdata;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSoftSkills(forceRefresh = false) {
      if (this?.softSkills?.length > 0 && !forceRefresh) {
        return; // Don't refetch if already fetched
      }
      const query = `
        {
          softSkills {
            name
            description
            icon
          }
        }
      `;
    
      try {
        const data = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );
        const rawSoftSkillsData = data?.data?.data?.softSkills;
        const softSkillsData = rawSoftSkillsData?.map((softSkill) => ({
          icon: softSkill?.icon,
          name: softSkill?.name,
          shortDescription: softSkill?.description,
        }));
        this.softSkills = softSkillsData;
      } catch (error) {
        console.error(error);
      }
    },
    // Rest api equivalent from express api
    // async fetchIntroductionsData(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const introductions = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/introductions/${userId}`,);
    //     this.introductions = introductions?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchSocialMediaData(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const socialMedia = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/social-media/${userId}`);
    //     this.socialMedia = socialMedia?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchProjectsData(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const projects = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/projects/${userId}`);
    //     this.projects = projects?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchSkillsData(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const skills = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/skills/${userId}`);
    //     this.skills = skills?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchUserInfo(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const userInfo = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-info/${userId}`);
    //     this.userInfo = userInfo?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchUserDetails(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const userDetails= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user-details/${userId}`);
    //     this.userDetails = userDetails?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async fetchSoftSkills(userId) {
    //   if (typeof userId === 'undefined') {
    //     return;
    //   }
    //   try {
    //     const softSkills= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/soft-skills/${userId}`);
    //     this.softSkills = softSkills?.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
});