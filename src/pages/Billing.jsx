// src/pages/Billing.jsx
import React from 'react';

function Billing() {
  const plans = [
    { name: 'Starter', price: '$9/mo', features: ['1000 OTPs', 'Email & SMS', 'Basic Support'] },
    { name: 'Pro', price: '$29/mo', features: ['10,000 OTPs', 'All Channels', 'Priority Support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited OTPs', 'Dedicated Server', '24/7 Support'] },
  ];

  return (
    <div className="min-h-screen bg-[#e43d30] text-white px-6 py-10">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          MPASS™ Billing
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/docs" className="hover:underline">Docs</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#e43d30] via-orange-400 to-[#e43d30] bg-clip-text text-transparent">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white text-[#e43d30] p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-lg font-semibold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-[#ff6c0e] text-white px-4 py-2 rounded hover:bg-[#e65c00]">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Billing;
