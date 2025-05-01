import React, { useState } from 'react';
import { toast } from 'react-toastify';

const JobBoardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [jobType, setJobType] = useState('All Types');
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  // Mock data for job listings
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Looking for an experienced software engineer to join our team...',
      requirements: ['5+ years experience', 'React', 'Node.js', 'AWS'],
      postedBy: 'John Doe (Class of 2015)',
      postedDate: '2024-03-15',
      salary: '$120,000 - $150,000',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Inc',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Seeking a product manager to drive product development...',
      requirements: ['3+ years PM experience', 'Agile', 'User Research'],
      postedBy: 'Jane Smith (Class of 2018)',
      postedDate: '2024-03-14',
      salary: '$100,000 - $130,000',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Data Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our data science team to develop ML models...',
      requirements: ['Python', 'Machine Learning', 'SQL'],
      postedBy: 'Mike Johnson (Class of 2016)',
      postedDate: '2024-03-13',
      salary: '$110,000 - $140,000',
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    
    // Here you would typically send the application data to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use dhruvinbhimani2005@gmail.com as the recipient email
      const recipientEmail = "bhimanidhruvin2005@gmail.com";
      
      // Send email notification
      const mailtoLink = `mailto:${recipientEmail}?subject=Application for ${selectedJob.title} position&body=Dear Recruiter,\n\nI am writing to apply for the ${selectedJob.title} position at ${selectedJob.company}.\n\n${applicationForm.coverLetter}\n\nBest regards,\n${applicationForm.fullName}`;
      window.location.href = mailtoLink;

      toast.success('Application submitted successfully!');
      setShowApplicationModal(false);
      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
      });
      setSelectedJob(null);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter((job) => {
    const searchMatch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const locationMatch = location === 'All Locations' || job.location.includes(location);
    const typeMatch = jobType === 'All Types' || job.type === jobType;
    
    return searchMatch && locationMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
        
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search jobs by title, company, or description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>San Francisco, CA</option>
              <option>New York, NY</option>
            </select>
          </div>
          <div className="md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {job.type}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Location: {job.location}</p>
                  <p className="text-gray-600">Salary: {job.salary}</p>
                </div>
                <div>
                  <p className="text-gray-600">Posted by: {job.postedBy}</p>
                  <p className="text-gray-600">Posted: {job.postedDate}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{job.description}</p>

              <div className="mt-4">
                <h3 className="font-medium text-gray-900">Requirements:</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => handleApply(job)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Modal */}
        {showApplicationModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
              <h2 className="text-xl font-semibold mb-4">
                Apply for {selectedJob.title} at {selectedJob.company}
              </h2>
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationForm.fullName}
                    onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Why are you interested in this position?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setApplicationForm({ ...applicationForm, resume: e.target.files[0] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationModal(false);
                      setApplicationForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        coverLetter: '',
                        resume: null
                      });
                      setSelectedJob(null);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Application
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

export default JobBoardPage; 