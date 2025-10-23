import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from './firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'

const AuthContext = createContext({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      // Firebase not configured; don't attempt to subscribe
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u || null)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    if (!auth || !googleProvider) throw new Error('Firebase is not configured')
    return signInWithPopup(auth, googleProvider)
  }

  const signUpWithEmail = async (email, password) => {
    if (!auth) throw new Error('Firebase is not configured')
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithEmail = async (email, password) => {
    if (!auth) throw new Error('Firebase is not configured')
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPassword = async (email) => {
    if (!auth) throw new Error('Firebase is not configured')
    return sendPasswordResetEmail(auth, email)
  }

  const signOutUser = async () => {
    if (!auth) return
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithGoogle,
      signOutUser,
      signUpWithEmail,
      signInWithEmail,
      resetPassword,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
