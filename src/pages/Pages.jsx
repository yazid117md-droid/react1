// src/pages/Pages.jsx
import React from 'react';

function Pages() {
  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'إنشاء حساب', path: '/signup' },
    { name: 'تسجيل الدخول', path: '/login' },
    { name: 'التحقق من الرمز', path: '/verify' },
    { name: 'تجربة OTP', path: '/try' },
    { name: 'لوحة التحكم', path: '/dashboard' },
    { name: 'القنوات', path: '/channels' },
    { name: 'التوثيق', path: '/docs' },
    { name: 'الفوترة', path: '/billing' },
    { name: 'إعداد المشروع', path: '/onboarding' },
    { name: 'من نحن', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b30000] via-[#ffcccc] to-white text-[#1f1f1f] px-6 py-10">
      {/* Navbar */}
      <header className="bg-[#b30000] text-white px-6 py-4 shadow flex justify-between items-center rounded-lg">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="MPASS Logo" className="h-8 w-8 rounded" />
          <h1 className="text-xl font-bold tracking-wide">MPASS™</h1>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a href="/" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">الرئيسية</a>
          <a href="/dashboard" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">لوحة التحكم</a>
          <a href="/docs" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">التوثيق</a>
        </nav>
      </header>

      {/* محتوى الصفحة */}
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-[#b30000] mb-6 text-center">كل الصفحات</h2>

        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index} className="bg-white p-4 rounded shadow border border-gray-200 flex justify-between items-center">
              <span className="text-lg font-medium">{link.name}</span>
              <a href={link.path} className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 text-sm">
                زيارة
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pages;
