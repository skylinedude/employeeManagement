import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createEmployeestyle.css'; 

const CreateEmployees = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        mobileNo: '',
        designation: '',
        gender: '',
        course: [],
        image: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setEmployee((prev) => ({
                ...prev,
                course: checked
                    ? [...prev.course, value]
                    : prev.course.filter((c) => c !== value)
            }));
        } else {
            setEmployee((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/employees', employee);
            navigate('/employee-list');
        } catch (error) {
            alert('Error creating employee');
        }
    };

    return (
        <div className="create-employee-container">
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit} className="create-employee-form">
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="form-input"
                />
                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="mobileNo"
                    value={employee.mobileNo}
                    onChange={handleChange}
                    placeholder="Mobile No"
                    required
                    className="form-input"
                />
                <select
                    name="designation"
                    value={employee.designation}
                    onChange={handleChange}
                    required
                    className="form-select"
                >
                    <option value="">Select Designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
                <div className="form-group">
                    <label>Gender:</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={employee.gender === 'Male'}
                            onChange={handleChange}
                            required
                            className="form-radio"
                        /> Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={employee.gender === 'Female'}
                            onChange={handleChange}
                            required
                            className="form-radio"
                        /> Female
                    </div>
                </div>
                <div className="form-group">
                    <label>Course:</label>
                    <div>
                        <input
                            type="checkbox"
                            name="course"
                            value="MCA"
                            checked={employee.course.includes('MCA')}
                            onChange={handleChange}
                            className="form-checkbox"
                        /> MCA
                        <input
                            type="checkbox"
                            name="course"
                            value="BCA"
                            checked={employee.course.includes('BCA')}
                            onChange={handleChange}
                            className="form-checkbox"
                        /> BCA
                        <input
                            type="checkbox"
                            name="course"
                            value="BSC"
                            checked={employee.course.includes('BSC')}
                            onChange={handleChange}
                            className="form-checkbox"
                        /> BSC
                    </div>
                </div>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setEmployee((prev) => ({ ...prev, image: e.target.files[0] }))}
                    className="form-file"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default CreateEmployees;
