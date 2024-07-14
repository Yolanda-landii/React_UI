import React from 'react';
import './employeeCard.css';
// import picture from '../assets/images/picture.jpg';
// import th from '../assets/images/th.jpg';
// import coporate from '../assets/images/coporate.jpg';

const EmployeeCard = () => {
    return (
        <div className="employee-info">
        <div className="employee-stats">
          <div className="stat">
            <p>726</p>
            <p>employees</p>
          </div>
          <div className="stat">
            <p>97</p>
            <p>managers</p>
          </div>
          <div className="stat">
            <p>14</p>
            <p>layers</p>
          </div>
        </div>
        {/* <div className="employee-images">
          <img src={picture} alt="Employee 1" />
          <img src={th} alt="Employee 2" />
          <img src={coporate} alt="Employee 3" />
        </div> */}
      </div>
    );
  }; 
    

export default EmployeeCard;
