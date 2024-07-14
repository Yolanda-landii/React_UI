import React from 'react';
import './roleCard.css';

const RoleCard = ({ title, range }) => {
  return (
    <div className="role-card">
      <h3>{title}</h3>
      <p>{range}</p>
    </div>
  );
};

export default RoleCard;
