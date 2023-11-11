// Customization.js
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Customization() {

  return (
    <div>
      <Row style={{ height: '100vh' }}>
        <Col xs={12} md={8} lg={8} style={{ height: '100%', backgroundColor: '#ffffff' }}>
          <h1>Customization Page</h1>
          <h2>Locker</h2>
          <h2>Hats</h2>
          <h5>[Carousel of hat selections]</h5>
          <h2>Shirts</h2>
          <h5>[Carousel of shirt selections]</h5>
          <h2>Backgrounds</h2>
          <h5>[Carousel of background selections]</h5>
          <h2>Canvas Theme</h2>
          <h5>[Carousel of theme selections]</h5>
        </Col>
        <Col xs={12} md={4} lg={4} style={{ height: '100%', backgroundColor: '#c0c0c0', paddingTop: '50px' }}>
          <h2>Jim</h2>
          <h2>[picture with user's cosmetics here]</h2>
          <h2>[picture showing 'buddy']</h2>
          <h2>[Button to open chests!]</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Customization;
