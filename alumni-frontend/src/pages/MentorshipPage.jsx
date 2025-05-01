import React, { useState } from 'react';

const MentorshipPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Yash Chauhan',
      field: 'Computer Science',
      experience: '10+ years',
      expertise: ['Machine Learning', 'Cloud Computing', 'System Design'],
      availability: 'Available',
      rating: 4.8,
      email: '23it016@charusat.edu.in'
    },
    {
      id: 2,
      name: 'Dr. Rex Christian',
      field: 'Business',
      experience: '15+ years',
      expertise: ['Product Strategy', 'Market Analysis', 'Team Leadership'],
      availability: 'Available',
      rating: 4.9,
      email: '23it018@charusat.edu.in'
    },
    {
      id: 3,
      name: 'Prof. Krish Ajudiya',
      field: 'Data Science',
      experience: '12+ years',
      expertise: ['Big Data', 'Analytics', 'AI/ML'],
      availability: 'Available',
      rating: 4.7,
      email: '23it001@charusat.edu.in'
    },
    {
      id: 4,
      name: 'Prof. Dhruvin Bhimani',
      field: 'Engineering',
      experience: '18+ years',
      expertise: ['Robotics', 'Automation', 'Innovation'],
      availability: 'Available',
      rating: 4.9,
      email: '23it011@charusat.edu.in'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.field.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'all' || mentor.field === selectedField;
    return matchesSearch && matchesField;
  });

  const fields = ['all', ...new Set(mentors.map(mentor => mentor.field))];

  const handleEmailClick = (email) => {
    const subject = encodeURIComponent('Mentorship Request');
    const body = encodeURIComponent(`Dear Mentor,\n\nI am writing to request mentorship in your field of expertise.\n\nBest regards,\n[Your Name]`);
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find a Mentor</h1>
          <p className="mt-2 text-gray-600">
            Connect with experienced alumni who can guide you in your career journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name or field..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            {fields.map(field => (
              <option key={field} value={field}>
                {field === 'all' ? 'All Fields' : field}
              </option>
            ))}
          </select>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{mentor.name}</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {mentor.availability}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Field:</span> {mentor.field}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {mentor.experience}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span>{' '}
                    <button
                      onClick={() => handleEmailClick(mentor.email)}
                      className="text-indigo-600 hover:text-indigo-800 underline"
                    >
                      {mentor.email}
                    </button>
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">Expertise</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">{mentor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage; 