import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Customization() {
  const [modalShow, setModalShow] = useState(false);
  const [remainingChests, setRemainingChests] = useState(5);
  const [updateSlider, setUpdateSlider] = useState(false);
  const [lastUnlockedItem, setLastUnlockedItem] = useState(null);

  const [hatItems, setHatItems] = useState([
    { id: 1, name: 'Top Hat', imageUrl: 'images/hats/hat_01.png' },
    { id: 2, name: 'Santa Hat', imageUrl: 'images/hats/hat_02.png' },
    { id: 3, name: 'Green Hat', imageUrl: 'images/hats/hat_03.png' },
    { id: 4, name: 'Cowboy Hat', imageUrl: 'images/hats/hat_04.png' },
  ]);

  const [lockedHatItems, setLockedHatItems] = useState([
    { id: 5, name: 'Blue Cap', imageUrl: 'images/hats/hat_05.png' },
    { id: 6, name: 'Horned Hat', imageUrl: 'images/hats/hat_06.png' },
  ]);

  const [shirtItems, setShirtItems] = useState([
    { id: 1, name: 'Red Shirt', imageUrl: 'images/shirts/shirt_01.png' },
    { id: 3, name: 'Yellow Shirt', imageUrl: 'images/shirts/shirt_03.png' },
    { id: 2, name: 'Green Shirt', imageUrl: 'images/shirts/shirt_02.png' },
    { id: 4, name: 'Teal Shirt', imageUrl: 'images/shirts/shirt_04.png' },
  ]);

  const [lockedShirtItems, setLockedShirtItems] = useState([
    { id: 5, name: 'Blue Shirt', imageUrl: 'images/shirts/shirt_05.png' },
    { id: 6, name: 'Indigo Shirt', imageUrl: 'images/shirts/shirt_06.png' },
    { id: 7, name: 'Purple Shirt', imageUrl: 'images/shirts/shirt_07.png' },
    { id: 8, name: 'Pink Shirt', imageUrl: 'images/shirts/shirt_08.png' },
  ]);

  const [backgroundItems, setBackgroundItems] = useState([
    { id: 1, name: 'Night', imageUrl: 'images/backgrounds/background_01.png' },
    { id: 2, name: 'Abstract', imageUrl: 'images/backgrounds/background_02.png' },
    { id: 3, name: 'Flowers', imageUrl: 'images/backgrounds/background_03.png' },
    { id: 4, name: 'Green Haze', imageUrl: 'images/backgrounds/background_04.png' },
  ]);

  const [lockedBackgroundItems, setLockedBackgroundItems] = useState([
    { id: 5, name: 'Forest', imageUrl: 'images/backgrounds/background_05.png' },
    { id: 6, name: 'Royal', imageUrl: 'images/backgrounds/background_06.png' },
  ]);

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

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Item!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You unlocked a new {lastUnlockedItem?.type}!</h4>
          {/* Display the unlocked item image if available */}
          {lastUnlockedItem && (
            <img
              src={lastUnlockedItem.imageUrl}
              alt={lastUnlockedItem.name}
              style={{ width: '100px', height: 'auto' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleOpenChest = () => {
    if (remainingChests > 0) {
      setRemainingChests((prevChests) => prevChests - 1);
  
      const lockedLists = [lockedHatItems, lockedShirtItems, lockedBackgroundItems];

      // Check if all locked item lists are empty
      if (lockedHatItems.length === 0 && lockedShirtItems.length === 0 && lockedBackgroundItems.length === 0) {
        return;
      }

      else {
        // Loop, choose random type and check if that list is empty. If so, choose again
        let listToUse = lockedLists[Math.floor(Math.random() * lockedLists.length)];
        while (listToUse.length === 0) {
          listToUse = lockedLists[Math.floor(Math.random() * lockedLists.length)];
        }
        
        // Rand select from this list and unlock that item
        const randomItem = listToUse[Math.floor(Math.random() * listToUse.length)];

        let itemType = '';

        if (listToUse === lockedHatItems) {
          itemType = 'hat';
          setHatItems((prevItems) => [...prevItems, randomItem]);
          setLockedHatItems((prevItems) => prevItems.filter(item => item.id !== randomItem.id));
        } else if (listToUse === lockedShirtItems) {
          itemType = 'shirt';
          setShirtItems((prevItems) => [...prevItems, randomItem]);
          setLockedShirtItems((prevItems) => prevItems.filter(item => item.id !== randomItem.id));
        } else {
          itemType = 'background';
          setBackgroundItems((prevItems) => [...prevItems, randomItem]);
          setLockedBackgroundItems((prevItems) => prevItems.filter(item => item.id !== randomItem.id));
        } 

        // Update the last unlocked item
        setLastUnlockedItem({ ...randomItem, type: itemType });
    
        // Toggle the state variable to force a re-render of the Slider
        setUpdateSlider((prev) => !prev);
    
        setModalShow(true);
      }
    }
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
            <Slider key={updateSlider} {...carouselSettings} style={customSliderStyle}>
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
              {shirtItems.map((shirt) => (
                <div key={shirt.id}>
                  <img src={shirt.imageUrl} alt={shirt.name} style={{ width: '100px', height: 'auto' }} />
                  <p>{shirt.name}</p>
                </div>
              ))}
            </Slider>
          </div>

          <h4 style={{ textAlign: 'center' }}>Backgrounds</h4>
          <div>
            <Slider {...carouselSettings} style={customSliderStyle}>
              {backgroundItems.map((background) => (
                <div key={background.id}>
                  <img src={background.imageUrl} alt={background.name} style={{ width: '100px', height: 'auto' }} />
                  <p>{background.name}</p>
                </div>
              ))}
            </Slider>
          </div>

        </Col>

        <Col xs={12} md={4} lg={4} style={{ height: '100%', backgroundColor: '#808080', paddingTop: '80px', textAlign: 'center' }}>
          <img src="images/blank_profile_icon.png" alt="Blank Profile Icon" style={{ width: '300px', height: 'auto', margin: 'auto' }} />
          <h1 style={{ paddingBottom: '75px' }}>John Smith</h1>
          <button
            style={{ width: '300px', height: '75px' }}
            onClick={handleOpenChest}
            disabled={remainingChests === 0}
          >
            Open Chest! ({remainingChests} Remaining)
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Customization;
