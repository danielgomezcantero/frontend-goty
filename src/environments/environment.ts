// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:'http://localhost:5000/firestore-grafica-1ff32/us-central1',
  firebase: {
    apiKey: '<your-key>',
    authDomain: 'firestore-grafica-1ff32.firebaseapp.com',
    databaseURL: 'https://firestore-grafica-1ff32.firebaseio.com',
    projectId: 'firestore-grafica-1ff32',
    storageBucket: 'firestore-grafica-1ff32.appspot.com',
    messagingSenderId: '549084193667',
    appId: '1:549084193667:web:ccf08ce31be8c9a1c6ccb6'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
