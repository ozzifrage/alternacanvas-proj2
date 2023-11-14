import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Customization() {
  const [modalShow, setModalShow] = useState(false);
  const [remainingChests, setRemainingChests] = useState(15);
  const [lastUnlockedItem, setLastUnlockedItem] = useState(null);
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  const [hatItems, setHatItems] = useState([
    { id: 1, name: 'Top Hat', imageUrl: 'images/hats/hat_01.png' },
    { id: 2, name: 'Santa Hat', imageUrl: 'images/hats/hat_02.png' },
    { id: 3, name: 'Green Hat', imageUrl: 'images/hats/hat_03.png' },
    { id: 4, name: 'Cowboy Hat', imageUrl: 'images/hats/hat_04.png' },
    
    
  ]);

  const [lockedHatItems, setLockedHatItems] = useState([
    { id: 5, name: 'Blue Cap', imageUrl: 'images/hats/hat_05.png' },
    { id: 6, name: 'Horned Hat', imageUrl: 'images/hats/hat_06.png' },
    { id: 7, name: 'UC Cap', imageUrl: 'images/hats/hat_07.png' },
    { id: 8, name: 'Pirate Hat', imageUrl: 'images/hats/hat_08.png' },
    { id: 9, name: 'Elephant Costume', imageUrl: 'images/hats/hat_09.png' },
    { id: 9, name: "Cat in the Hat's Hat", imageUrl: 'images/hats/hat_10.png' },
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
    { id: 7, name: 'Minecraft', imageUrl: 'images/backgrounds/background_07.png' },
    { id: 8, name: 'UC Campus', imageUrl: 'images/backgrounds/background_08.png' },
    { id: 9, name: 'Pirate Ship', imageUrl: 'images/backgrounds/background_09.png' },
    { id: 10, name: 'Fall Forest', imageUrl: 'images/backgrounds/background_10.png' },
    { id: 11, name: 'Cat Cafe', imageUrl: 'images/backgrounds/background_11.png' },
  ]);

  const customSliderStyle = {
    margin: 'auto',
    width: '500px',
  };

  // Import your arrow images

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: '#888888', // Set the color to #888888
          fontSize: '44px', // Adjust the font size if needed
          marginRight: '55px', // Adjust margin if needed
          cursor: 'pointer',
        }}
        onClick={onClick}
      >{'>'}</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: '#888888', // Set the color to #888888
          fontSize: '44px', // Adjust the font size if needed
          marginLeft: '-60px', // Adjust margin if needed
          cursor: 'pointer',
        }}
        onClick={onClick}
      >{'<'}</div>
    );
  }
  
  useEffect(() => {
    // Set default selections when the component mounts
    if (hatItems.length > 0) {
      setSelectedHat(hatItems[0]);
    }
    if (shirtItems.length > 0) {
      setSelectedShirt(shirtItems[0]);
    }
    if (backgroundItems.length > 0) {
      setSelectedBackground(backgroundItems[0]);
    }
  }, []);  

  const hatCarouselSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (currentSlide, nextSlide) => {
      // Update selected hat based on the current center item
      if (hatItems.length > 0) setSelectedHat(hatItems[currentSlide]);
    },
    centerMode: true,
    centerPadding: '0',
  };

  const shirtCarouselSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (currentSlide, nextSlide) => {
      // Update selected hat based on the current center item
      if (hatItems.length > 0) setSelectedShirt(shirtItems[currentSlide]);
    },
    centerMode: true,
    centerPadding: '0',
  };

  const backgroundCarouselSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (currentSlide, nextSlide) => {
      // Update selected hat based on the current center item
      if (hatItems.length > 0) setSelectedBackground(backgroundItems[currentSlide]);
    },
    centerMode: true,
    centerPadding: '0',
  };
  

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
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
          {lastUnlockedItem && (
            <img
              src={lastUnlockedItem.imageUrl}
              alt={lastUnlockedItem.name}
              style={{ width: '300px', height: 'auto' }}
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
        console.warn("No locked items available to unlock!");
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
    
        setModalShow(true);
      }
    }
  };
  
  return (
    <div>
      <Row style={{ height: '100vh' }}>
        <Col xs={12} md={8} lg={8} style={{ height: '100%', backgroundColor: '#ffffff' }}>
          <h1>Customization Page</h1>
          <hr />

            {/* Hat Slider */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '80px' }}>
              <h4 style={{ textAlign: 'left', marginRight: '10px' }}>Hats</h4>
              <div style={{ position: 'relative', marginLeft: '182px' }}>
                <Slider {...hatCarouselSettings} style={customSliderStyle}>
                  {hatItems.map((hat) => (
                    <div key={hat.id}>
                      <img src={hat.imageUrl} alt={hat.name} style={{ width: '100px', height: 'auto' }} />
                      <p>{hat.name}</p>
                    </div>
                  ))}
                </Slider>
                {/* Hat Slider Pointer */}
                <div
                  style={{
                    position: 'absolute',
                    left: '40%', // Center horizontally within the relative container
                    transform: 'translateX(-50%)',
                    top: '-20%', // Center vertically
                    transform: 'translateY(-50%)',
                  }}
                >
                  <img
                    src="./images/selection_arrow.png"
                    alt="Slider Pointer"
                    style={{ height: '30px', width: 'auto' }}
                  />
                </div>

              </div>
            </div>

          {/* Shirt Slider */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '80px' }}>
            <h4 style={{ textAlign: 'left', marginRight: '10px' }}>Shirts</h4>
            <div style={{ position: 'relative', marginLeft: '168px' }}>
              <Slider {...shirtCarouselSettings} style={customSliderStyle}>
                {shirtItems.map((shirt) => (
                  <div key={shirt.id}>
                    <img src={shirt.imageUrl} alt={shirt.name} style={{ width: '100px', height: 'auto' }} />
                    <p>{shirt.name}</p>
                  </div>
                ))}
              </Slider>
              {/* Shirt Slider Pointer */}
              <div
                style={{
                  position: 'absolute',
                  left: '40%', // Center horizontally within the relative container
                  transform: 'translateX(-50%)',
                  top: '-20%', // Center vertically
                  transform: 'translateY(-50%)',
                }}
              >
                <img
                  src="./images/selection_arrow.png"
                  alt="Slider Pointer"
                  style={{ height: '30px', width: 'auto' }}
                />
              </div>
            </div>
          </div>


          {/* Background Slider */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '80px' }}>
            <h4 style={{ textAlign: 'left' }}>Backgrounds</h4>
            <div style={{ position: 'relative', marginLeft: '100px' }}>
              <Slider {...backgroundCarouselSettings} style={customSliderStyle}>
                {backgroundItems.map((background) => (
                  <div key={background.id}>
                    <img src={background.imageUrl} alt={background.name} style={{ width: '100px', height: 'auto' }} />
                    <p>{background.name}</p>
                  </div>
                ))}
              </Slider>
              {/* Background Slider Pointer */}
              <div
                style={{
                  position: 'absolute',
                  left: '40%', // Center horizontally within the relative container
                  transform: 'translateX(-50%)',
                  top: '-20%', // Center vertically
                  transform: 'translateY(-50%)',
                }}
              >
                <img
                  src="./images/selection_arrow.png"
                  alt="Slider Pointer"
                  style={{ height: '30px', width: 'auto' }}
                />
              </div>
            </div>
          </div>


        </Col>

        <Col xs={12} md={4} lg={4} style={{ height: '100%', backgroundColor: '#444444', paddingTop: '80px', textAlign: 'center' }}>
        <div style={{ position: 'relative' }}>

          {/* Display the selected background */}
          {selectedBackground && (
            <img
              id="profile-pic-background"
              src={selectedBackground.imageUrl}
              alt={selectedBackground.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 100,
                width: '300px',
                height: '300px',
                opacity: 1,
              }}
            />
          )}

          {/* Display the profile picture */}
          <img
            id="profile-pic"
            src="images/blank_profile_icon.png"
            alt="Blank Profile Icon"
            style={{
              position: 'absolute',
              top: 0,
              left: 100, // Adjust the left position as needed
              width: '300px',
              height: 'auto',
              margin: 'auto',
              zIndex: 1, // Set a lower z-index
            }}
          />

          {/* Display the shirt image */}
          {selectedShirt && (
            <img
              id="shirt-image"
              src={selectedShirt.imageUrl}
              alt={selectedShirt.name}
              style={{
                position: 'absolute',
                top: 206, 
                left: 160,  
                width: '180px',
                height: 'auto',
                margin: 'auto',
                zIndex: 2, 
              }}
            />
          )}

          {/* Display the shirt image */}
          {selectedHat && (
            <img
              id="hat-image"
              src={selectedHat.imageUrl}
              alt={selectedHat.name}
              style={{
                position: 'absolute',
                top: 55, 
                left: 197,  
                width: '100px',
                height: 'auto',
                margin: 'auto',
                zIndex: 2, 
              }}
            />
          )}

          <h1 style={{ paddingTop: '325px', paddingBottom: '50px', color: 'white' }}>John Smith</h1>


          <button
            style={{ 
              width: '450px', 
              height: '100px',
              fontSize: '30px',
             }}
            onClick={handleOpenChest}
            disabled={remainingChests === 0}
          >
            Open Chest! ({remainingChests} Remaining)
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>

        </Col>
      </Row>
    </div>
  );
}

export default Customization;
