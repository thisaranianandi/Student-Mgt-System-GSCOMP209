import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import Dashboard from "./components/Dashboard";
import ListCourseComponent from "./components/ListCourseComponent";
import CourseComponent from "./components/CourseComponent";
import ListTeacherComponent from "./components/ListTeacherComponent";
import TeacherComponent from "./components/TeacherComponent";
import StudentReports from "./components/StudentReports";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />
          <Route path="/departments" element={<ListDepartmentComponent />} />
          <Route path="/add-department" element={<DepartmentComponent />} />
          <Route path="/courses" element={<ListCourseComponent />} />
          <Route path="/add-course" element={<CourseComponent />} />
          <Route path="/teachers" element={<ListTeacherComponent />} />
          <Route path="/add-teacher" element={<TeacherComponent />} />
          <Route path="/student-reports" element={<StudentReports />} />
          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent />}
          />
          <Route
            path="/edit-course/:id"
            element={<CourseComponent/>}
          />
          <Route
            path="/edit-teacher/:id"
            element={<TeacherComponent/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
