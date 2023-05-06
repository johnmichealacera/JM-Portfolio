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

  isAuthenticated() {
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

  checkSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('User is logged in');
        console.log('authResult', authResult);
        this.setSession(authResult);
        this.getUserProfile(); // add this line to get user profile after setting session
        // do something with the authentication tokens
        return authResult;
      } else if (err) {
        console.log('err', err);
        // handle the error
      } else {
        console.log('User is not logged in');
        // redirect to the login page
      }
    });
  }


  getUserProfile() {
    const userProfile = localStorage.getItem('user_profile');
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  }
}

export default new Auth();

