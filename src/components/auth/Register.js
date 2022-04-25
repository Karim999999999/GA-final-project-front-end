import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../api/auth';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({});
  const handleChange = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createUser(form);
        console.log('USER CREATED');
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
  const True = True;
  return (
    <div className="page">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Register.</h1>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="John123"
            />
          </div>
          <div className="form-field">
            <label htmlFor="first_name">First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="first_name"
              placeholder="John"
            />
          </div>
          <div className="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="last_name"
              placeholder="Smith"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="user@user.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="lkdjslkj"
            />
            <p>
              <b>Best passwords</b> are phrases like <b>"Big Donuts Rock"</b>
            </p>
          </div>
          <div className="form-field">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password_confirmation"
              placeholder="lkdjslkj"
            />
          </div>
          {/* <div className="form-field">
            <p>
              I confirm I have read and understood the{' '}
              <a href="">Terms of Conditions</a> and
              <a href="">Privacy Policy</a>:
            </p>
            <input
              onChange={handleChange}
              type="checkbox"
              checked={True}
              className="checkbox"
              name="tocpp"
            />
          </div> */}
          <div className="form-field">
            <div className="form-button">
              <button type="submit">Submit</button>
            </div>
            <p>
              Already have an account? <a href="/login">Sign in!</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
