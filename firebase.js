import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REDIRECT_API_KEY,
    authDomain: "loco-travel-9de2e.firebaseapp.com",
    projectId: "loco-travel-9de2e",
    storageBucket: "loco-travel-9de2e.appspot.com",
    messagingSenderId: "667799291285",
    appId: "1:667799291285:web:b675dcbe3884345631a29c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);