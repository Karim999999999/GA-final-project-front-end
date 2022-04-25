import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';
const Login = () => {
  const initialState = { email: '', password: '' };
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(credentials);
    if (sessionStorage.token) {
      setCredentials(initialState);
      navigate('/');
    } else {
      console.log('WRONG PASS');
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="page">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Login.</h1>
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
          </div>
          {showErrorMessage ? (
            <p>Email or password is incorrect. Try again! </p>
          ) : (
            ''
          )}
          <div className="form-field">
            <div className="form-button">
              <button type="submit">Submit</button>
            </div>
            <p>
              No account? <a href="/register">Sign Up!</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
