// import { useState, useEffect } from "react";
// import { listTeachers } from "../services/TeacherService";

// const useListTeacherComponentHook = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       const response = await listTeachers();
//       setTeachers(response.data);
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

  // Fetch list of teachers on component mount
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await listTeachers();
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
        alert("There was an error fetching the teachers.");
      }
    };
    fetchTeachers();
  }, []);

  return { teachers };
};

export default useListTeacherComponentHook;
