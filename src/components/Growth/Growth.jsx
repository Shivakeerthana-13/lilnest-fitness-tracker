import React from 'react'

const Growth = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Growth & Progress</h2>
      <p className="section-sub">Charts for baby bump, child height/weight/BMI, and milestones.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card"><h3 className="feature-title">Mother</h3><p>Weight & BP trends</p></div>
        <div className="card"><h3 className="feature-title">Child</h3><p>Growth chart & milestones</p></div>
      </div>
    </section>
  )
}

export default Growth


