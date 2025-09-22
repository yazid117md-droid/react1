import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import VerifyOTP from './pages/VerifyOTP';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
<Route path="/dashboard" element={<Dashboard />} />

function App() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Start', path: '/signup' } // زر التسجيل
  ];

  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar links={navLinks} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<VerifyOTP />} />
          </Routes>
        </main>
        <Footer links={footerLinks} />
      </div>
    </Router>
  );
}

export default App;