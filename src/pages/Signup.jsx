// src/pages/Signup.jsx
import React from 'react';

function Signup() {
  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Create Account
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </header>

      <div className="max-w-md mx-auto bg-white text-[#e43d30] p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Sign Up
        </h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
          <button className="w-full bg-[#ff6c0e] text-white py-2 rounded hover:bg-[#e65c00]">
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-[#e43d30] font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
