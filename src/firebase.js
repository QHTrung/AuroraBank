// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjMlUn6ZHnBDDlUQcklMJBpQ3E25OmohM',
  authDomain: 'fir-aurorabank-auth.firebaseapp.com',
  projectId: 'fir-aurorabank-auth',
  storageBucket: 'fir-aurorabank-auth.appspot.com',
  messagingSenderId: '961914344332',
  appId: '1:961914344332:web:f3f830f9ffb7adcc65bca9',
  measurementId: 'G-ST90KY8GZK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
