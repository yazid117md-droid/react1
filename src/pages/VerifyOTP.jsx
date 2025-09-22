import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const [status, setStatus] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedContact = localStorage.getItem('contact');
    if (savedContact) {
      setContact(savedContact);
    }
  }, []);

  const handleVerify = () => {
    if (otp === '123456') {
      setStatus('success');
      setTimeout(() => {
        navigate('/onboarding');
      }, 1500); // انتظار بسيط قبل التوجيه
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">تحقق من رمز OTP</h2>

      <p className="text-gray-700 mb-4 text-center">
        تم إرسال رمز التحقق إلى: <span className="font-semibold">{contact}</span>
      </p>

      <input
        type="text"
        placeholder="أدخل رمز OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 w-full mb-4 rounded text-center"
      />

      <button
        onClick={handleVerify}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-full rounded"
      >
        تحقق
      </button>

      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-center">
          ✅ تم التحقق بنجاح! جاري تحويلك إلى إعداد المشروع...
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded text-center">
          ❌ رمز غير صحيح. حاول مرة أخرى.
        </div>
      )}
    </div>
  );
}

export default VerifyOTP;