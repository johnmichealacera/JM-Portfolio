import axios from 'axios';
import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore({
  id: 'portfolio',
  state: () => ({
    introductions: { fullName: '', jobDescription: '', expertise: [] },
    socialMedia: [],
    projects: [],
    skills: [],
    userInfo: {},
    userDetails: {},
    softSkills: [],
    manifestos: [],
    currentWork: null,
    isLoading: false,
    isInitialized: false, // Track if data has been loaded
    lastFetchTime: null,
    cacheDuration: 5 * 60 * 1000, // 5 minutes
    error: null,
    // TODO: Make use and modify this dynamically
    // loadingStates: {
    //   all: false,
    //   user: false,
    //   projects: false,
    //   // ... etc
    // },
  }),
  getters: {
    getLocalStorage(key) {
      if (localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key));
      return {}
      },
    shouldRefetch() {
      if (!this.lastFetchTime) return true;
      return Date.now() - this.lastFetchTime > this.cacheDuration;
    },
    // Get unique skill types
    getSkillsType() {
      const types = [...new Set(this.skills.map(skill => skill.type))];
      return types.filter(type => type); // Remove empty/null values
    },
    // Return a function that filters skills by type
    filterSkillsByType() {
      return (type) => {
        return this.skills.filter(skill => skill.type === type).sort((a, b) => b?.mastery - a?.mastery);
      };
    },
    // Generic getter for any manifesto section
    getManifestoSection() {
      return (sectionName) => {
        return this.manifestos?.find(manifesto => manifesto.sectionName === sectionName)?.content || [];
      };
    },
    // Specific getters for common sections
    firstSection() {
      return this.getManifestoSection('firstSection');
    },
    
    secondSection() {
      return this.getManifestoSection('secondSection');
    },
    
    finalSection() {
      return this.getManifestoSection('finalSection');
    },
  },
  actions: {
    // Single comprehensive Graphql fetch method
    async fetchAllData(forceRefresh = false) {
      if (!forceRefresh && !this.shouldRefetch && this.isInitialized) {
        return;
      }
      
      this.isLoading = true;
      
      try {
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
              backgroundUrl
              jobDescription
              whyDoThis
              lifeStory
            }
            skillsOverview {
              title
              icon
            }
            socialMedia {
              socialMediaType
              url
            }
            projects {
              backgroundImage
              description
              title
              url
            }
            skills {
              name
              mastery
              skillType
            }
            softSkills {
              name
              description
              icon
            }
            currentWork {
              title
              company
              companyWebsite
              description
              tags
            }
          }
        `;

        const response = await axios.post(
          `${process.env.VUE_APP_PORTFOLIO_BACKEND}/graphql`,
          query,
          {
            headers: {
              'Content-Type': 'application/graphql',
            },
          }
        );

        const data = response.data.data;
        
        // Process all data at once
        this.processUserData(data);
        this.processManifestoData(data);
        this.processPersonalData(data);
        this.processSkillsData(data);
        this.processSocialMediaData(data);
        this.processProjectsData(data);
        this.processSoftSkillsData(data);
        this.processCurrentWorkData(data);
        
        this.isInitialized = true;
        
        this.lastFetchTime = Date.now();
      } catch (error) {
        console.error('Error fetching all data:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    // Helper methods to process data
    processUserData(data) {
      const userData = data.users?.[0];
      const personalData = data.personals?.[0];
      const skillsOverviewData = data.skillsOverview;
      
      this.introductions = {
        fullName: userData?.fullName,
        jobDescription: personalData?.jobDescription,
        expertise: skillsOverviewData,
      };
      this.userDetails = userData;
    },

    processManifestoData(data) {
      this.manifestos = data.manifestos || [];
    },

    processPersonalData(data) {
      const personalData = data.personals?.[0];
      this.userInfo = {
        lifeStory: personalData?.lifeStory,
        bgUrl: personalData?.backgroundUrl,
        userWhy: personalData?.whyDoThis,
      };
    },

    processSkillsData(data) {
      const rawSkillsData = data.skills || [];
      this.skills = rawSkillsData.map(skill => ({
        ...skill,
        type: skill.skillType,
      }));
    },

    processSocialMediaData(data) {
      const rawSocials = data.socialMedia || [];
      this.socialMedia = rawSocials.map(item => ({
        url: item.url,
        type: item.socialMediaType,
      }));
    },

    processProjectsData(data) {
      const rawProjectsData = data.projects || [];
      this.projects = rawProjectsData.map(project => ({
        imageLink: project.backgroundImage,
        title: project.title,
        description: project.description,
        url: project.url,
      }));
    },

    processSoftSkillsData(data) {
      const rawSoftSkillsData = data.softSkills || [];
      this.softSkills = rawSoftSkillsData.map(softSkill => ({
        icon: softSkill.icon,
        name: softSkill.name,
        shortDescription: softSkill.description,
      }));
    },

    processCurrentWorkData(data) {
      this.currentWork = data.currentWork?.[0] || null;
    },

    // Individual fetch methods for specific updates (optional)
    // async refreshSpecificData(dataType) {
    //   // Only fetch specific data if needed for updates
    //   // This can be used for real-time updates or specific data refreshes
    // },
  },
});