import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const EnhancedLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, user } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.mustChangePassword || user.isFirstLogin) {
        navigate('/change-password');
      } else {
        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from);
      }
    }
  }, [user, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!formData.email || !formData.password) {
      setErrors({ general: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        login(data.user, data.token);

        if (data.user.mustChangePassword || data.user.isFirstLogin) {
          if (data.user.isFirstLogin) {
            setErrors({
              info: `Welcome ${data.user.name}! For security, please set a new password to continue.`,
            });
          } else {
            setErrors({
              info: 'For security reasons, you must change your password before continuing.',
            });
          }
          setTimeout(() => navigate('/change-password'), 2000);
        } else {
          const from = location.state?.from?.pathname || '/dashboard';
          navigate(from);
        }
      } else {
        setErrors({ general: data.message || 'Login failed. Please try again.' });
      }
    } catch {
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted py-12 px-4 sm:px-6 lg:px-8 transition-colors dark:bg-background-dark light:bg-white">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-accent dark:text-white light:text-red-600">
            Sign in to EDUNIRIX
          </h2>
          <p className="mt-2 text-center text-sm text-text-dark dark:text-gray-400 light:text-red-500">
            Welcome back!
          </p>
        </div>

        <form
          className="mt-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 dark:bg-gray-800 dark:border-gray-700 light:bg-white light:border-red-200"
          onSubmit={handleSubmit}
        >
          {errors.general && (
            <div className="p-3 bg-danger-900/20 border border-danger-800 text-danger-300 dark:bg-danger-900/20 dark:border-danger-800 light:bg-red-50 light:border-red-200 light:text-red-600">
              {errors.general}
            </div>
          )}

          {errors.info && (
            <div className="p-3 bg-primary-900/20 border border-primary-800 text-primary-300 dark:bg-primary-900/20 dark:border-primary-800 light:bg-red-50 light:border-red-200 light:text-red-600">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 text-primary dark:text-primary-600 light:text-red-600" />
                <div className="ml-3 text-primary-300 dark:text-primary-600 light:text-red-600">
                  {errors.info}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-secondary dark:text-gray-300 light:text-red-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm light:border-red-300 light:placeholder-red-400 light:focus:ring-red-500 light:focus:border-red-500 light:text-red-900"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-danger-400 dark:text-danger-400 light:text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text-secondary dark:text-gray-300 light:text-red-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm light:border-red-300 light:placeholder-red-400 light:focus:ring-red-500 light:focus:border-red-500 light:text-red-900"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-white light:text-red-400 light:hover:text-red-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-danger-400 dark:text-danger-400 light:text-red-600">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-md p-4 dark:bg-gray-700 dark:border-gray-600 light:bg-red-50 light:border-red-200">
            <h4 className="text-sm font-medium text-text-dark dark:text-gray-200 mb-2 light:text-red-800">
              First time logging in?
            </h4>
            <ul className="text-sm text-text-secondary dark:text-gray-400 space-y-1 light:text-red-700">
              <li>• Use the email and password sent to your email address</li>
              <li>• You'll be asked to set a new password for security</li>
              <li>• Contact your administrator if you haven't received your credentials</li>
            </ul>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 dark:bg-primary dark:hover:bg-primary-dark dark:text-black light:bg-red-600 light:hover:bg-red-700 light:focus:ring-red-500 light:text-white light:disabled:bg-red-300"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2 dark:border-white dark:border-t-transparent light:border-white light:border-t-transparent"></div>
                  Signing in...
                </div>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          <div className="text-center text-text-secondary dark:text-gray-400 light:text-red-700">
            <p className="text-sm">Need help? Contact your system administrator</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnhancedLogin;
