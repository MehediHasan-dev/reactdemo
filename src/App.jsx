import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Header from './component/Header'

const App = () => {
  return (

    <Router>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>

    </Router>

  )
}

export default App
