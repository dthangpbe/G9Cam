// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkXKaTbh0CZaTGhV-dyoTaBHZ7WdCYvPU",
    authDomain: "g9cam-b97af.firebaseapp.com",
    projectId: "g9cam-b97af",
    storageBucket: "g9cam-b97af.firebasestorage.app",
    messagingSenderId: "1068545171421",
    appId: "1:1068545171421:web:da89697b6c8f73187da034"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Auth
const auth = firebase.auth();

console.log('Firebase initialized successfully!');
