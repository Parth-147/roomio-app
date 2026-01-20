// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe4qKoMbia4kR8nEk2qxITvpKZz1XMO9c",
  authDomain: "roomio-admin.firebaseapp.com",
  projectId: "roomio-admin",
  storageBucket: "roomio-admin.firebasestorage.app",
  messagingSenderId: "607134762324",
  appId: "1:607134762324:web:37cf93ccb9461a9a7374c1",
  measurementId: "G-YPCXV4MQ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);