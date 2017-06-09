// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  forebaseConfig: {
    apiKey: "AIzaSyD2MjoFTzMfCU3eG_XTsL246rN-Gzg3m8I",
    authDomain: "moorect-movie-quotes.firebaseapp.com",
    databaseURL: "https://moorect-movie-quotes.firebaseio.com",
    projectId: "moorect-movie-quotes",
    storageBucket: "moorect-movie-quotes.appspot.com",
    messagingSenderId: "229844026706"
  }
};
