import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Card = ({ title, children }) => (
  <div className="card feature-card">
    <h3 className="feature-title">{title}</h3>
    {children}
  </div>
)

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <section className="container section">
      <h2 className="section-title">Dashboard</h2>
      <p className="muted" style={{ marginTop: 8 }}>{user ? `Welcome back, ${user.displayName || user.email.split('@')[0]}!` : 'Your personalized plans will appear here when you sign in.'}</p>
      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <Card title="Today’s Fitness Plan"><p>Yoga • Stretching • Walk 30 min</p></Card>
        <Card title="Meal Plan"><p>Iron-rich breakfast • Hydration 8 glasses</p></Card>
        <Card title="Baby Update"><p>Week-by-week growth insights</p></Card>
        <Card title="Reminders"><p>Folic acid • OB appointment Fri 3pm</p></Card>
        <Card title="Mood & Journal"><p>Log how you feel today</p></Card>
        <Card title="Progress"><p>Weight, BP, steps overview</p></Card>
      </div>
    </section>
  )
}

export default Dashboard


