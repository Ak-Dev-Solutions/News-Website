// simple helper for server-side admin checks (expand as needed)
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'

const serverConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

if (!getApps().length) initializeApp(serverConfig)
const db = getFirestore()

export async function isAdmin(uid) {
  try {
    const d = await getDoc(doc(db, 'users', uid))
    return d.exists() && d.data().role === 'admin'
  } catch (e) {
    return false
  }
}