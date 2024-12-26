// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const StudentReports = () => {
  // Dummy student data
  const students = [
    { id: 1, name: 'Senith	Fernando', department: 'Computer Science' },
    { id: 2, name: 'Lenuthish	De Silva', department: 'Mechanical Engineering' },
    { id: 3, name: 'Senith	Fernando', department: 'Business Administration' },
  ];

  // State to manage selected student and search input
  const [searchId, setSearchId] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  // const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSearchChange = (event) => {
    const id = event.target.value;
    setSearchId(id);
    const student = students.find((s) => s.id === parseInt(id));
    setSelectedStudent(student || null);
  };

  // const handleDepartmentChange = (event) => {
  //   setSelectedDepartment(event.target.value);
  // };

  const downloadReport = (url) => {
    window.open(url, '_blank');
  };

  // Dummy report URLs
  const attendanceReportUrl = selectedStudent
    ? `/reports/attendance/${selectedStudent.name.toLowerCase().replace(' ', '-')}.pdf`
    : '#';
  const courseMarksReportUrl = selectedStudent
    ? `/reports/course-marks/${selectedStudent.name.toLowerCase().replace(' ', '-')}.pdf`
    : '#';
  const teacherReportUrl = selectedStudent
    ? `/reports/teacher/${selectedStudent.name.toLowerCase().replace(' ', '-')}.pdf`
    : '#';

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{color:'purple'}}>Student Reports</h2>

      {/* Search for student ID */}
      <div className="form-group mb-4">
        <label htmlFor="studentSearch" className="form-label">Search Student by ID:</label>
        <input
          id="studentSearch"
          type="number"
          className="form-control"
          placeholder="Enter Student ID"
          value={searchId}
          onChange={handleSearchChange}
        />
      </div>

      {/* Dropdown to select department
      <div className="form-group mb-4">
        <label htmlFor="departmentSelect" className="form-label">Select Department:</label>
        <select
          id="departmentSelect"
          className="form-select"
          onChange={handleDepartmentChange}
          value={selectedDepartment}
        >
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* Display selected student details */}
      {selectedStudent && (
        <div className="mb-3">
          <h5>Selected Student:</h5>
          <p>Name: {selectedStudent.name}</p>
          <p>ID: {selectedStudent.id}</p>
          <p>Department: {selectedStudent.department}</p>
        </div>
      )}

      {/* Reports section */}
      {selectedStudent && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Reports</h5>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
               Student Attendance Report
                <button
                  className="btn btn-primary" style={{
                    backgroundColor: 'transparent',
                    color: 'purple',
                    border: '2px solid purple',
                    borderRadius: '5px',
                    padding: '8px 25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => downloadReport(attendanceReportUrl)}
                >
                  Download
                </button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Course Marks Report
                <button
                  className="btn btn-primary" style={{
                    backgroundColor: 'transparent',
                    color: 'purple',
                    border: '2px solid purple',
                    borderRadius: '5px',
                    padding: '8px 25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => downloadReport(courseMarksReportUrl)}
                >
                  Download
                </button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Teacher Recommandation Report
                <button
                  className="btn btn-primary" style={{
                    backgroundColor: 'transparent',
                    color: 'purple',
                    border: '2px solid purple',
                    borderRadius: '5px',
                    padding: '8px 25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => downloadReport(teacherReportUrl)}
                >
                  Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentReports;
