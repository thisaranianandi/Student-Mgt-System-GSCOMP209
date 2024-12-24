// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import ButtonLink from "./ButtonLink";
// import useCourseComponentHook from "../hooks/useCourseComponentHook";

// const CourseComponent = () => {
//   const {
//     courseName,
//     setcourseName,
//     courseDescription,
//     setCourseDescription,
//     title,
//     saveOrUpdateCourse,
//   } = useCourseComponentHook();

//   // Handle form submit to prevent page reload
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     saveOrUpdateCourse();
//   };

//   return (
//     <div className="container mt-5">
//       <ButtonLink text="Go Back" toAction="/courses" />
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <h2 className="text-center">{title}</h2>
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group mb-2">
//                 <label className="form-label">Course Name: </label>
//                 <input
//                   type="text"
//                   name="courseName"
//                   placeholder="Enter Course Name"
//                   className="form-control"
//                   value={courseName}
//                   onChange={(e) => setcourseName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group mb-2">
//                 <label className="form-label">Course Description: </label>
//                 <input
//                   type="text"
//                   name="courseDescription"
//                   placeholder="Enter Course Description"
//                   className="form-control"
//                   value={courseDescription}
//                   onChange={(e) => setCourseDescription(e.target.value)}
//                 />
//               </div>
//               <button
//                 type="submit" // Use type="submit" for form submission
//                 className="btn btn-outline-success"
//               >
//                 {title === "Create Course" ? "Create Course" : "Update Course"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseComponent;


import useCourseComponentHook from "../hooks/useCourseComponentHook";

const CourseComponent = () => {
  const {
    courseName,
    setCourseName,
    courseDescription,
    setCourseDescription,
    title,
    saveOrUpdateCourse,
  } = useCourseComponentHook();

  return (
    <div className="container">
      <h2 className="text-center py-3">{title}</h2>
      <form onSubmit={saveOrUpdateCourse}>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Description</label>
          <textarea
            className="form-control"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default CourseComponent;
