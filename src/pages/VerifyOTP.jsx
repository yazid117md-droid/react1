// src/pages/TryOTP.jsx
import React from 'react';

function TryOTP() {
  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Try OTP
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/verify" className="hover:underline">Verify</a>
        </nav>
      </header>

      <div className="max-w-md mx-auto bg-white text-[#e43d30] p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Send OTP Code
        </h2>

        <form className="space-y-4">
          <input type="text" placeholder="Phone or Email" className="w-full px-4 py-2 border rounded" />
          <select className="w-full px-4 py-2 border rounded">
            <option>SMS</option>
            <option>Email</option>
            <option>WhatsApp</option>
            <option>Push</option>
          </select>
          <button className="w-full bg-[#ff6c0e] text-white py-2 rounded hover:bg-[#e65c00]">
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default TryOTP;
