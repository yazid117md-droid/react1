import { useEffect, useState } from 'react';

function Dashboard() {
  const [apiKeys, setApiKeys] = useState([]);
  const [otpStats, setOtpStats] = useState({ sent: 0, success: 0 });
  const [credits, setCredits] = useState(100); // رصيد مجاني مبدئي

  useEffect(() => {
    // بيانات وهمية مؤقتة
    setApiKeys([
      { name: 'Production Key', created: '2025-09-20', lastUsed: 'قبل 3 ساعات' },
      { name: 'Dev Key', created: '2025-09-18', lastUsed: 'أمس' },
    ]);

    setOtpStats({ sent: 120, success: 115 });
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6 text-orange-600 text-center">لوحة التحكم</h2>

      {/* الإحصائيات */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">OTP المرسلة</h3>
          <p className="text-2xl font-bold text-orange-500">{otpStats.sent}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">نسبة النجاح</h3>
          <p className="text-2xl font-bold text-green-500">
            {((otpStats.success / otpStats.sent) * 100).toFixed(1)}%
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">الرصيد المتبقي</h3>
          <p className="text-2xl font-bold text-blue-500">{credits} رصيد</p>
        </div>
      </div>

      {/* مفاتيح API */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">🔑 مفاتيح API</h3>
        <ul className="space-y-2">
          {apiKeys.map((key, index) => (
            <li key={index} className="border p-3 rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{key.name}</p>
                <p className="text-sm text-gray-600">أنشئ: {key.created} | آخر استخدام: {key.lastUsed}</p>
              </div>
              <button className="text-red-500 hover:underline">حذف</button>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">إنشاء مفتاح جديد</button>
      </div>

      {/* أزرار سريعة */}
      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">إضافة قناة</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">عرض الوثائق</button>
      </div>
    </div>
  );
}

export default Dashboard;