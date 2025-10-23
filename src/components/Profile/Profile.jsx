
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { updateProfile } from 'firebase/auth'

const Profile = () => {
  const { user, loading } = useAuth()
  const [name, setName] = useState(user?.displayName || '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!user) return
    try {
      setSaving(true)
      await updateProfile(user, { displayName: name })
      // small delay to reflect change in UI
      setTimeout(() => setSaving(false), 300)
    } catch (e) {
      console.error('Update profile error', e)
      setSaving(false)
    }
  }

  return (
    <section className="container section">
      <h2 className="section-title">Profile & Personalization</h2>
      <p className="section-sub">Age, trimester, allergies, dietary preferences.</p>

      {loading ? (
        <p>Loading profile…</p>
      ) : user ? (
        <div style={{ marginTop: 16 }}>
          <div className="card" style={{ padding: 16 }}>
            <h3 className="feature-title">Account</h3>
            <p><strong>Name:</strong> {user.displayName || '—'}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <div style={{ marginTop: 12 }}>
              <input value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Display name" />
              <button className="btn btn-primary" style={{ marginLeft: 8 }} onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save name'}
              </button>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: 16 }}>
            <div className="card"><h3 className="feature-title">Mother</h3><p>Trimester details & history</p></div>
            <div className="card"><h3 className="feature-title">Child</h3><p>Age group & preferences</p></div>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 16 }}>You are not signed in. Go to the Login page to sign in.</p>
      )}
    </section>
  )
}

export default Profile


