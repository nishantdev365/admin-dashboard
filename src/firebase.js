import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7fSw4_W8p6Xryw5WbxIAQlqsSLLNqm-8",
  authDomain: "dashboard-auth-7afa3.firebaseapp.com",
  projectId: "dashboard-auth-7afa3",
  storageBucket: "dashboard-auth-7afa3.appspot.com",
  messagingSenderId: "707891331061",
  appId: "1:707891331061:web:cc9d8eb5d760a17629aabc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
