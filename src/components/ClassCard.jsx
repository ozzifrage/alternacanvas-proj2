// ClassCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link if you're using react-router

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ClassCard({ title, color, linkTo }) {
  const cardStyle = {
    width: '350px', // Set your desired fixed width
    borderRadius: '10px', // Add rounded corners
    marginRight: '20px'
  };

  const headerStyle = {
    height: '200px', // Set your desired fixed height
    backgroundColor: color,
    border: 'none',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
  };

  return (
    <Card style={cardStyle}>

        <Card.Header style={headerStyle}></Card.Header>

        <Card.Body>
            <Link to={linkTo} className="stretched-link">
                <div className="h-100 d-flex align-items-center justify-content-center">
                {title}
                </div>
            </Link>
        </Card.Body>

    </Card>
  );
}

export default ClassCard;
