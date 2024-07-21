import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardStyle.css'; 

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Welcome to Admin Panel</h1>
            <nav className="dashboard-nav">
                <Link to="/create-employee" className="nav-link">Create Employee</Link>
                <Link to="/employee-list" className="nav-link">Employee List</Link>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
        </div>
    );
};

export default Dashboard;
