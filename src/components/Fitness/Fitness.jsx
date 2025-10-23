import React from 'react'

const Fitness = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Fitness</h2>
      <p className="section-sub">Trimester-safe and kid-friendly workouts.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3 className="feature-title">Today</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Breathing exercises</li>
            <li>Stretch routine</li>
            <li>Walk 30 min</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="feature-title">Progress</h3>
          <p>Steps: 5,200 • Sessions: 4/week</p>
        </div>
      </div>
    </section>
  )
}

export default Fitness


