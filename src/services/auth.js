import auth0 from 'auth0-js';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.VUE_APP_REDIRECT_URL,
    responseType: 'token id_token',
    scope: 'openid profile email',
  });

  login(options, callback) {
    console.log('options', options);
    this.auth0.login(options, callback);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    this.auth0.logout({
      returnTo: process.env.VUE_APP_LOGOUT_URL,
      clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    });
  }

  loginWithGoogle () {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  async isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('user_id', authResult.idTokenPayload.sub);

    // Save the user profile in local storage
    localStorage.setItem('user_profile', JSON.stringify(authResult.idTokenPayload));
  }

  async checkSession() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, async (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve(authResult);
        } else if (err) {
          console.log('err', err);
          reject(err);
        } else {
          console.log('User is not logged in');
          reject('User is not logged in');
        }
      });
    });
  }
  


  async getUserProfile() {
    const userProfile = localStorage.getItem('user_profile');
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  }
}

export default new Auth();

