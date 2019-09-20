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

console.log(process)

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

export const getRoom = async (id) => {
  try {
    const snapshot = await firebase.database().ref(`retros/${id}`).once('value')
    return snapshot.val()
  } catch (err) {
    console.warn(err)
    throw err
  }
}

export const updateRoom = async (id, formData) => {
  try {
    const snapshot = await firebase.database().ref(`retros/${id}`).update(formData)
    return snapshot
  } catch (err) {
    console.warn(err)
    throw err
  }
}

export const addRetro = async (dataBase, data) => {
  try {
    const response = await dataBase.push(data)
    return response
  } catch (err) {
    console.warn('on retro create error', err)
    return err
  }
}

export const removeRetro = async (retroId) => {
  try {
    const response = await firebase.database()
      .ref(`retros/${retroId}`)
      .remove()
    return response
  } catch (err) {
    console.warn('on retro remove error', err)
    return err
  }
}

export default {
  initFirebase,
  fireAuth,
  signOut,
  googleAuth,
  emailPasswordAuth,
  onAuth,
  getMarks,
  getRetros,
  addRetro,
  getRoom,
  removeRetro,
  updateRoom
}
