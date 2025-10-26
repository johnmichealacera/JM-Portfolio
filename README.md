# **Personal Portfolio**
## This is a personal portfolio application built with vue js

## **Features**
- Showcase personal information, skills, life story and projects
- Blog system with newsletter subscription functionality
- AI Assistant for interactive conversations about development and projects
- Responsive design for mobile and desktop

## Installation
1. Clone the repository: `git clone https://github.com/johnmichealacera/JM-Portfolio.git`
2. Navigate to the project directory: `cd jm-personal-portfolio`
3. Install dependencies: `npm install`

### Environment Variables
The application requires the following environment variables to be set:

- `VUE_APP_FORM_EMAIL_CODE`: Your form email code from formsubmit.io.
- `VUE_APP_REDIRECT_URL`: Your email redirect url to be used when email has been sent.
- `VUE_APP_PORTFOLIO_BACKEND`: The personal portfolio backend built in express.
- `VUE_APP_USER_ID`: The ID of the user you want to showcase in the portfolio
- `VUE_APP_HF_API_TOKEN`: (Optional) Your Hugging Face API token for the AI Assistant feature

Create a `.env` file in the root directory of the project with the keys above that serves your requirement

#### Getting a Hugging Face API Token:
1. Sign up or log in to [Hugging Face](https://huggingface.co/)
2. Go to your [profile settings](https://huggingface.co/settings/tokens)
3. Create a new token with read access
4. Add `VUE_APP_HF_API_TOKEN=your_token_here` to your `.env` file

**Note**: The AI Assistant will show an error message if the token is not configured, but the rest of the portfolio will work fine.

## Usage
1. Start the development server: `npm run serve`
2. Navigate to `http://localhost:8080/` in your browser
## Built With
- [Vue.js](https://vuejs.org/v2/guide/) - The web framework used
- [Vue Router](https://router.vuejs.org/) - Router for single-page applications
- [Axios](https://github.com/axios/axios/blob/master/README.md) - Promise-based HTTP client
- [Tailwind](https://tailwindcss.com/docs) - Front-end component library
- [Hugging Face](https://huggingface.co/) - AI Assistant integration
## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request
## Changelog

### [1.5.0] - 2025-01-XX
#### Added
- **AI Assistant**: Interactive AI chatbot powered by Hugging Face
  - Chat interface with message history
  - Real-time responses about development topics
  - Beautiful gradient design matching portfolio theme
  - Responsive design for all devices
- **Navigation Updates**: Added AI Assistant link to main menu and footer

#### Technical
- New Vue.js components: `AIChat.vue`, `AIAssistant.vue`
- Hugging Face API integration for free AI chat
- Conversation history with timestamp display
- Loading states and error handling

### [1.4.0] - 2025-01-XX
#### Added
- **Blog System**: New blog functionality with dedicated pages
  - Blog index page (`/blog`) with post listings
  - Individual blog post page (`/blog/my-founder-journey`)
  - Newsletter subscription system with email collection
- **Navigation Updates**: Added blog links to main menu and footer
- **SEO Enhancement**: Comprehensive meta tags for blog routes
- **Content Management**: Structured blog content with semantic HTML

#### Technical
- New Vue.js components: `Blog.vue`, `BlogPost.vue`
- Router configuration for blog routes
- Web3Forms integration for newsletter subscriptions
- TODO comments for future backend integration

### [1.3.0] - Previous Release
- Portfolio showcase and project management
- Contact forms and lead generation
- Responsive design implementation

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/license/mit/) file for details.

## Acknowledgments
- [Vue.js](https://vuejs.org/v2/guide/) documentation
- [Tailwind](https://tailwindcss.com/docs) documentation
- [Axios](https://github.com/axios/axios/blob/master/README.md) documentation
- [FormSubmit](https://formsubmit.co/api-documentation) documentation