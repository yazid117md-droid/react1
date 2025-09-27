import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        
        {/* قسم الخدمات */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#e43d30] transition">Branding</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Design</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Marketing</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Advertisement</a></li>
          </ul>
        </div>

        {/* قسم الشركة */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#e43d30] transition">About us</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Contact</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Jobs</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Press kit</a></li>
          </ul>
        </div>

        {/* قسم القانوني */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#e43d30] transition">Terms of use</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Privacy policy</a></li>
            <li><a href="#" className="hover:text-[#e43d30] transition">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} mPass Lite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
