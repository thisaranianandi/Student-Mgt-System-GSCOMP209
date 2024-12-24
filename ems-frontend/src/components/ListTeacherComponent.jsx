// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import useListTeacherComponentHook from "../hooks/useListTeacherComponentHook";

// const ListTeacherComponent = () => {
//   const { teachers } = useListTeacherComponentHook();

//   return (
//     <div className="container">
//       <h2 className="text-center py-3">List of Teachers</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers.map((teacher) => (
//             <tr key={teacher.id}>
//               <td>{teacher.name}</td>
//               <td>{teacher.email}</td>
//               <td>{teacher.courseName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListTeacherComponent;


// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { listTeachers, deleteTeacherById } from "../services/TeacherService"; // Ensure the appropriate service functions are imported

const ListTeacherComponent = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch teachers list on component mount
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await listTeachers(); // Get data directly
        setTeachers(data); // Set the teachers list
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Unable to fetch the teacher list. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  // Function to handle Delete teacher
  const deleteTeacher = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this teacher?")) {
        await deleteTeacherById(id); // Call the delete API
        setTeachers(teachers.filter((teacher) => teacher.id !== id)); // Update the state by removing the deleted teacher
        alert("Teacher deleted successfully.");
      }
    } catch (err) {
      console.error("Error deleting teacher:", err);
      alert("There was an error deleting the teacher.");
    }
  };

  // Function to handle Edit teacher (placeholder for now)
  const editTeacher = (id) => {
    console.log("Edit teacher with ID:", id);
    // Add logic for navigation to edit page if needed
  };

  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div className="error">{error}</div>; // Display error state

  return (
    <div className="container">
      <h2 className="text-center">Teacher List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.courseName || "N/A"}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => editTeacher(teacher.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No teachers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacherComponent;
