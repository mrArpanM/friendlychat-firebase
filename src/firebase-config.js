/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyD2MqT7abzyT40_J3UccYvltAtsYhfTMDM",
  authDomain: "friendlychat-cfc33.firebaseapp.com",
  projectId: "friendlychat-cfc33",
  storageBucket: "friendlychat-cfc33.appspot.com",
  messagingSenderId: "1081128310090",
  appId: "1:1081128310090:web:c03a33a011748f72a11db3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}