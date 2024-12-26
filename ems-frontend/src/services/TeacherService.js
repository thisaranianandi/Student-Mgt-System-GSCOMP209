// // import axios from "axios";

// // const TEACHER_API_URL = "http://localhost:8080/api/teachers";
// // const COURSE_API_URL = "http://localhost:8080/api/courses";

// // // Teacher-related APIs
// // export const listTeachers = () => axios.get(TEACHER_API_URL);
// // export const createTeacher = (teacher) => axios.post(TEACHER_API_URL, teacher);

// // // Course-related APIs (for dropdown)
// // export const listCourses = () => axios.get(COURSE_API_URL);

// import axios from "axios";

// // Base API URLs for teachers and courses
// const TEACHER_API_URL = "http://localhost:8080/api/teachers";
// const COURSE_API_URL = "http://localhost:8080/api/courses";

// // Utility function to handle errors
// const handleError = (error, action) => {
//   console.error(`Error ${action}:`, error.response?.data || error.message);
//   const message = error.response?.data?.message || `Unable to ${action.toLowerCase()}.`;
//   throw new Error(message);
// };

// // Teacher-related APIs
// export const listTeachers = async () => {
//   try {
//     const response = await axios.get(TEACHER_API_URL);
//     return response.data;
//   } catch (error) {
//     handleError(error, "fetching the teacher list");
//   }
// };

// export const createTeacher = async (teacher) => {
//   try {
//     const response = await axios.post(TEACHER_API_URL, teacher);
//     return response.data;
//   } catch (error) {
//     handleError(error, "creating a new teacher");
//   }
// };

// export const deleteTeacherById = async (id) => {
//   try {
//     const response = await axios.delete(`${TEACHER_API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     handleError(error, `deleting the teacher with ID ${id}`);
//   }
// };

// // Course-related APIs (for dropdowns)
// export const listCourses = async () => {
//   try {
//     const response = await axios.get(COURSE_API_URL);
//     return response.data;
//   } catch (error) {
//     handleError(error, "fetching the course list");
//   }
// };


import axios from "axios";

// Base API URLs for teachers and courses
const TEACHER_API_URL = "http://localhost:8080/api/teachers";
const COURSE_API_URL = "http://localhost:8080/api/courses";

// Utility function to handle errors
const handleError = (error, action) => {
  console.error(`Error ${action}:`, error.response?.data || error.message);
  const message = error.response?.data?.message || `Unable to ${action.toLowerCase()}.`;
  throw new Error(message);
};

// Teacher-related APIs
export const listTeachers = async () => {
  try {
    const response = await axios.get(TEACHER_API_URL);
    return response.data;
  } catch (error) {
    handleError(error, "fetching the teacher list");
  }
};

export const createTeacher = async (teacher) => {
  try {
    const response = await axios.post(TEACHER_API_URL, teacher);
    return response.data;
  } catch (error) {
    handleError(error, "creating a new teacher");
  }
};

// New function to add a teacher
export const addTeacher = async (teacher) => {
  try {
    const response = await createTeacher(teacher); // Reusing createTeacher for adding a teacher
    return response; // Return the newly created teacher
  } catch (error) {
    handleError(error, "adding a new teacher");
  }
};

export const deleteTeacherById = async (id) => {
  try {
    const response = await axios.delete(`${TEACHER_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error, `deleting the teacher with ID ${id}`);
  }
};

// Course-related APIs (for dropdowns)
export const listCourses = async () => {
  try {
    const response = await axios.get(COURSE_API_URL);
    return response.data;
  } catch (error) {
    handleError(error, "fetching the course list");
  }
};
