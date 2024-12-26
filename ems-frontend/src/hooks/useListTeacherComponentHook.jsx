// import { useState, useEffect } from "react";
// import { listTeachers } from "../services/TeacherService";

// const useListTeacherComponentHook = () => {
//   const [teachers, setTeachers] = useState([]);

//   // Fetch list of teachers on component mount
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await listTeachers();
//         setTeachers(response.data);
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//         alert("There was an error fetching the teachers.");
//       }
//     };
//     fetchTeachers();
//   }, []);

//   return { teachers };
// };

// export default useListTeacherComponentHook;
import { useState, useEffect } from "react";
import { listTeachers } from "../services/TeacherService";

const useListTeacherComponentHook = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch list of teachers on component mount
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true); // Set loading to true while fetching
      try {
        const data = await listTeachers(); // Directly get the data
        setTeachers(data); // Set the fetched teachers
      } catch (error) {
        console.error("Error fetching teachers:", error);
        setError("There was an error fetching the teachers."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchTeachers();
  }, []);

  return { teachers, loading, error }; // Return loading and error states as well
};

export default useListTeacherComponentHook;
