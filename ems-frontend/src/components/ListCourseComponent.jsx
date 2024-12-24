// import ButtonLink from "./ButtonLink";
// import useListCourseComponentHook from "../hooks/useListCourseComponentHook";

// const ListCourseComponent = () => {
//   const { courses, updateCourse, removeCourse } =
//     useListCourseComponentHook();

//   return (
//     <div className="container">
//       <h2 className="text-center py-3">List of Courses</h2>
//       <ButtonLink text="Add Course" toAction="/add-course" />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Course Name</th>
//             <th scope="col">Course Description</th>
//             <th scope="col">Action #1</th>
//             <th scope="col">Action #2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((item) => {
//             return (
//               <tr key={item.id}>
//                 <td>{item.courseName}</td>
//                 <td>{item.courseDescription}</td>
//                 <td>
//                   <button
//                     className="btn btn-outline-info me-2"
//                     onClick={() => updateCourse(item.id)}
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-outline-danger"
//                     onClick={() => removeCourse(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListCourseComponent;


// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import ButtonLink from "./ButtonLink";
// import useListCourseComponentHook from "../hooks/useListCourseComponentHook";

// const ListCourseComponent = () => {
//   const { courses, updateCourse, removeCourse, fetchCourses } = useListCourseComponentHook();

//   // Ensure we only fetch the courses once when the component mounts
//   useEffect(() => {
//     fetchCourses();  // Only fetch courses when component is first mounted
//   }, []); // Empty dependency array to ensure this runs only once

//   return (
//     <div className="container">
//       <h2 className="text-center py-3">List of Courses</h2>
//       <ButtonLink text="Add Course" toAction="/add-course" />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Course Name</th>
//             <th scope="col">Course Description</th>
//             <th scope="col">Action #1</th>
//             <th scope="col">Action #2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses && courses.length > 0 ? (
//             courses.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.courseName}</td>
//                 <td>{item.courseDescription}</td>
//                 <td>
//                   <button
//                     className="btn btn-outline-info me-2"
//                     onClick={() => updateCourse(item.id)}
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-outline-danger"
//                     onClick={() => removeCourse(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center">
//                 No courses available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListCourseComponent;

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import ButtonLink from "./ButtonLink";
import useListCourseComponentHook from "../hooks/useListCourseComponentHook";

const ListCourseComponent = () => {
  const { courses, removeCourse } = useListCourseComponentHook();  // Correct hook usage

  // Ensure that courses are fetched after the component mounts
  useEffect(() => {
    // This will be triggered when the component mounts
    // Since fetchCourses is already invoked in the hook, no need to call it here.
  }, []);  // Empty array ensures it runs only once

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Courses</h2>
      <ButtonLink text="Add Course" toAction="/add-course" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.courseName}</td>
                <td>{course.courseDescription}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeCourse(course.id)}  // Handle course deletion
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No courses available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListCourseComponent;
