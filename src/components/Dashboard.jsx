// Dashboard.js
import React from 'react';
import ClassCard from './ClassCard'; // Adjust the path accordingly

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex flex-row">
        <ClassCard title="(23FS-Full) USER INTERFACE I (001)" color="#3498db" linkTo="/classes/class1" />
        <ClassCard title="(23FS-Full) SENIOR DESIGN I (001)" color="#2ecc71" linkTo="/classes/class2" />
        <ClassCard title="(23FS-Full) COMPUTER GRAPHICS I (001)" color="#e74c3c" linkTo="/classes/class3" />
      </div>
    </div>
  );
}

export default Dashboard;
