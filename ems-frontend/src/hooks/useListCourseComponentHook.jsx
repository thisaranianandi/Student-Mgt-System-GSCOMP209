// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   getCourseById,
//   createCourse,
//   updateCourse,
// } from "../services/CourseService";

// const useListCourseComponentHook = () => {
//   const [courseName, setCourseName] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [title, setTitle] = useState("");
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const getCourse = async (id) => {
//     try {
//       const response = await getCourseById(id);
//       const course = response.data;
//       setCourseName(course.courseName);
//       setCourseDescription(course.courseDescription);
//     } catch (error) {
//       toast.error("Error fetching course details!");
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       setTitle("Update Course");
//       getCourse(id);
//     } else {
//       setTitle("Add Course");
//     }
//   }, [id]);

//   const saveOrUpdateCourse = async (e) => {
//     e.preventDefault();
//     const course = { courseName, courseDescription };
//     if (courseName && courseDescription) {
//       try {
//         if (id) {
//           await updateCourse(id, course);
//           toast.info("Course updated successfully!");
//           navigate("/courses");
//           return;
//         }
//         await createCourse(course);
//         toast.success("Course added successfully!");
//         navigate("/courses");
//       } catch (error) {
//         toast.error("Error saving course!");
//       }
//     } else {
//       toast.error("Please fill in all the fields!");
//     }
//   };

//   return {
//     courseName,
//     setCourseName,
//     courseDescription,
//     setCourseDescription,
//     title,
//     saveOrUpdateCourse,
//   };
// };

// export default useListCourseComponentHook;

import { useState, useEffect } from "react";
import { listCourses, deleteCourse } from "../services/CourseService"; // Ensure correct import

const useListCourseComponentHook = () => {
  const [courses, setCourses] = useState([]);

  // Function to fetch courses
  const fetchCourses = async () => {
    try {
      const response = await listCourses();  // Correct function to fetch courses
      setCourses(response.data);  // Set courses to state
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Function to delete a course
  const removeCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);  // Delete the course via API
      setCourses(courses.filter(course => course.id !== courseId));  // Update state after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();  // Fetch the courses on initial render
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

  return {
    courses,
    removeCourse,  // Return removeCourse function to handle course deletion
  };
};

export default useListCourseComponentHook;




