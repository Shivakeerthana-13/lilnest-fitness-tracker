import React from 'react'

const Community = () => {
  return (
    <section className="container section">
      <h2 className="section-title">Community & Learning</h2>
      <p className="section-sub">Forums, blogs, expert tips, and saved content.</p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card"><h3 className="feature-title">Forums</h3><p>Discuss and share</p></div>
        <div className="card"><h3 className="feature-title">Articles</h3><p>Verified knowledge hub</p></div>
      </div>
    </section>
  )
}

export default Community


