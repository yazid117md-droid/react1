// src/pages/Docs.jsx
import React from 'react';

function Docs() {
  const sections = [
    { title: 'Getting Started', content: 'Learn how to integrate mPass Lite into your project in minutes.' },
    { title: 'API Reference', content: 'Explore all available endpoints, parameters, and response formats.' },
    { title: 'Security & Best Practices', content: 'Understand how to secure your OTP flow and protect user data.' },
    { title: 'Billing & Limits', content: 'Track usage, manage quotas, and understand pricing tiers.' },
  ];

  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          MPASS™ Docs
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/channels" className="hover:underline">Channels</a>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent text-center">
          Developer Documentation
        </h2>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white text-[#e43d30] p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/signup" className="bg-[#ff6c0e] text-white px-6 py-2 rounded hover:bg-[#e65c00]">
            Start Building
          </a>
        </div>
      </div>
    </div>
  );
}

export default Docs;
