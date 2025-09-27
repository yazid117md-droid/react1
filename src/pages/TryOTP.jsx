// src/pages/TryOTP.jsx
import React from 'react';

function TryOTP() {
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
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow border border-gray-200">
        <h2 className="text-2xl font-bold text-[#b30000] mb-6 text-center">تجربة إرسال رمز OTP</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">رقم الجوال أو البريد الإلكتروني</label>
            <input
              type="text"
              placeholder="مثال: +966501234567 أو user@email.com"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#b30000]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">القناة</label>
            <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#b30000]">
              <option>SMS</option>
              <option>Email</option>
              <option>WhatsApp</option>
              <option>Push</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            إرسال الرمز
          </button>
        </form>
      </div>
    </div>
  );
}

export default TryOTP;
