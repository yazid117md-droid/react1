// src/pages/Onboarding.jsx
import React from 'react';

function Onboarding() {
  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Project Setup
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/docs" className="hover:underline">Docs</a>
        </nav>
      </header>

      <div className="max-w-2xl mx-auto bg-white text-[#e43d30] p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Let’s Get Started
        </h2>

        <ol className="list-decimal space-y-4 pl-5 text-left">
          <li>Choose your preferred channel (SMS, Email, WhatsApp, Push).</li>
          <li>Configure your API keys and callback URLs.</li>
          <li>Test your OTP flow using the Try OTP page.</li>
          <li>Monitor usage and manage billing from the dashboard.</li>
        </ol>

        <div className="text-center mt-8">
          <a href="/dashboard" className="bg-[#ff6c0e] text-white px-6 py-2 rounded hover:bg-[#e65c00]">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
