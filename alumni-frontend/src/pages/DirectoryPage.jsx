import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);
  const [emailContent, setEmailContent] = useState({
    subject: '',
    message: ''
  });

  const alumni = [
    {
      id: 1,
      firstName: 'Dhruvin',
      lastName: 'Bhimani',
      graduationYear: '2022',
      major: 'Computer Science',
      company: 'Tech Solutions',
      position: 'Software Developer',
      location: 'Mumbai',
      email: 'bhimanidhruvin2005@gmail.com',
      imageUrl: 'https://picsum.photos/200/200?random=1'
    },
    {
      id: 2,
      firstName: 'Yash',
      lastName: 'Chauhan',
      graduationYear: '2020',
      major: 'Computer Science',
      company: 'Google',
      position: 'Software Engineer',
      location: 'New York',
      email: 'bhimanidhruvin2005@gmail.com',
      imageUrl: 'https://picsum.photos/200/200?random=2'
    },
    {
      id: 3,
      firstName: 'Rex',
      lastName: 'Christian',
      graduationYear: '2019',
      major: 'Data Science',
      company: 'Microsoft',
      position: 'Data Analyst',
      location: 'Seattle',
      email: 'bhimanidhruvin2005@gmail.com',
      imageUrl: 'https://picsum.photos/200/200?random=3'
    },
    {
      id: 4,
      firstName: 'Krish',
      lastName: 'Ajudiya',
      graduationYear: '2021',
      major: 'Artificial Intelligence',
      company: 'Amazon',
      position: 'ML Engineer',
      location: 'San Francisco',
      email: 'bhimanidhruvin2005@gmail.com',
      imageUrl: 'https://picsum.photos/200/200?random=4'
    },
    {
      id: 5,
      firstName: 'Emily',
      lastName: 'Williams',
      graduationYear: '2020',
      major: 'Software Engineering',
      company: 'Apple',
      position: 'iOS Developer',
      location: 'Cupertino',
      email: 'bhimanidhruvin2005@gmail.com',
      imageUrl: 'https://picsum.photos/200/200?random=5'
    }
  ];

  const handleContact = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setShowEmailModal(true);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${selectedAlumnus.email}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.message)}`;
    window.location.href = mailtoLink;
    setShowEmailModal(false);
    setEmailContent({ subject: '', message: '' });
    setSelectedAlumnus(null);
    toast.success('Email client opened successfully!');
  };

  const filteredAlumni = alumni.filter(alumnus => {
    const searchMatch = 
      alumnus.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.major.toLowerCase().includes(searchTerm.toLowerCase());
    
    const yearMatch = !graduationYear || alumnus.graduationYear === graduationYear;
    
    return searchMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Alumni Directory</h1>
        <p className="text-gray-600 mb-8">Connect with fellow alumni and expand your professional network</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, major, or company..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
            >
              <option value="">Graduation Year</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumnus) => (
            <div key={alumnus.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={alumnus.imageUrl}
                    alt={`${alumnus.firstName} ${alumnus.lastName}`}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {alumnus.firstName} {alumnus.lastName}
                    </h3>
                    <p className="text-gray-500">Class of {alumnus.graduationYear}</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div>
                    <span className="text-gray-600 font-medium">Major:</span>
                    <span className="ml-2 text-gray-900">{alumnus.major}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Company:</span>
                    <span className="ml-2 text-gray-900">{alumnus.company}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Position:</span>
                    <span className="ml-2 text-gray-900">{alumnus.position}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Location:</span>
                    <span className="ml-2 text-gray-900">{alumnus.location}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleContact(alumnus)}
                  className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Email Modal */}
        {showEmailModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">
                Contact {selectedAlumnus.firstName} {selectedAlumnus.lastName}
              </h2>
              <form onSubmit={handleSendEmail}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={emailContent.subject}
                    onChange={(e) => setEmailContent({ ...emailContent, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={emailContent.message}
                    onChange={(e) => setEmailContent({ ...emailContent, message: e.target.value })}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailModal(false);
                      setEmailContent({ subject: '', message: '' });
                      setSelectedAlumnus(null);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectoryPage; 