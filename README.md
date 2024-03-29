# **Personal Portfolio**
## This is a personal portfolio application built with vue js

## **Features**
- Showcase personal information, skills, life story and projects
- Responsive design for mobile and desktop

## Installation
1. Clone the repository: `git clone https://github.com/johnmichealacera/JM-Portfolio.git`
2. Navigate to the project directory: `cd jm-personal-portfolio`
3. Install dependencies: `npm install`

### Environment Variables
The application requires the following environment variable to be set:

- `VUE_APP_FORM_EMAIL_CODE`: Your form email code from formsubmit.io.
- `VUE_APP_REDIRECT_URL`: Your email redirect url to be used when email has been sent.
- `VUE_APP_PORTFOLIO_BACKEND`: The personal portfolio backend built in express.
- `VUE_APP_USER_ID`: The ID of the user you want to showcase in the portfolio

Create a `.env` file in the root directory of the project with the keys above that serves your requirement

## Usage
1. Start the development server: `npm run serve`
2. Navigate to `http://localhost:8080/` in your browser
## Built With
- [Vue.js](https://vuejs.org/v2/guide/) - The web framework used
- [Vue Router](https://router.vuejs.org/) - Router for single-page applications
- [Axios](https://github.com/axios/axios/blob/master/README.md) - Promise-based HTTP client
- [Tailwind](https://tailwindcss.com/docs) - Front-end component library
## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request
## License
This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/license/mit/) file for details.

## Acknowledgments
- [Vue.js](https://vuejs.org/v2/guide/) documentation
- [Tailwind](https://tailwindcss.com/docs) documentation
- [Axios](https://github.com/axios/axios/blob/master/README.md) documentation
- [FormSubmit](https://formsubmit.co/api-documentation) documentation