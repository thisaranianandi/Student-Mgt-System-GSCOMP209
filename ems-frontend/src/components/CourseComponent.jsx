


import useCourseComponentHook from "../hooks/useCourseComponentHook";
import ButtonLink from "./ButtonLink";

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
    <div className="container mt-5" >
 <ButtonLink text="Go Back"  toAction="/courses"  />
    <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'#fefdff', padding:'20px', marginTop:'40px'}}>
    
      <h2 className="text-center py-3">{title}</h2>
      <form onSubmit={saveOrUpdateCourse}>
        <div className="mb-3">
          <label className="form-label">Course Id</label>
          <input
            type="text"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <textarea
            className="form-control"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit"   className="btn btn-outline-success " style={{ color: 'purple',borderColor: "purple", padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};



export default CourseComponent;
