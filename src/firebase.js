import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKZQ3IgiObXeH38AEKzW7-bmINncurnBo",
  authDomain: "pc-config-fe057.firebaseapp.com",
  projectId: "pc-config-fe057",
  storageBucket: "pc-config-fe057.appspot.com",
  messagingSenderId: "583973873078",
  appId: "1:583973873078:web:5720b97b8ae7a7c6230d17"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database }; 