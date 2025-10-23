import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function LogoutButton() {
  const { signOutUser } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOutUser()
      navigate('/', { replace: true })
    } catch (e) {
      console.error('Sign out failed', e)
    }
  }

  return (
    <button className="btn" onClick={handleSignOut}>
      Sign out
    </button>
  )
}
