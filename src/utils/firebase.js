import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { fetchAndActivate, getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
    apiKey: "AIzaSyAAt7wcYBGFheccsdmgpmjtSzqvbsDg3ik",
    authDomain: "facebook-clone-8485e.firebaseapp.com",
    databaseURL: "https://facebook-clone-8485e-default-rtdb.firebaseio.com",
    projectId: "facebook-clone-8485e",
    storageBucket: "facebook-clone-8485e.appspot.com",
    messagingSenderId: "237397471687",
    appId: "1:237397471687:web:7a61e0e40ee61ce328a9e2",
    measurementId: "G-8DLRC54RW1"
}

export const app = initializeApp(firebaseConfig);
export const remoteConfig = getRemoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 100;  //Remove this line after development.
const isFetched = await fetchAndActivate(remoteConfig);

export const database = getDatabase(app);       /* check this line after implementing React Redux */