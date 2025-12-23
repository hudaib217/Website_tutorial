import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getBySlug: (slug) => api.get(`/services/${slug}`),
};

// Portfolio API
export const portfolioAPI = {
  getAll: (params) => api.get('/portfolio', { params }),
  getBySlug: (slug) => api.get(`/portfolio/${slug}`),
  getCategories: () => api.get('/portfolio/categories'),
};

// Blog API
export const blogAPI = {
  getAll: (params) => api.get('/blogs', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  getFeatured: (limit = 3) => api.get('/blogs/featured', { params: { limit } }),
  getCategories: () => api.get('/blogs/categories'),
};

// Leads API
export const leadsAPI = {
  submitContact: (data) => api.post('/leads/contact', data),
  submitQuote: (formData) => api.post('/leads/quote', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

export default api;
