export const environment = {
  production: false,
  auth0: {
    domain: 'dev-4s6xdtnuxjv0hf1v.us.auth0.com',
    clientId: 'ZeMaVhRTGggp8SQ0xP50GHiop9czghey',
    authorizationParams: {
      redirect_uri: 'http://localhost:4200/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};
