import React from 'react'

const Wellness = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Emotional Wellness</h2>
      <p className="section-sub">Guided meditations, breathing, mood tracker, and affirmations.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3 className="feature-title">Meditation</h3>
          <p>5-minute mindful breathing</p>
        </div>
        <div className="card">
          <h3 className="feature-title">Mood Tracker</h3>
          <p>How are you feeling today?</p>
        </div>
      </div>
    </section>
  )
}

export default Wellness


