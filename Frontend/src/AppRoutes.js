import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Users from './Pages/Users/Users';
import Create from './Pages/Create';
import Update from './Pages/Update';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/edit/:id' element={<Update/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default AppRoutes
