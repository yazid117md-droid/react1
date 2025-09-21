// Main App component with React Router setup
import React from 'react' 
import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ]

  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar links={navLinks} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer links={footerLinks} />
      </div>
    </Router>
  )
}

export default App