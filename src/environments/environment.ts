// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBjJNlCMJmnY6LW383mS5578H-jOIGZ0Ew",
    authDomain: "petshop-7d56f.firebaseapp.com",
    databaseURL: "https://petshop-7d56f.firebaseio.com",
    projectId: "petshop-7d56f",
    storageBucket: "petshop-7d56f.appspot.com",
    messagingSenderId: "114835026296"
  }
};
