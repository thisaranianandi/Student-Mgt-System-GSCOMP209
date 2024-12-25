import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#5d1c73'}}>
          <a className="navbar-brand" href="#" style={{marginLeft:'30px', marginRight:'50px'}}>
            Student Management System
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
            <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">
                  Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/departments">
                  Departments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teachers">
                  Teachers
                </NavLink>
              </li>
           </ul>
          </div>
          <button
      className="btn btn-primary"
      style={{
        marginLeft: 'auto',
        marginRight:'10px',
        padding: '8px 25px',
        borderRadius: '5px',
        backgroundColor: '#c08bd3',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    > Admin Login
    </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
