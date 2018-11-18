import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  // Get a list of all posts
  getPosts() {
    return apiClient.get('/posts');
  },
  // Get a list of all users
  getUsers() {
    return apiClient.get('/users');
  },
};
