import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// Keep this file focused on Firebase initialization only.

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

function ensureConfigPresent(config) {
  const missing = Object.entries(config)
    .filter(([_, v]) => !v)
    .map(([k]) => k)
  if (missing.length > 0) {
    // Throwing helps surface clear error in dev
    throw new Error(
      `Missing Firebase env variables: ${missing.join(', ')}. ` +
        'Create a .env file with Vite-prefixed keys. See .env.example.'
    )
  }
}

let app
try {
  ensureConfigPresent(firebaseConfig)
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
} catch (e) {
  // If initialization fails (missing env, etc.) avoid throwing during imports.
  console.error('Firebase initialization error', e)
  app = undefined
}

// temporary debug — remove after checking
console.log('FIREBASE KEYS:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
})

export const firebaseApp = app
export const auth = app ? getAuth(app) : undefined
export const googleProvider = app ? new GoogleAuthProvider() : undefined

// Example UI components should live in React component files (e.g. inside
// src/components/) and must not be placed in this module. This file only
// initializes and exports Firebase app/auth objects.

// Note: UI components (like a logout button) belong in `src/components/` so they
// can import React hooks and router helpers without creating circular imports.