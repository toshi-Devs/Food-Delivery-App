// firebase.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0b_rTfD8H4Rvme7kSywKHTNxc1DqMplc",
    authDomain: "restaurant-app-fd65d.firebaseapp.com",
    projectId: "restaurant-app-fd65d",
    storageBucket: "restaurant-app-fd65d.appspot.com",
    messagingSenderId: "40412847876",
    appId: "1:40412847876:web:a1c6b896bf5a0fce3b3a51"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;
