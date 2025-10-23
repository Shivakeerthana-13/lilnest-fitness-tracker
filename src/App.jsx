import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Common/Layout'
import Home from './components/Common/Home'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Fitness from './components/Fitness/Fitness'
import Nutrition from './components/Nutrition/Nutrition'
import Wellness from './components/Wellness/Wellness'
import Growth from './components/Growth/Growth'
import Medical from './components/Medical/Medical'
import Community from './components/Community/Community'
import Expert from './components/Expert/Expert'
import Profile from './components/Profile/Profile'
import RequireAuth from './components/Common/RequireAuth'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
  <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/community" element={<Community />} />
        <Route path="/expert" element={<Expert />} />
  <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App


