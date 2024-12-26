

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import ButtonLink from "./ButtonLink";
import useListCourseComponentHook from "../hooks/useListCourseComponentHook";

const ListCourseComponent = () => {
  const { courses, removeCourse, updateCourse } = useListCourseComponentHook();  // Correct hook usage

  // Ensure that courses are fetched after the component mounts
  useEffect(() => {
    // This will be triggered when the component mounts
    // Since fetchCourses is already invoked in the hook, no need to call it here.
  }, []);  // Empty array ensures it runs only once

  return (
    <div className="container">
      <h2 className="text-center py-3" style={{color:"purple"}}>Details of Courses</h2>
      <ButtonLink text="Add Course" toAction="/add-course" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Course ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">#Action</th>
            <th scope="col">#Action</th>
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
                    className="btn btn-outline-info me-2" style={{borderColor:"purple", color:"purple"}}
                    onClick={() => updateCourse(course.id)}>
                    Update
                  </button>
                </td>
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
