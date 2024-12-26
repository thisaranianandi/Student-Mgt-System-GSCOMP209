import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#5d1c73'}}>
          <a className="navbar-brand" href="#" style={{marginLeft:'30px', marginRight:'40px'}}>
            Student Management System
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard" style={{color:'#cab2d1'}}>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={{marginLeft:'90px', color:'#cab2d1'}} to="/students">
                  Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={{marginLeft:'15px', color:'#cab2d1'}} to="/departments">
                  Departments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  style={{marginLeft:'15px', color:'#cab2d1'}} to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  style={{marginLeft:'15px', color:'#cab2d1'}} to="/teachers">
                  Teachers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={{marginLeft:'200px', color:'#cab2d1'}}  to="/student-reports">
                  Student Reports
                </NavLink>
              </li>
           </ul>
          </div>
          <button
      className="btn btn-primary"
      style={{
        marginLeft: 'auto',
        marginRight: '10px',
        padding: '8px 25px',
        borderRadius: '5px',
        borderColor: 'white',
        backgroundColor: 'transparent', // No background color
        color: 'white', // White font color
        cursor: 'pointer',
      }}
    >
      Admin Login
    </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
