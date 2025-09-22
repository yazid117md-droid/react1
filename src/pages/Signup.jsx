import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [contact, setContact] = useState('');
  const [orgName, setOrgName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!contact || !orgName) {
      setError('يرجى إدخال جميع البيانات');
      return;
    }

    // محاكاة إرسال OTP
    console.log(`Sending OTP to ${contact} for ${orgName}`);
    localStorage.setItem('contact', contact); // حفظ البيانات مؤقتًا
    navigate('/verify');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">ابدأ مجانًا مع mPass Lite</h2>

      <input
        type="text"
        placeholder="اسم المؤسسة"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <input
        type="text"
        placeholder="رقم الجوال أو البريد الإلكتروني"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={handleSignup}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 w-full rounded"
      >
        سجل الآن واحصل على 100 رصيد مجاني
      </button>
    </div>
  );
}

export default Signup;
