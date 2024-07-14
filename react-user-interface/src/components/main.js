import React from 'react';
import './main.css';
import RoleCard from './statsCard';
import StatsCard from './roleCard';
import EmployeeCard from './employeeCard';

const Main = () => {
    return (
        <main className="main">
            <h1>Managerial optimization for your companies</h1>
            <p>Whether you choose efficiency or flexibility for your organization, restructuring your teams will lead to improved productivity, collaboration and overall business results.</p>
            <div className="buttons">
            <button className="services">All services</button>
            <button className="demo">Book a demo</button>
            </div>
            <div className="cards">
            <StatsCard title="Customer happiness" value="7.8" />
            <StatsCard title="Employee performance" value="9.4" />
            <StatsCard title="Employee satisfaction" value="8.5" />
            </div>
            <div className="employee-stats">
            <RoleCard role="vice president" range="8 to 9" color="green" />
            <RoleCard role="lead manager" range="4 to 6" color="yellow" />
            <RoleCard role="manager" range="5 to 7" color="grey" />
            <RoleCard role="new role" range="create new one / select template" color="white" />
            </div>
            <EmployeeCard />
        </main>
    );
};

export default Main;
