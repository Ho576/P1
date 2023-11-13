import React from 'react'
import {Route , Routes } from 'react-router-dom'
import Index from "./component/users/Index.jsx"
import Create from "./component/users/Create.jsx"
import Details from './component/users/Details.jsx'
import Home from './component/home/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/user/index' element={<Index/>} />
      <Route path='/user/create' element={<Create/>} />
      <Route path='/user/:id' element={<Details/>} />
      <Route path='*' element={<h2>user not found</h2>} />
    </Routes>
  )
}
