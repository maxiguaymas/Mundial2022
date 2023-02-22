// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  endpoints: {
    login: 'http://localhost:5000/api/login',
    register: 'http://localhost:5000/api/register',
    user: 'http://localhost:5000/api/album-user/',
    sendMessage: 'http://localhost:5000/api/send-mail'
    },
  // endpoints: {
  //   login: 'https://mundial-2022-server.onrender.com/api/login',
  //   register: 'https://mundial-2022-server.onrender.com/api/register',
  //   user: 'https://mundial-2022-server.onrender.com/api/album-user/',
  //   sendMessage: 'https://mundial-2022-server.onrender.com/api/send-mail'
  // },
  // endpointslocalhost: {
  //   login: 'http://localhost:5000/api/login',
  //   register: 'http://localhost:5000/api/register',
  //   user: 'http://localhost:5000/api/album-user/',
  //   sendMessage: 'http://localhost:5000/api/send-mail'
  // },
  token: 172,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
