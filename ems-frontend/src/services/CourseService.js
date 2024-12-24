import axios from 'axios';

// API base URL
const REST_API_URL = "http://localhost:8080/api/courses";

// Fetch all courses
export const listCourses = () => {
  return axios.get(REST_API_URL);  // Ensure this URL matches your API
};

// Add a new course
export const createCourse = (course) => {
  return axios.post(REST_API_URL, course);
};

// Get a course by its ID
export const getCourseById = (id) => {
  return axios.get(`${REST_API_URL}/${id}`);
};

// Update a course by its ID
export const updateCourse = (id, course) => {
  return axios.put(`${REST_API_URL}/${id}`, course);
};

// Delete a course by its ID
export const deleteCourse = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};
