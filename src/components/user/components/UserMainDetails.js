import React from 'react';
import { Link } from 'react-router-dom';

const UserMainDetails = ({ data }) => {
  return (
    data && (
      <div className="coop-main-details">
        <h2>Hello {data.username}, welcome to your profile.</h2>
      </div>
    )
  );
};

export default UserMainDetails;
