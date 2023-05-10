// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyApI0nWJsFF10l2_zobVhqgY0T5WHbaL1M',
  authDomain: 'ai-frontends.firebaseapp.com',
  projectId: 'ai-frontends',
  storageBucket: 'ai-frontends.appspot.com',
  messagingSenderId: '985918533046',
  appId: '1:985918533046:web:9e1b64fed5bd5184dc2517',
  measurementId: 'G-RCS5F6Z6S6',
};

// Initialize Firebase
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const dbFirebase = getFirestore(firebaseApp);
export { firebaseApp, dbFirebase };
