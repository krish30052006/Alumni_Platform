import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Alumni Portal
          </h1>
          <p className="text-xl mb-8">
            Connect with fellow alumni, share experiences, and grow your network
          </p>
          <Link
            to="/auth"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Profile Management</h3>
              <p className="text-gray-600">
                Create and manage your professional profile, share achievements, and connect with others.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Events & Networking</h3>
              <p className="text-gray-600">
                Stay updated with alumni events, reunions, and networking opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Career Development</h3>
              <p className="text-gray-600">
                Access job opportunities, mentorship programs, and professional resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8">
            Join our growing community of successful alumni
          </p>
          <Link
            to="/auth"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 