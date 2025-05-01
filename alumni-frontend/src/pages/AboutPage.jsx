import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Alumni Portal
          </h1>
          <p className="text-xl mb-8">
            Building bridges between past, present, and future graduates
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-12">
              To create a vibrant and supportive community that connects alumni, facilitates professional growth, 
              and maintains lasting relationships between graduates and their alma mater.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Fostering a strong network of alumni who support and inspire each other.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Promoting continuous learning and professional development among our alumni.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Embracing new ideas and technologies to better serve our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-500">JD</span>
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Director of Alumni Relations</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-500">JS</span>
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-500">RJ</span>
              </div>
              <h3 className="text-xl font-semibold">Robert Johnson</h3>
              <p className="text-gray-600">Events Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-secondary text-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 