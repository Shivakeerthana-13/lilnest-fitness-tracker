import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import { useAuth } from '../../contexts/AuthContext'
const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    {children}
  </NavLink>
)

const Layout = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="site-header">
        <div className="container site-header-inner">
          <div className="brand">
            <div className="brand-badge" />
            <span>LILNEST</span>
          </div>
          <nav className="nav">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/fitness">Fitness</NavItem>
            <NavItem to="/nutrition">Nutrition</NavItem>
            <NavItem to="/wellness">Wellness</NavItem>
            <NavItem to="/growth">Growth</NavItem>
            <NavItem to="/medical">Medical</NavItem>
            <NavItem to="/community">Community</NavItem>
            <NavItem to="/expert">Experts</NavItem>
            <NavItem to="/profile">Profile</NavItem>
            {!user && <NavItem to="/auth">Login</NavItem>}
            {user && (
              <div className="nav-right">
                <div className="user-badge">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="avatar" className="avatar" />
                  ) : (
                    <div className="avatar" style={{ background: '#ec4899', display: 'inline-block' }} />
                  )}
                  <div className="user-name">{user.displayName || user.email}</div>
                </div>
                <LogoutButton />
              </div>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} LILNEST. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout


