import React, { useState } from 'react';

const AlumniDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');

  // Mock data for alumni
  const alumni = [
    {
      id: 1,
      name: 'John Doe',
      graduationYear: 2015,
      major: 'Computer Science',
      currentPosition: 'Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      profilePicture: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Jane Smith',
      graduationYear: 2018,
      major: 'Business Administration',
      currentPosition: 'Product Manager',
      company: 'Innovation Inc',
      location: 'New York, NY',
      profilePicture: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      graduationYear: 2016,
      major: 'Engineering',
      currentPosition: 'Project Manager',
      company: 'Build Co',
      location: 'Chicago, IL',
      profilePicture: 'https://via.placeholder.com/100',
    },
  ];

  // Filter alumni based on search criteria
  const filteredAlumni = alumni.filter((alumnus) => {
    const matchesSearch = alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = !selectedYear || alumnus.graduationYear.toString() === selectedYear;
    const matchesMajor = !selectedMajor || alumnus.major === selectedMajor;
    
    return matchesSearch && matchesYear && matchesMajor;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Alumni Directory</h1>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by name, company, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="input-field"
          >
            <option value="">All Graduation Years</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="input-field"
          >
            <option value="">All Majors</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
      </div>

      {/* Alumni List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumnus) => (
          <div key={alumnus.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={alumnus.profilePicture}
                alt={alumnus.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">{alumnus.name}</h2>
                <p className="text-gray-600">{alumnus.currentPosition}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Graduation Year:</span> {alumnus.graduationYear}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Major:</span> {alumnus.major}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Company:</span> {alumnus.company}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Location:</span> {alumnus.location}
              </p>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="text-primary hover:underline">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No alumni found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AlumniDirectoryPage; 