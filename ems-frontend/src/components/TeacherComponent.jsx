

// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { listTeachers, deleteTeacherById } from "../services/TeacherService";
// import useTeacherComponentHook from "../hooks/useTeacherComponentHook";

// const TeacherComponent = () => {
//   const { name, setName, email, setEmail, courseId, setCourseId, courses, saveTeacher } = 
//     useTeacherComponentHook();
//   const [teachers, setTeachers] = useState([]);

//   // Fetch teachers list on component mount
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await listTeachers();
//         setTeachers(response.data);
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//         alert("Failed to fetch teachers list.");
//       }
//     };

//     fetchTeachers();
//   }, []);

//   // Handle editing a teacher
//   const editTeacher = (id) => {
//     const teacher = teachers.find((t) => t.id === id);
//     if (teacher) {
//       setName(teacher.name);
//       setEmail(teacher.email);
//       setCourseId(teacher.courseId);
//     }
//   };

//   // Handle deleting a teacher
//   const deleteTeacher = async (id) => {
//     try {
//       await deleteTeacherById(id);
//       setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== id));
//       alert("Teacher deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting teacher:", error);
//       alert("Failed to delete teacher.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Add Teacher</h2>
//       <form>
//         <div className="mb-3">
//           <label>Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Course:</label>
//           <select
//             className="form-control"
//             value={courseId}
//             onChange={(e) => setCourseId(e.target.value)}
//           >
//             <option value="">Select Course</option>
//             {courses.map((course) => (
//               <option key={course.id} value={course.id}>
//                 {course.courseName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="button" className="btn btn-primary" onClick={saveTeacher}>
//           Save Teacher
//         </button>
//       </form>

//       <h3 className="text-center mt-5">Teacher List</h3>
//       <table className="table">
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
//           {teachers.map((teacher) => (
//             <tr key={teacher.id}>
//               <td>{teacher.id}</td>
//               <td>{teacher.name}</td>
//               <td>{teacher.email}</td>
//               <td>{teacher.courseName}</td>
//               <td>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => editTeacher(teacher.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteTeacher(teacher.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TeacherComponent;

// TeacherComponent.js
// eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { addTeacher } from "../services/TeacherService"; // Import the service for adding a teacher


// const TeacherComponent = ({ onTeacherAdded }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [courseName, setCourseName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     try {
//       // Call the service to add the teacher
//       const newTeacher = { name, email, courseName };
//       await addTeacher(newTeacher);
//       onTeacherAdded(); // Callback to refresh the teacher list
//       // Reset form fields
//       setName("");
//       setEmail("");
//       setCourseName("");
//       alert("Teacher added successfully.");
//     } catch (err) {
//       console.error("Error adding teacher:", err);
//       alert("There was an error adding the teacher.");
//     }
//   };

//   return (
//     <div className="mb-4">
//       <h3>Add Teacher</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Course Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={courseName}
//             onChange={(e) => setCourseName(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Teacher
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TeacherComponent;
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { createTeacher } from "../services/TeacherService"; // Updated to match the service

const TeacherComponent = ({ onTeacherAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Create the teacher object
      const newTeacher = { name, email, courseName };
      await createTeacher(newTeacher); // Use createTeacher instead of addTeacher
      onTeacherAdded(); // Callback to refresh the teacher list
      // Reset form fields
      setName("");
      setEmail("");
      setCourseName("");
      alert("Teacher added successfully.");
    } catch (err) {
      console.error("Error adding teacher:", err);
      alert("There was an error adding the teacher.");
    }
  };

  return (
    <div className="mb-4">
      <h3>Add Teacher</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

// Define prop types for better validation and documentation
TeacherComponent.propTypes = {
  onTeacherAdded: PropTypes.func.isRequired, // onTeacherAdded is a required function
};

export default TeacherComponent;
