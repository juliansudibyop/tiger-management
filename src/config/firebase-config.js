import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCN4yCx-xYcoA4NphkadztBLL2xL1jsIa4',
  authDomain: 'tiger-management.firebaseapp.com',
  projectId: 'tiger-management',
  storageBucket: 'tiger-management.appspot.com',
  messagingSenderId: '564522941843',
  appId: '1:564522941843:web:0cbae96995569cee7f7c66',
  measurementId: 'G-6LBYFH48XD',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
