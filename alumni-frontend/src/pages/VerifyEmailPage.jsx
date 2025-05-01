import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState('verifying');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get('token');
        if (!token) {
          setVerificationStatus('error');
          toast.error('Invalid verification link');
          return;
        }

        const response = await axios.get(`/api/auth/verify-email?token=${token}`);
        
        if (response.data.success) {
          setVerificationStatus('success');
          toast.success('Email verified successfully!');
          setTimeout(() => {
            navigate('/auth');
          }, 3000);
        }
      } catch (error) {
        setVerificationStatus('error');
        toast.error(error.response?.data?.message || 'Verification failed');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {verificationStatus === 'verifying' && (
              <>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Verifying your email...
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Please wait while we verify your email address.
                </p>
              </>
            )}

            {verificationStatus === 'success' && (
              <>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Email Verified!
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Your email has been verified successfully. You will be redirected to the login page.
                </p>
              </>
            )}

            {verificationStatus === 'error' && (
              <>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Verification Failed
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  The verification link is invalid or has expired.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/auth')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Go to Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage; 