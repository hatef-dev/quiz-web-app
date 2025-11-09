import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6xOdV06yWuSrf8PZ_kGiGAq4Q6IrRAso',
  authDomain: 'quiz-c4929.firebaseapp.com',
  projectId: 'quiz-c4929',
  storageBucket: 'quiz-c4929.firebasestorage.app',
  messagingSenderId: '82904369570',
  appId: '1:82904369570:web:2430eba189cebe83ffcafb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
