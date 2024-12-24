// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";


// import {
//   getCourseById,
//   createCourse,
//   updateCourse,
// } from "../services/CourseService";

// const useCourseComponentHook = () => {
//   const [courseName, setCourseName] = useState("");
//   const [ courseDescription, setCourseDescription] = useState("");
//   const [title, setTitle] = useState("");
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const getCourse = async (id) => {
//     const response = await getCourseById(id);
//     const course = response.data;
//     setCourseName(course.courseName);
//     setCourseDescription(course.courseDescription);
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
//       if (id) {
//         await updateCourse(id, course);
//         toast.info("Courses updated successfully!");
//         navigate("/courses");
//         return;
//       }
//       await createCourse(course);
//       toast.success("Courses added successfully!");
//       navigate("/courses");
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

// export default useCourseComponentHook;


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCourseById, createCourse, updateCourse } from "../services/CourseService";

const useCourseComponentHook = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCourse = async (courseId) => {
    try {
      const response = await getCourseById(courseId);
      const course = response.data;
      setCourseName(course.courseName);
      setCourseDescription(course.courseDescription);
    } catch (error) {
      console.error("Error fetching course:", error);
      toast.error("Failed to fetch course data.");
    }
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Course");
      fetchCourse(id);
    } else {
      setTitle("Add Course");
    }
  }, [id]);

  const saveOrUpdateCourse = async (e) => {
    e.preventDefault();
    const course = { courseName, courseDescription };

    if (courseName && courseDescription) {
      try {
        if (id) {
          await updateCourse(id, course);
          toast.info("Course updated successfully!");
        } else {
          await createCourse(course);
          toast.success("Course added successfully!");
        }
        navigate("/courses");
      } catch (error) {
        console.error("Error saving course:", error);
        toast.error("Failed to save course.");
      }
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return {
    courseName,
    setCourseName,
    courseDescription,
    setCourseDescription,
    title,
    saveOrUpdateCourse,
  };
};

export default useCourseComponentHook;
