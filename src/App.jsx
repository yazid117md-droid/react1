import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyOTP from './pages/VerifyOTP';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';

function App() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
    { name: 'Start', path: '/signup' },
    { name: 'DashBoard', path: '/dashboard'} // زر التسجيل
  ];

  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar links={navLinks} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<VerifyOTP />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer links={footerLinks} />
      </div>
    </Router>
  );
}

export default App;