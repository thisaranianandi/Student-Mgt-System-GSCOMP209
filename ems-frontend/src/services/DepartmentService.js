import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/departments";

export const listDepartments = () => {
  return axios.get(REST_API_URL);
};

export const createDepartment = (department) => {
  return axios.post(REST_API_URL, department);
};

export const getDepartmentById = (id) => {
  return axios.get(REST_API_URL + "/" + id);
};

export const updateDeparment = (id, department) => {
  return axios.put(REST_API_URL + "/" + id, department);
};

export const deleteDepartment = (id) => {
  return axios.delete(REST_API_URL + "/" + id);
};



// import axios from "axios";

// // Base API URL for departments
// const REST_API_URL = "http://localhost:8080/api/departments";

// // Function to handle errors
// const handleError = (error, action) => {
//   console.error(`Error ${action}:`, error.message);
//   throw new Error(`Unable to ${action}. Please try again later.`);
// };

// // Fetch all departments
// export const listDepartments = async () => {
//   try {
//     const response = await axios.get(REST_API_URL);
//     return response.data;
//   } catch (error) {
//     handleError(error, "fetch the department list");
//   }
// };

// // Create a new department
// export const createDepartment = async (department) => {
//   try {
//     const response = await axios.post(REST_API_URL, department);
//     return response.data;
//   } catch (error) {
//     handleError(error, "create the department");
//   }
// };

// // Get a department by ID
// export const getDepartmentById = async (id) => {
//   try {
//     const response = await axios.get(`${REST_API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     handleError(error, `fetch the department with ID ${id}`);
//   }
// };

// // Update a department by ID
// export const updateDepartment = async (id, department) => {
//   try {
//     const response = await axios.put(`${REST_API_URL}/${id}`, department);
//     return response.data;
//   } catch (error) {
//     handleError(error, `update the department with ID ${id}`);
//   }
// };

// // Delete a department by ID
// export const deleteDepartment = async (id) => {
//   try {
//     const response = await axios.delete(`${REST_API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     handleError(error, `delete the department with ID ${id}`);
//   }
// };
