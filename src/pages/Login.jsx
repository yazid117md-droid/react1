import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to authenticate
      console.log('Login attempt:', formData);
      
      // For demo purposes, redirect to dashboard
      window.location.href = '/dashboard';
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'حدث خطأ في تسجيل الدخول. حاول مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white px-3 py-2 rounded-lg font-bold text-lg">
              MPASS™
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">الرئيسية</Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">حول</Link>
            <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              إنشاء حساب
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">مرحباً بعودتك</h1>
            <p className="text-gray-600">سجل دخولك للوصول إلى حسابك</p>
          </div>

          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  errors.password ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                <span className="ml-2 text-sm text-gray-600">تذكرني</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-orange-500 hover:text-orange-600">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? 'جاري تسجيل الدخول...' : 'دخول'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{' '}
              <Link to="/signup" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">أو</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span>Google</span>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
