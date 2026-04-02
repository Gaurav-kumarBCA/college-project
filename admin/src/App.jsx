import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Courses from './pages/Courses'
// import Departments from './pages/Departments'
import Hod from './pages/Hod'
const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/courses' element={<Courses/>} />
      {/* <Route path='/departments' element={<Departments/>} /> */}
      <Route path='/hods' element={<Hod/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>    
    </BrowserRouter>
      )
}

export default App