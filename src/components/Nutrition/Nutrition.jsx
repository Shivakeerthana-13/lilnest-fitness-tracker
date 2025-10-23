import React from 'react'

const Nutrition = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Nutrition</h2>
      <p className="section-sub">AI-suggested meals with nutrient focus and cultural relevance.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3 className="feature-title">Today’s Meals</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Breakfast: Poha + fruit</li>
            <li>Lunch: Dal, rice, veggies</li>
            <li>Dinner: Roti + paneer</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="feature-title">Hydration & Supplements</h3>
          <p>Water: 8/10 • Folic acid: due 8pm</p>
        </div>
      </div>
    </section>
  )
}

export default Nutrition


