import React from 'react'

export default function EmailPasswordForms({ onSignUp, onSignIn, onPasswordReset, loading }) {
  const [mode, setMode] = React.useState('signin') // 'signin' | 'signup' | 'reset'
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (mode === 'signin') onSignIn(email, password)
      else if (mode === 'signup') onSignUp(email, password)
      else onPasswordReset(email)
    }
  }

  return (
    <div className="epf-root">
      <div className="epf-tabs" role="tablist" aria-label="Authentication methods">
        <button
          role="tab"
          aria-selected={mode === 'signin'}
          className={`epf-tab ${mode === 'signin' ? 'active' : ''}`}
          onClick={() => setMode('signin')}
        >
          Sign in
        </button>
        <button
          role="tab"
          aria-selected={mode === 'signup'}
          className={`epf-tab ${mode === 'signup' ? 'active' : ''}`}
          onClick={() => setMode('signup')}
        >
          Sign up
        </button>
        <button
          role="tab"
          aria-selected={mode === 'reset'}
          className={`epf-tab ${mode === 'reset' ? 'active' : ''}`}
          onClick={() => setMode('reset')}
        >
          Reset
        </button>
      </div>

      <div className="epf-form">
        <label className="sr-only" htmlFor="epf-email">Email</label>
        <input
          id="epf-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="epf-input"
          aria-label="Email address"
        />

        {mode !== 'reset' && (
          <>
            <label className="sr-only" htmlFor="epf-password">Password</label>
            <input
              id="epf-password"
              type="password"
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="epf-input"
              aria-label="Password"
            />
          </>
        )}

        <div className="epf-actions">
          {mode === 'signup' && (
            <button
              className="epf-btn primary"
              disabled={loading}
              onClick={() => onSignUp(email, password)}
              aria-busy={loading}
            >
              {loading ? 'Creating...' : 'Create account'}
            </button>
          )}

          {mode === 'signin' && (
            <button
              className="epf-btn primary"
              disabled={loading}
              onClick={() => onSignIn(email, password)}
              aria-busy={loading}
            >
              {loading ? 'Signing in...' : 'Sign in with email'}
            </button>
          )}

          {mode === 'reset' && (
            <button
              className="epf-btn primary"
              disabled={loading}
              onClick={() => onPasswordReset(email)}
              aria-busy={loading}
            >
              {loading ? 'Sending...' : 'Send reset email'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
