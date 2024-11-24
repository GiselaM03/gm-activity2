/*import React from "react";
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {
    return (
        <>
            <h1 className='sign-up'>SIGN UP</h1>
            <Footer />
        </>
    );
}*/
/*
import React, { useState } from 'react';
import './SignUp.css'; // Add styles if needed
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State for handling form validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Submitted Successfully', formData);
      // Here you would typically send the data to your server/API
      // For now, just reset the form and clear errors
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
        <>
            <h1 className='sign-up'>SIGN UP</h1>
            <Footer />
        </>
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}
*/

import React, { useState } from 'react';
import './SignUp.css'; // Add styles if needed
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State for handling form validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Submitted Successfully', formData);
      // Here you would typically send the data to your server/API
      // For now, just reset the form and clear errors
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <>
      <h1 className='sign-up'>SIGN UP</h1>
      <div className="sign-up-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
      <Footer />  {/* Make sure Footer is below the form */}
    </>
  );
}
