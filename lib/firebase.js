import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const clientConfig = {
  apiKey: "AIzaSyBh6uHjpULtiDan6tBJD80cSBYrR-EPEqk",
  authDomain: "usnews-db.firebaseapp.com",
  projectId: "usnews-db",
  storageBucket: "usnews-db.firebasestorage.app",
  messagingSenderId: "500046338236",
  appId: "1:500046338236:web:4201d15ff17e831c1d18b9"
}

const app = !getApps().length ? initializeApp(clientConfig) : getApps()[0]
export const auth = getAuth(app)
export const db = getFirestore(app)