// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const homepageComponent = () => {
  // Sample data for the Bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Students',
        data: [20, 30, 45, 60, 70, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <h1>Student Department Management System</h1>
        <p>Streamlining the management of students and departments in one powerful platform.</p>
      </header>

      {/* Dashboard Section */}
      <section style={styles.section}>
        <h2>Dashboard Overview</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Students</h3>
            <p>Manage student records and personal information.</p>
            <Link style={styles.link} to="/students">View Students</Link>
          </div>
          <div style={styles.card}>
            <h3>Departments</h3>
            <p>Manage department details, courses, and staff.</p>
            <Link style={styles.link} to="/departments">View Departments</Link>
          </div>
          <div style={styles.card}>
            <h3>Reports</h3>
            <p>Generate reports on student performance and departmental activities.</p>
            <Link style={styles.link} to="/reports">View Reports</Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={styles.section}>
        <h2>About Us</h2>
        <p>We are a team of developers working to provide efficient solutions for educational institutions to manage student data, departmental information, and generate insightful reports. Our goal is to streamline administrative processes, making them quicker, easier, and more organized.</p>
        <img src="https://via.placeholder.com/600x300" alt="About Us" style={styles.image} />
      </section>

      {/* Statistics Section */}
      <section style={styles.section}>
        <h2>System Statistics</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3>Total Students</h3>
            <p>150</p>
          </div>
          <div style={styles.statCard}>
            <h3>Total Departments</h3>
            <p>5</p>
          </div>
          <div style={styles.statCard}>
            <h3>Reports Generated</h3>
            <p>30</p>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <section style={styles.section}>
        <h2>Monthly New Student Enrollment</h2>
        <div style={styles.graphContainer}>
          <Bar data={data} />
        </div>
      </section>

      {/* Contact Us Section */}
      <section style={styles.section}>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, please feel free to reach out to us!</p>
        <div style={styles.contactContainer}>
          <div style={styles.contactCard}>
            <h4>Email</h4>
            <p>support@studentmanagement.com</p>
          </div>
          <div style={styles.contactCard}>
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const styles = {
  dashboardContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '250px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '200px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    marginTop: '20px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  graphContainer: {
    marginTop: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  contactCard: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '250px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default homepageComponent;
