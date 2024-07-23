import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Dashboard from './pages/dashboard/Dashboard';
import EmployeeList from './pages/employeeList/EmployeeList';
import EmployeeEdit from './pages/editEmployee/EditEmployee';
import CreateEmployees from './pages/createEmployee/CreateEmployees';
import EmployeeManagemnt from './pages/ghHome/EmployeeManagement';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/employeeManagement" element={<EmployeeManagemnt />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-employee" element={<CreateEmployees/> } />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
            </Routes>
        </Router>
    );
}

export default App;
