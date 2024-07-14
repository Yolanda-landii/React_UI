import React from 'react';
import './statsCard.css';

const StatsCard = ({ label, value }) => {
  return (
    <div className="stats-card">
      <p className="value">{value}</p>
      <p className="label">{label}</p>
    </div>
  );
};

export default StatsCard;
