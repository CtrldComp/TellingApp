import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  projectId: '<YOUR-PROJECT-ID>',
  storageBucket: '<YOUR-STORAGE-BUCKET>',
  messagingSenderId: '<YOUR-MESSAGING-SENDER-ID>',
  appId: '<YOUR-APP-ID>',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

