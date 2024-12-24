// import { useState, useEffect } from "react";
// import { createTeacher, listCourses } from "../services/TeacherService";

// const useTeacherComponentHook = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [courseId, setCourseId] = useState("");
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const response = await listCourses();
//       setCourses(response.data);
//     };
//     fetchCourses();
//   }, []);

//   const saveTeacher = async () => {
//     if (!name || !email || !courseId) {
//       alert("All fields are required!");
//       return;
//     }
//     const teacher = { name, email, courseId };
//     await createTeacher(teacher);
//     alert("Teacher added successfully!");
//   };

//   return { name, setName, email, setEmail, courseId, setCourseId, courses, saveTeacher };
// };

// export default useTeacherComponentHook;

import { useState, useEffect } from "react";
import { createTeacher, listCourses } from "../services/TeacherService";

const useTeacherComponentHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);

  // Fetch list of courses when component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await listCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("There was an error fetching the courses.");
      }
    };
    fetchCourses();
  }, []);

  // Save teacher details
  const saveTeacher = async () => {
    if (!name || !email || !courseId) {
      alert("All fields are required!");
      return;
    }

    const teacher = { name, email, courseId };
    
    try {
      await createTeacher(teacher);  // Send the teacher data to the backend
      alert("Teacher added successfully!");
      setName("");  // Reset the input fields
      setEmail("");
      setCourseId("");
    } catch (error) {
      console.error("Error saving teacher:", error);
      alert("There was an error saving the teacher.");
    }
  };

  return { name, setName, email, setEmail, courseId, setCourseId, courses, saveTeacher };
};

export default useTeacherComponentHook;
