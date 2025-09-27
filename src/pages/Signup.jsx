import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptMarketing: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'الاسم الأول مطلوب';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الاسم الأخير مطلوب';
    }
    
    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'يجب الموافقة على الشروط والأحكام';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an API call to register the user
      console.log('Signup attempt:', formData);
      
      // For demo purposes, redirect to verification page
      window.location.href = '/verify';
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'حدث خطأ في إنشاء الحساب. حاول مرة أخرى.' });
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
            <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              تسجيل الدخول
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">إنشاء حساب جديد</h1>
            <p className="text-gray-600">انضم إلينا وابدأ رحلتك</p>
          </div>

          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الأول *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="أحمد"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                    errors.firstName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الأخير *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="محمد"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                    errors.lastName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني *
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
                رقم الهاتف *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+966 50 123 4567"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور *
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
              <p className="text-xs text-gray-500 mt-1">
                يجب أن تحتوي على 8 أحرف على الأقل مع حرف كبير وصغير ورقم
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  errors.confirmPassword ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  أوافق على{' '}
                  <Link to="/terms" className="text-orange-500 hover:text-orange-600">
                    الشروط والأحكام
                  </Link>{' '}
                  و{' '}
                  <Link to="/privacy" className="text-orange-500 hover:text-orange-600">
                    سياسة الخصوصية
                  </Link>
                  *
                </span>
              </label>
              {errors.acceptTerms && (
                <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
              )}

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptMarketing"
                  checked={formData.acceptMarketing}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  أرغب في تلقي العروض الترويجية والتحديثات عبر البريد الإلكتروني
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                تسجيل الدخول
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

export default Signup;