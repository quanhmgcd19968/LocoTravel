import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAE6jtVIiaTjlP-u0QXRd5YUMiTmkcof8o",
    authDomain: "loco-travel-9de2e.firebaseapp.com",
    databaseURL: "https://loco-travel-9de2e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "loco-travel-9de2e",
    storageBucket: "loco-travel-9de2e.appspot.com",
    messagingSenderId: "667799291285",
    appId: "1:667799291285:web:b675dcbe3884345631a29c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };