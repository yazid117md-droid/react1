import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // تأكد أن الملف موجود فعلاً بهذا الاسم والمسار

function Navbar({ links }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* شعار mPass Lite */}
        <div className="flex items-center gap-2">
          {logo ? (
            <img src={logo} alt="mPass Lite Logo" className="h-24 w-48" />
          ) : (
            <span className="text-xl font-bold text-gray-800">mPass Lite</span>
          )}
        </div>

        {/* روابط التنقل */}
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
