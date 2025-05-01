import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle unauthorized access
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
};

export const eventsAPI = {
  getEvents: () => api.get('/events'),
  getEvent: (id) => api.get(`/events/${id}`),
  createEvent: (eventData) => api.post('/events', eventData),
  updateEvent: (id, eventData) => api.put(`/events/${id}`, eventData),
  deleteEvent: (id) => api.delete(`/events/${id}`),
  registerForEvent: (id) => api.post(`/events/${id}/register`),
};

export const newsAPI = {
  getNews: () => api.get('/news'),
  getNewsItem: (id) => api.get(`/news/${id}`),
  createNews: (newsData) => api.post('/news', newsData),
  updateNews: (id, newsData) => api.put(`/news/${id}`, newsData),
  deleteNews: (id) => api.delete(`/news/${id}`),
};

export const mentorshipAPI = {
  getMentors: () => api.get('/mentorship/mentors'),
  becomeMentor: (mentorData) => api.post('/mentorship/become-mentor', mentorData),
  requestMentorship: (mentorId, requestData) => api.post(`/mentorship/${mentorId}/request`, requestData),
};

export const adminAPI = {
  getUsers: () => api.get('/admin/users'),
  updateUser: (id, userData) => api.put(`/admin/users/${id}`, userData),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
  getDashboardStats: () => api.get('/admin/stats'),
};

export default api; 