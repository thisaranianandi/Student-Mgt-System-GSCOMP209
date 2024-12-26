


// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { listTeachers, deleteTeacherById } from "../services/TeacherService"; // Ensure the appropriate service functions are imported

// const ListTeacherComponent = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch teachers list on component mount
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await listTeachers(); // Get data directly
//         setTeachers(data); // Set the teachers list
//       } catch (err) {
//         console.error("Error fetching teachers:", err);
//         setError("Unable to fetch the teacher list. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   // Function to handle Delete teacher
//   const deleteTeacher = async (id) => {
//     try {
//       if (window.confirm("Are you sure you want to delete this teacher?")) {
//         await deleteTeacherById(id); // Call the delete API
//         setTeachers(teachers.filter((teacher) => teacher.id !== id)); // Update the state by removing the deleted teacher
//         alert("Teacher deleted successfully.");
//       }
//     } catch (err) {
//       console.error("Error deleting teacher:", err);
//       alert("There was an error deleting the teacher.");
//     }
//   };

//   // Function to handle Edit teacher (placeholder for now)
//   const editTeacher = (id) => {
//     console.log("Edit teacher with ID:", id);
//     // Add logic for navigation to edit page if needed
//   };

//   if (loading) return <div>Loading...</div>; // Display loading state
//   if (error) return <div className="error">{error}</div>; // Display error state

//   return (
//     <div className="container">
//       <h2 className="text-center">Teacher List</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers.length > 0 ? (
//             teachers.map((teacher) => (
//               <tr key={teacher.id}>
//                 <td>{teacher.id}</td>
//                 <td>{teacher.name}</td>
//                 <td>{teacher.email}</td>
//                 <td>{teacher.courseName || "N/A"}</td>
//                 <td>
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => editTeacher(teacher.id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => deleteTeacher(teacher.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center">
//                 No teachers found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListTeacherComponent;
// eslint-disable-next-line no-unused-vars
// ListTeacherComponent.js
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { listTeachers, deleteTeacherById } from "../services/TeacherService";
import TeacherComponent from './TeacherComponent';

const ListTeacherComponent = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAddTeacherForm, setShowAddTeacherForm] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await listTeachers();
        setTeachers(data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Unable to fetch the teacher list. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const deleteTeacher = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this teacher?")) {
        await deleteTeacherById(id);
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
        alert("Teacher deleted successfully.");
      }
    } catch (err) {
      console.error("Error deleting teacher:", err);
      alert("There was an error deleting the teacher.");
    }
  };

  const editTeacher = (id) => {
    console.log("Edit teacher with ID:", id);
    // Logic for navigating to an edit page or showing an edit form can go here
  };

  const handleTeacherAdded = (newTeacher) => {
    setTeachers([...teachers, newTeacher]);
    setShowAddTeacherForm(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h2 className="text-center" style={{marginTop:'30px', color:'purple'}}>Deatils of Teachers</h2>
      <button className="btn btn-outline-info me-2" style={{borderColor:"purple", color:"purple", marginBottom:'20px'}} onClick={() => setShowAddTeacherForm(true)}>Add Teacher</button>
      {showAddTeacherForm && <TeacherComponent onTeacherAdded={handleTeacherAdded} />}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>#Actions</th>
            <th>#Actions</th>
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
                  <button className="btn btn-outline-success" style={{borderColor:"gray", color:"gray", marginRight:"10px"}} onClick={() => editTeacher(teacher.id)}>Edit</button> </td>
                <td> <button className="btn btn-outline-success" style={{borderColor:"red", color:"red"}}  onClick={() => deleteTeacher(teacher.id)}>Delete</button></td>
               
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No teachers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacherComponent;


