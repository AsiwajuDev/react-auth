import auth0 from "auth0-js";

export default class Auth {
  //Export Auth0 credentials for App Use
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  //Login Method
  login = () => {
    this.auth0.authorize();
  };
}
