import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAjT36ZFYkftUAumTFzbdH4i6r8O98gJ8c",
    authDomain: "nada-b0f38.firebaseapp.com",
    databaseURL: "https://nada-b0f38.firebaseio.com",
    projectId: "nada-b0f38",
    storageBucket: "nada-b0f38.appspot.com",
    messagingSenderId: "90017941913"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const firestore = firebaseApp.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const db = firestore;