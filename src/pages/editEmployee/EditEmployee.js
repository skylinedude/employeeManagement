import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './editEmployeeStyle.css'; 

const EmployeeEdit = () => {
    const { id } = useParams();
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

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
                setEmployee(response.data);
            } catch (error) {
                console.error('Error fetching employee', error);
            }
        };

        fetchEmployee();
    }, [id]);

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
            await axios.put(`http://localhost:5000/api/employees/${id}`, employee);
            navigate('/employee-list');
        } catch (error) {
            alert('Error updating employee');
        }
    };

    return (
        <div className="edit-container">
            <h1 className="edit-header">Edit Employee</h1>
            <form className="edit-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="edit-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="edit-input"
                    required
                />
                <input
                    type="text"
                    name="mobileNo"
                    value={employee.mobileNo}
                    onChange={handleChange}
                    placeholder="Mobile No"
                    className="edit-input"
                    required
                />
                <select
                    name="designation"
                    value={employee.designation}
                    onChange={handleChange}
                    className="edit-select"
                    required
                >
                    <option value="">Select Designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
                <div className="edit-gender">
                    <label>Gender:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={employee.gender === 'Male'}
                        onChange={handleChange}
                        className="edit-radio"
                        required
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={employee.gender === 'Female'}
                        onChange={handleChange}
                        className="edit-radio"
                        required
                    /> Female
                </div>
                <div className="edit-course">
                    <label>Course:</label>
                    <input
                        type="checkbox"
                        name="course"
                        value="MCA"
                        checked={employee.course.includes('MCA')}
                        onChange={handleChange}
                        className="edit-checkbox"
                    /> MCA
                    <input
                        type="checkbox"
                        name="course"
                        value="BCA"
                        checked={employee.course.includes('BCA')}
                        onChange={handleChange}
                        className="edit-checkbox"
                    /> BCA
                    <input
                        type="checkbox"
                        name="course"
                        value="BSC"
                        checked={employee.course.includes('BSC')}
                        onChange={handleChange}
                        className="edit-checkbox"
                    /> BSC
                </div>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setEmployee((prev) => ({ ...prev, image: e.target.files[0] }))}
                    className="edit-file"
                />
                <button type="submit" className="edit-button">Update</button>
            </form>
        </div>
    );
};

export default EmployeeEdit;
