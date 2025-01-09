import React from 'react'
import UserProvider from './context/UserContext'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <UserProvider>
       
      </UserProvider>
    </div>
  )
}

export default App