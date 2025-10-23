import React from 'react'

const Expert = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Experts</h2>
      <p className="section-sub">Consult certified doctors, dieticians, and pediatricians.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card"><h3 className="feature-title">Consultations</h3><p>Chat or book appointments</p></div>
        <div className="card"><h3 className="feature-title">Uploads</h3><p>Prescriptions for review</p></div>
      </div>
    </section>
  )
}

export default Expert


