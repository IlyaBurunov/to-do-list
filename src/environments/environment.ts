// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDhbS1LNc8YG8HN9LL4Va5iIhkd9t22Sbg",
    authDomain: "to-do-list-cb891.firebaseapp.com",
    databaseURL: "https://to-do-list-cb891.firebaseio.com",
    projectId: "to-do-list-cb891",
    storageBucket: "to-do-list-cb891.appspot.com",
    messagingSenderId: "755487945587"
  }
};
