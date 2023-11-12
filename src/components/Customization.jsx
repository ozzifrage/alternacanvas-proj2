// Customization.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Customization() {
  const hatItems = [
    // Your hat items here
    { id: 1, name: 'Hat 1', imageUrl: 'images/hats/hat_01.png' },
    { id: 2, name: 'Hat 2', imageUrl: 'images/hats/hat_02.png' },
    { id: 3, name: 'Hat 3', imageUrl: 'images/hats/hat_03.png' },
    { id: 4, name: 'Hat 4', imageUrl: 'images/hats/hat_04.png' },
    { id: 5, name: 'Hat 5', imageUrl: 'images/hats/hat_05.png' },
    { id: 6, name: 'Hat 6', imageUrl: 'images/hats/hat_06.png' },
    // Add more items as needed
  ];

  const shirtItems = [
    // Your hat items here
    { id: 1, name: 'Shirt 1', imageUrl: 'images/shirts/shirt_01.png' },
    { id: 2, name: 'Shirt 2', imageUrl: 'images/shirts/shirt_02.png' },
    { id: 3, name: 'Shirt 3', imageUrl: 'images/shirts/shirt_03.png' },
    { id: 4, name: 'Shirt 4', imageUrl: 'images/shirts/shirt_04.png' },
    { id: 5, name: 'Shirt 5', imageUrl: 'images/shirts/shirt_05.png' },
    { id: 6, name: 'Shirt 6', imageUrl: 'images/shirts/shirt_06.png' },
    { id: 7, name: 'Shirt 7', imageUrl: 'images/shirts/shirt_07.png' },
    { id: 8, name: 'Shirt 8', imageUrl: 'images/shirts/shirt_08.png' },
    // Add more items as needed
  ];

  const backgroundItems = [
    // Your hat items here
    { id: 1, name: 'Background 1', imageUrl: 'images/backgrounds/background_01.png' },
    { id: 2, name: 'Background 2', imageUrl: 'images/backgrounds/background_02.png' },
    { id: 3, name: 'Background 3', imageUrl: 'images/backgrounds/background_03.png' },
    { id: 4, name: 'Background 4', imageUrl: 'images/backgrounds/background_04.png' },
    { id: 5, name: 'Background 5', imageUrl: 'images/backgrounds/background_05.png' },
    { id: 6, name: 'Background 6', imageUrl: 'images/backgrounds/background_06.png' },
    // Add more items as needed
  ];

  const customSliderStyle = {
    margin: 'auto',
    width: '500px',
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  const carouselSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Row style={{ height: '100vh' }}>
        <Col xs={12} md={8} lg={8} style={{ height: '100%', backgroundColor: '#c0c0c0' }}>
          <h1>Customization Page</h1>
          <hr />
          <h2>Locker</h2>

          <h4 style={{ textAlign: 'center' }}>Hats</h4>
          <div>
            <Slider {...carouselSettings} style={customSliderStyle}>
              {hatItems.map((hat) => (
                <div key={hat.id}>
                  <img src={hat.imageUrl} alt={hat.name} style={{ width: '100px', height: 'auto' }} />
                  <p>{hat.name}</p>
                </div>
              ))}
            </Slider>
          </div>

          <h4 style={{ textAlign: 'center' }}>Shirts</h4>
          <div>
            <Slider {...carouselSettings} style={customSliderStyle}>
              {shirtItems.map((hat) => (
                <div key={hat.id}>
                  <img src={hat.imageUrl} alt={hat.name} style={{ width: '100px', height: 'auto' }} />
                  <p>{hat.name}</p>
                </div>
              ))}
            </Slider>
          </div>

          <h4 style={{ textAlign: 'center' }}>Backgrounds</h4>
          <div>
            <Slider {...carouselSettings} style={customSliderStyle}>
              {backgroundItems.map((hat) => (
                <div key={hat.id}>
                  <img src={hat.imageUrl} alt={hat.name} style={{ width: '100px', height: 'auto' }} />
                  <p>{hat.name}</p>
                </div>
              ))}
            </Slider>
          </div>

        </Col>

        <Col xs={12} md={4} lg={4} style={{ height: '100%', backgroundColor: '#808080', paddingTop: '80px', textAlign: 'center' }}>
          <img src="images/blank_profile_icon.png" alt="Blank Profile Icon" style={{ width: '300px', height: 'auto', margin: 'auto' }} />
          <h1 style={{paddingBottom: '75px'}}>John Smith</h1>
          <button style={{ width: '300px', height: '75px' }}>Open Chest! (5 Remaining)</button>
        </Col>
      </Row>
    </div>
  );
}

export default Customization;
