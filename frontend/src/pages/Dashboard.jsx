import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Dashboard() {
    const{ User} = useContext(UserContext);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="text-center bg-white p-8 shadow-md rounded-lg">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Welcome, <span className="text-blue-500">{User}</span>!
    </h1>
    <p className="text-gray-600">
      You have successfully logged in. 
    </p>
  </div>
</div>

  )
}
