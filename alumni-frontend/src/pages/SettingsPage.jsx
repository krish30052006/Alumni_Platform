import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SettingsPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Settings' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Tabs */}
      <div className="border-b mb-8">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
            <form className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-gray-500">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
                <button className="btn-secondary">
                  Change Photo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    defaultValue={user?.firstName}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    defaultValue={user?.lastName}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Bio</label>
                <textarea
                  className="input-field h-32"
                  defaultValue={user?.bio}
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            <form className="space-y-6">
              <div>
                <label className="form-label">Current Password</label>
                <input
                  type="password"
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="input-field"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn-primary">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-gray-600">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Event Reminders</h3>
                  <p className="text-gray-600">Get notified about upcoming events</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Job Alerts</h3>
                  <p className="text-gray-600">Receive job opportunities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Profile Visibility</h3>
                  <p className="text-gray-600">Control who can see your profile</p>
                </div>
                <select className="input-field w-48">
                  <option value="public">Public</option>
                  <option value="alumni">Alumni Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Contact Information</h3>
                  <p className="text-gray-600">Show contact details on profile</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage; 