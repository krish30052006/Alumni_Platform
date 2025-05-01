import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);

  const features = [
    {
      title: 'Events',
      description: 'Browse and register for upcoming alumni events',
      icon: '🎉',
      path: '/events',
      color: 'bg-blue-500',
    },
    {
      title: 'Directory',
      description: 'Connect with fellow alumni and expand your network',
      icon: '👥',
      path: '/directory',
      color: 'bg-purple-500',
    },
    {
      title: 'Mentorship',
      description: 'Find mentors or become a mentor to help others',
      icon: '🤝',
      path: '/mentorship',
      color: 'bg-yellow-500',
    },
    {
      title: 'Job Board',
      description: 'Explore career opportunities and post job listings',
      icon: '💼',
      path: '/jobs',
      color: 'bg-red-500',
    },
    {
      title: 'Profile',
      description: 'Update your profile and manage your account settings',
      icon: '👤',
      path: '/profile',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Access all your alumni features from one place
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
                  Access feature
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Quick Stats */}
      <div className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-medium text-gray-900">Quick Stats</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-blue-500 truncate">Total Alumni</dt>
                      <dd className="text-lg font-semibold text-gray-900">1,234</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-green-500 truncate">Upcoming Events</dt>
                      <dd className="text-lg font-semibold text-gray-900">12</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-purple-500 truncate">Active Jobs</dt>
                      <dd className="text-lg font-semibold text-gray-900">45</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 