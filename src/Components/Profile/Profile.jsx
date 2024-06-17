import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from "../Navbar/Navbar2";

function Profile({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/'); // Redirect to home page after logout
    };

    return (
        <div>
            <Navbar2 />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    {/* Profile Image and Choose Image */}
                    <div className="flex items-center mb-6">
                        <div className="mr-4">
                            <img src="https://drive.google.com/thumbnail?id=" alt="Profile" className="rounded-full h-24 w-full max-w-24" />
                        </div>
                        <div>
                            <label htmlFor="profile_image" className="block mb-1">
                                Choose Image:
                            </label>
                            <input
                                type="file"
                                name="profile_image"
                                id="profile_image"
                                accept="image/*"
                                className="box" // Applying the 'box' class here
                            />
                        </div>
                    </div>
                    <form action="" method="post" encType="multipart/form-data">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block mb-1">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-1">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone_number" className="block mb-1">
                                    Phone Number:
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="employee_type" className="block mb-1">
                                    Employment Type:
                                </label>
                                <select
                                    name="employee_type"
                                    id="employee_type"
                                    className="w-full px-4 py-2 border rounded-md"
                                >
                                    <option value="">Select Type</option>
                                    <option value="full_time">Full Time</option>
                                    <option value="part_time">Part Time</option>
                                    <option value="contract">Contract</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="position" className="block mb-1">
                                    Position:
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="company_name" className="block mb-1">
                                    Company Name:
                                </label>
                                <input
                                    type="text"
                                    name="company_name"
                                    id="company_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-1">
                                    Location:
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="batch" className="block mb-1">
                                    Batch:
                                </label>
                                <select name="batch" className="w-full px-4 py-2 border rounded-md">
                                    <option value="">Select Batch</option>
                                    <option value={2000}>2000</option>
                                    <option value={2001}>2001</option>
                                    <option value={2001}>2002</option>
                                    <option value={2001}>2003</option>
                                    <option value={2001}>2004</option>
                                    <option value={2001}>2005</option>
                                    <option value={2001}>2006</option>
                                    <option value={2001}>2007</option>
                                    <option value={2001}>2008</option>
                                    <option value={2001}>2009</option>
                                    <option value={2001}>2010</option>
                                    <option value={2001}>2011</option>
                                    <option value={2001}>2012</option>
                                    <option value={2001}>2013</option>
                                    <option value={2001}>2014</option>
                                    <option value={2001}>2015</option>
                                    <option value={2001}>2016</option>
                                    <option value={2001}>2017</option>
                                    <option value={2001}>2018</option>
                                    <option value={2001}>2019</option>
                                    <option value={2001}>2020</option>
                                    <option value={2001}>2021</option>
                                    <option value={2001}>2022</option>
                                    <option value={2022}>2022</option>
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                    <option value={2029}>2029</option>
                                    <option value={2030}>2030</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="department" className="block mb-1">
                                    Department:
                                </label>
                                <select
                                    name="department"
                                    id="department"
                                    className="w-full px-4 py-2 border rounded-md"
                                >
                                    <option value="">Select Department</option>
                                    <option value="AI & DS">AI &amp; DS</option>
                                    <option value="ECE">ECE</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EIE">EIE</option>
                                    <option value="CSE (IoT)">CSE (IoT)</option>
                                    <option value="M.Tech CSE">M.Tech CSE</option>
                                    <option value="CSBS">CSBS</option>
                                    <option value="IT">IT</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MBA">MBA</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ICE">ICE</option>
                                    <option value="CSE (AI & ML)">CSE (AI &amp; ML)</option>
                                    <option value="Mechanical and Automation">
                                        Mechanical and Automation
                                    </option>
                                </select>
                            </div>
                        </div>
                        <input
                            type="submit"
                            defaultValue="Save"
                            name="update_profile"
                            className="block w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                        />
                    </form>
                </div>
            </div>
            <input
                type="button" // Changed to button
                value="Logout"
                name="logout"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                onClick={handleLogout} // Use handleLogout to include navigation
            />
        </div>
    );
}

export default Profile;
