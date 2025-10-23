import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1 className="hero-title">From Bump to Baby: Personalized Wellness & Growth</h1>
          <p className="hero-sub">
            LILNEST unifies pregnancy-safe fitness, culturally-aware nutrition, mental wellness,
            growth monitoring, and medical tracking for moms and kids.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard" className="btn btn-primary">Open Dashboard</Link>
            <Link to="/auth" className="btn btn-secondary">Get Started</Link>
          </div>
          <div className="features-grid">
            <div className="card feature-card">
              <h3 className="feature-title">Fitness</h3>
              <p className="feature-desc">Trimester-safe exercises and postnatal routines designed by experts.</p>
              <div className="feature-actions"><Link className="link" to="/fitness">Explore fitness →</Link></div>
            </div>
            <div className="card feature-card">
              <h3 className="feature-title">Nutrition</h3>
              <p className="feature-desc">Culturally-aware meal ideas, hydration tracking, and supplement reminders.</p>
              <div className="feature-actions"><Link className="link" to="/nutrition">Plan meals →</Link></div>
            </div>
            <div className="card feature-card">
              <h3 className="feature-title">Wellness</h3>
              <p className="feature-desc">Mindfulness, sleep hygiene, and stress-awareness for mom and baby.</p>
              <div className="feature-actions"><Link className="link" to="/wellness">Feel better →</Link></div>
            </div>
            <div className="card feature-card">
              <h3 className="feature-title">Growth</h3>
              <p className="feature-desc">Milestones, growth charts, and early developmental insights.</p>
              <div className="feature-actions"><Link className="link" to="/growth">Track growth →</Link></div>
            </div>
            <div className="card feature-card">
              <h3 className="feature-title">Medical</h3>
              <p className="feature-desc">Appointments, vitals, and doctor-approved guidance in one place.</p>
              <div className="feature-actions"><Link className="link" to="/medical">Manage care →</Link></div>
            </div>
            <div className="card feature-card">
              <h3 className="feature-title">Community</h3>
              <p className="feature-desc">Tips from peers and access to certified experts when you need them.</p>
              <div className="feature-actions"><Link className="link" to="/community">Connect now →</Link></div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  )
}

export default Home


