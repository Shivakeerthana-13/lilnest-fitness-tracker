import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import EmailPasswordForms from './EmailPasswordForms'
import { useToast } from '../../contexts/ToastContext'

const Auth = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    resetPassword,
  } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()

  const handleGoogle = async () => {
    setError('')
    try {
      setLoading(true)
      await signInWithGoogle()
      navigate('/dashboard')
      toast.show('Signed in successfully', 'success')
    } catch (e) {
      console.error('Firebase auth error', e)
      toast.show(e.message || 'Sign-in failed', 'error')
      setError(`${e.code || 'error'}: ${e.message || 'Sign-in failed'}`)
    } finally {
      setLoading(false)
    }
  }

  // Email / password handlers
  const handleSignUp = async (email, password) => {
    setError('')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.show('Enter a valid email', 'error')
      return
    }
    if ((password || '').length < 6) {
      toast.show('Password should be at least 6 characters', 'error')
      return
    }
    try {
      setLoading(true)
  await signUpWithEmail(email, password)
  navigate('/dashboard')
      toast.show('Account created — welcome!', 'success')
    } catch (e) {
      console.error('Sign up error', e)
      toast.show(e.message || 'Sign up failed', 'error')
      setError(`${e.code || 'error'}: ${e.message || 'Sign up failed'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async (email, password) => {
    setError('')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.show('Enter a valid email', 'error')
      return
    }
    try {
      setLoading(true)
  await signInWithEmail(email, password)
  navigate('/dashboard')
      toast.show('Signed in successfully', 'success')
    } catch (e) {
      console.error('Sign in error', e)
      toast.show(e.message || 'Sign in failed', 'error')
      setError(`${e.code || 'error'}: ${e.message || 'Sign in failed'}`)
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordReset = async (email) => {
    setError('')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.show('Enter a valid email', 'error')
      return
    }
    try {
      setLoading(true)
      await resetPassword(email)
      toast.show('Password reset email sent — check your inbox', 'success')
      setError('Password reset email sent (check your inbox).')
    } catch (e) {
      console.error('Password reset error', e)
      toast.show(e.message || 'Password reset failed', 'error')
      setError(`${e.code || 'error'}: ${e.message || 'Password reset failed'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="auth-hero">
        <div>
          <h1 className="auth-hero-title">Welcome to LILNEST</h1>
          <p className="auth-hero-sub">Personalized fitness, nutrition and wellness plans for mothers and babies.</p>
          <div style={{ marginTop: 20 }}>
            <svg width="100%" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 420, borderRadius: 12 }}>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffe4f0" />
                  <stop offset="100%" stopColor="#e0f2fe" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#g1)" rx="16" />
              <g transform="translate(40,40)">
                <circle cx="80" cy="80" r="40" fill="#ec4899" opacity="0.95" />
                <rect x="160" y="40" width="220" height="20" rx="8" fill="#fff" opacity="0.9" />
                <rect x="160" y="74" width="220" height="14" rx="6" fill="#fff" opacity="0.85" />
                <rect x="0" y="160" width="460" height="12" rx="6" fill="#ffffff" opacity="0.9" />
                <rect x="0" y="184" width="300" height="12" rx="6" fill="#ffffff" opacity="0.85" />
                <g transform="translate(340,120)">
                  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0ea5e9" opacity="0.95" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="auth-card">
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: 0 }}>Login / Sign Up</h2>
          <p style={{ marginTop: 8, color: 'rgba(30,41,59,.85)' }}>Authenticate to access your personalized plans.</p>
          <div className="actions">
            <button onClick={handleGoogle} disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
              {loading ? 'Signing in...' : 'Continue with Google'}
            </button>

            <hr style={{ margin: '24px 0' }} />

            <EmailPasswordForms
              onSignUp={handleSignUp}
              onSignIn={handleSignIn}
              onPasswordReset={handlePasswordReset}
              loading={loading}
            />

            {error ? <p className="text-danger" style={{ marginTop: 8 }}>{error}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth
// EmailPasswordForms lives in its own file `EmailPasswordForms.jsx`


