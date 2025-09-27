// src/pages/Channels.jsx
import React from 'react';

function Channels() {
  const channels = [
    { name: 'SMS', status: 'Active', icon: '📱' },
    { name: 'Email', status: 'Active', icon: '📧' },
    { name: 'WhatsApp', status: 'Inactive', icon: '💬' },
    { name: 'Push Notification', status: 'Active', icon: '🔔' },
  ];

  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          MPASS™
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/docs" className="hover:underline">Docs</a>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Available Channels
        </h2>

        <ul className="space-y-4">
          {channels.map((channel, index) => (
            <li key={index} className="bg-white text-[#e43d30] p-4 rounded shadow flex justify-between items-center font-medium">
              <span>{channel.icon} {channel.name}</span>
              <span className={channel.status === 'Active' ? 'text-green-600' : 'text-gray-400'}>
                {channel.status}
              </span>
            </li>
          ))}
        </ul>

        <button className="mt-10 bg-[#ff6c0e] text-white px-6 py-2 rounded hover:bg-[#e65c00]">
          Manage Channels
        </button>
      </div>
    </div>
  );
}

export default Channels;
