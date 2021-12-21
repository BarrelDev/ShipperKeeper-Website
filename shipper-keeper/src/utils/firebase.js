import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    if (typeof window !== "undefined") {
      app.initializeApp(firebaseConfig)
      this.auth = app.auth()
    }
  }

  signInWithPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
}

export default Firebase