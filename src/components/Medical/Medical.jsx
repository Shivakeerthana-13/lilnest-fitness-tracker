import React from 'react'

const Medical = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Medical</h2>
      <p className="section-sub">Reports, appointments, supplements, and SOS.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card"><h3 className="feature-title">Reports</h3><p>Upload & view scans</p></div>
        <div className="card"><h3 className="feature-title">Reminders</h3><p>Supplements & checkups</p></div>
      </div>
    </section>
  )
}

export default Medical


