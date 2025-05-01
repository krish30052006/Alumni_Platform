import React from 'react';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2024',
      type: 'In Person',
      date: '2024-06-15',
      location: 'University Campus',
      description: 'Join us for the annual alumni reunion featuring networking sessions, keynote speakers, and entertainment.',
      status: 'open'
    },
    {
      id: 2,
      title: 'Virtual Career Fair',
      type: 'Virtual',
      date: '2024-05-20',
      location: 'Online',
      description: 'Connect with top employers and explore career opportunities in various industries.',
      status: 'open'
    },
    {
      id: 3,
      title: 'Alumni Networking Mixer',
      type: 'In Person',
      date: '2024-04-10',
      location: 'Downtown Conference Center',
      description: 'An evening of networking and socializing with fellow alumni.',
      status: 'closed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.type === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>

                <p className="mt-2 text-gray-600">{event.location}</p>
                <p className="mt-4 text-gray-700">{event.description}</p>

                <div className="mt-6 flex justify-end">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 