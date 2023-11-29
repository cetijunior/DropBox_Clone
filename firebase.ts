import {getApp, getApps, initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCTAlvdbmHcF4UxhVySgXUjcXR-AXsRpbQ",
    authDomain: "dropbox-8d95e.firebaseapp.com",
    projectId: "dropbox-8d95e",
    storageBucket: "dropbox-8d95e.appspot.com",
    messagingSenderId: "74627099598",
    appId: "1:74627099598:web:18e037344b23436988599f"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };