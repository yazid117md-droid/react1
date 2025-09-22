import { useState } from 'react';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [channels, setChannels] = useState({
    sms: false,
    email: false,
    whatsapp: false,
  });

  const generateApiKey = () => {
    const key = 'mpass_' + Math.random().toString(36).substring(2, 12);
    setApiKey(key);
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">إعداد مشروعك الجديد</h2>

      {step === 1 && (
        <>
          <label className="block mb-2 font-semibold">اسم المشروع / التطبيق</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
            placeholder="مثال: MyApp – منتج التحقق"
          />
          <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded w-full">
            التالي
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <p className="mb-4">اضغط لتوليد مفتاح API لمشروعك:</p>
          <button onClick={generateApiKey} className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">
            توليد مفتاح
          </button>
          {apiKey && <p className="text-green-600 font-mono text-center">🔑 {apiKey}</p>}
          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="text-gray-600">رجوع</button>
            <button onClick={handleNext} className="text-orange-600 font-semibold">التالي</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="mb-4">اختر القنوات التي تريد تفعيلها:</p>
          {['sms', 'email', 'whatsapp'].map((channel) => (
            <label key={channel} className="block mb-2">
              <input
                type="checkbox"
                checked={channels[channel]}
                onChange={() =>
                  setChannels({ ...channels, [channel]: !channels[channel] })
                }
                className="mr-2"
              />
              {channel.toUpperCase()}
            </label>
          ))}
          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="text-gray-600">رجوع</button>
            <button onClick={handleNext} className="text-orange-600 font-semibold">التالي</button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h3 className="text-lg font-bold mb-2">📘 دليل الدمج</h3>
          <p className="mb-4 text-gray-700">
            استخدم مفتاح API الخاص بك لدمج mPass في تطبيقك. يمكنك إرسال OTP عبر القنوات التي فعلتها.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`curl -X POST https://api.mpass.sa/send-otp \\
-H "Authorization: Bearer ${apiKey}" \\
-d '{"to": "${contact}", "channel": "sms"}'`}
          </pre>
          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="text-gray-600">رجوع</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">إنهاء الإعداد</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Onboarding;
