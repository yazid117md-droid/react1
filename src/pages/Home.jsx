import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome to Our Modern React Website
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Built with React, Vite, and Tailwind CSS. This is a fully responsive
            website template that you can use as a starting point for your projects.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/about"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
            >
              Learn More
            </Link>
            <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5h13v7H4V5zm0 9h10v2H4v-2zm0-4h10v2H4v-2zm0 8h10v2H4v-2zm16-1v-5h2v5h-2zm0-7v-2h2v2h-2z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Design</h3>
              <p className="text-gray-600">
                Clean, modern design that works on all devices and screen sizes.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized for speed with Vite and modern build tools.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Customize</h3>
              <p className="text-gray-600">
                Well-structured code that's easy to modify and extend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home