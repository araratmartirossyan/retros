import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const {
  VUE_APP_API_KEY,
  VUE_APP_AUTH_DOMAIN,
  VUE_APP_DATABASE_URL,
  VUE_APP_PROJECT_ID,
  VUE_APP_STORAGE_BUCKET,
  VUE_APP_MESSAGING_SENDER_ID,
  VUE_APP_APP_ID
} = process.env

const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATABASE_URL,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
  appId: VUE_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

export const initFirebase = () => {
  console.warn(firebaseConfig)
  firebase.initializeApp(firebaseConfig)
}


/* firebase authentication methods */
export const fireAuth = firebase.auth()
export const signOut = async () => {
  const signedOut = await fireAuth.signOut()
  localStorage.removeItem('accessToken')
  localStorage.removeItem('uid')
  return signedOut
}

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export const googleAuth = () => fireAuth.signInWithPopup(googleAuthProvider)

export const emailPasswordAuth = (email, password) => fireAuth.signInWithEmailAndPassword(email, password)

export const onAuth = nextOrObserver => fireAuth.onAuthStateChanged(nextOrObserver)

/* firebase database methods */

export const getMarks = retroId => firebase.database()
  .ref(`marks/${retroId}`)

export const getRetros = () => firebase.database()
  .ref('retros')

export const addRetro = (dataBase, data) => dataBase.push(data)

export default {
  initFirebase,
  fireAuth,
  signOut,
  googleAuth,
  emailPasswordAuth,
  onAuth,
  getMarks,
  getRetros,
  addRetro
}
