import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to mPass Lite
        </h1>
        <p className="text-gray-600 mb-6">
          Secure and seamless authentication for your digital experience.
        </p>
        <Link
          to="/signup"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero;