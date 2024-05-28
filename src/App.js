import React, { useState } from 'react';
import './App.css';

function App() {
    const initialSubjects = {
        english: true,
        maths: false,
        computerScience: false,
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "male",
        subjects: initialSubjects,
        url: "",
        selectedOption: "",
        about: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData(prevState => ({
                ...prevState,
                subjects: {
                    ...prevState.subjects,
                    [name]: checked
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            gender: "male",
            subjects: initialSubjects,
            url: "",
            selectedOption: "",
            about: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div className="App">
            <h1>YUP & FORMIK FORM</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                    />
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                    />
                    <label htmlFor="email">Enter Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter Mobile number"
                        required
                    />
                    <label>Gender*</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            id="other"
                            checked={formData.gender === "other"}
                            onChange={handleChange}
                        />
                        Other
                    </div>
                    <label>Your best Subject</label>
                    <div>
                        <input
                            type="checkbox"
                            name="english"
                            checked={formData.subjects.english}
                            onChange={handleChange}
                        />
                        English
                        <input
                            type="checkbox"
                            name="maths"
                            checked={formData.subjects.maths}
                            onChange={handleChange}
                        />
                        Maths
                        <input
                            type="checkbox"
                            name="computerScience"
                            checked={formData.subjects.computerScience}
                            onChange={handleChange}
                        />
                        Computer Science
                    </div>
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder="Enter URL"
                        required
                    />
                    <label>Select your choice</label>
                    <select
                        name="selectedOption"
                        id="select"
                        value={formData.selectedOption}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select your Ans</option>
                        <optgroup label="Beginners">
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="React">React</option>
                            <option value="Node">Node</option>
                            <option value="Express">Express</option>
                            <option value="MongoDB">MongoDB</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="About yourself"
                        required
                    ></textarea>
                    <button type="reset" onClick={handleReset}>Reset</button>
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
