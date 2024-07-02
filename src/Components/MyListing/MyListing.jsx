// import React from 'react';
// import { Container, Card, Row, Col, Form, FormControl, Navbar, Image, Button, Dropdown } from 'react-bootstrap';
// import profile from '../../assets/profile.png';
// import searchlight from '../../assets/searchlight.png';
// import "./mylisting.css"; // Import the custom CSS file

// export const MyListing = () => {
//   return (
//     <div>
//       <Container className="mt-4">
//         <Row>
//           <Col className="bg-light p-3 d-flex justify-content-between align-items-center">
//             <div className="mt-3">
//               <Container>
//                 <Row>
//                   <Col className="bg-white text-dark fw-bold p-2 approved">Approved</Col>
//                   <Col className="text-dark fw-bold p-2 unapproved">Unapproved</Col>
//                 </Row>
//               </Container>    
//               <h1>My List</h1>
//             </div>
//             <div className="d-flex flex-column align-items-end">
//               <Navbar bg="light" className="p-0">
//                 <Navbar.Text>
//                   <Image src={profile} roundedCircle className="profile-image" />
//                 </Navbar.Text>
//               </Navbar>
//               <Form inline className="mt-2 search-form" style={{ width: "200px" }}>
//                 <FormControl type="text" placeholder="Search" className="search-input" />
//                 <Image src={searchlight} className="ms-3" />
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* New Container and Row for Search Area and Dropdowns */}
//       <Container className="mt-4">
//         <Row className="align-items-center">
//           <Col md={3}>
//             <FormControl type="text" placeholder="Search" className="me-2" style={{ width: '100%' }} />
//           </Col>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <Col key={index}>
//               <Dropdown>
//                 <Dropdown.Toggle variant="" className="bg-white rounded-5 my-1" id={`dropdown-basic-${index}`}>
//                   {index === 0 && "For sale"}
//                   {index === 1 && "Price"}
//                   {index === 2 && "Bods & Bath"}
//                   {index === 3 && "Home type"}
//                   {index === 4 && "More"}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Col>
//           ))}
//           <Col>
//             <Button className="apply-filter rounded-5">Apply Filter</Button>
//           </Col>
//         </Row>
//       </Container>

//       <Container className="mt-5">
//             <Row>
//                 <Col className="">
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 1</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 1.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 2</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 2.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 3</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 3.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className="mt-4 ">
//                 <Col className="">
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 1</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 1.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 2</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 2.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card style={{ width: '25rem' }}>
//                         <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//                         <Card.Body>
//                             <Card.Title>Card 3</Card.Title>
//                             <Card.Text>
//                                 This is a sample card with image 3.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>

//     </div>
//   );
// }

// export default MyListing;


import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form , Button} from 'react-bootstrap';
import firstlistingimage from '../../assets/firstlistingimage.png';
import pencil from '../../assets/pencil.png'; 
import secondcardlisting from '../../assets/secondcardlisting.png';
import thirdcardlisting from '../../assets/thirdcardlisting.png';
import fourthcardlisting from '../../assets/fourthcardlisting.png';
import fifthcardlisting from '../../assets/fifthcardlisting.png';
import sixthcardlisting from '../../assets/sixthcardlisting.png';
import bath from '../../assets/bath.png';
import bed from '../../assets/bed.png';
import room from '../../assets/room.png';
import sqft from '../../assets/sqft.png';
import Search from '../../assets/Search.png';
import dropdown from '../../assets/dropdown.png';
import sorry from '../../assets/sorry.png';
import "./MyListing.css"; 

const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: secondcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];

const MyListing = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [currentView, setCurrentView] = useState('Approved');

  const handleFocus = () => {
    setShowIcon(false);
  };

  const handleBlur = () => {
    setShowIcon(true);
  };

  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action
    }));
  };

  const approvedListings = listingsContainerOne;
  const unapprovedListings = []; 

  const currentListings = currentView === 'Approved' ? approvedListings : unapprovedListings;

  return (
    <div className="">
      <div className='approved-unapproved-container mx-2'>
        <h6 
          className={`approved ${currentView === 'Approved' ? 'active' : ''}`} 
          onClick={() => setCurrentView('Approved')}
          style={{
            color: currentView === 'Approved' ? 'black' : 'black',
            backgroundColor: currentView === 'Approved' ? '#FFFFFF' : 'transparent'
          }}
        >
          Approved
        </h6>
        <h6 
          className={`unapproved ${currentView === 'Unapproved' ? 'active' : ''}`} 
          onClick={() => setCurrentView('Unapproved')}
          style={{
            color: currentView === 'Unapproved' ? 'black' : 'black',
            backgroundColor: currentView === 'Unapproved' ? '#FFFFFF' : 'transparent'
          }}
        >
          Unapproved
        </h6>
      </div>  
      
      <div className='my-listing mx-3 mt-3'>My Listings</div>
      <div className="filters-container container mt-2">
        <div className="position-relative search-container">
          {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
          <Form.Control
            className="custom-input pl-5"
            placeholder="Search city, neighborhood, zip address"
            aria-label="Search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className='dropdown-container px-3'>
            <Dropdown onSelect={(e) => handleSelect('forSale', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.forSale}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('price', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.price}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('bedsBath', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.bedsBath}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('homeType', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.homeType}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('more', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.more}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button className='apply-filter'>Apply Filter</button>
          
          </div>
        </div>
      </div>

      {currentListings.length > 0 ? (
      <Container className="listings-container mt-3">
      <Row>
        {currentListings.slice(0, 3).map((listing, index) => (
          <Col key={index} xs={12} md={6} lg={4} className='mb-3'>
            <Card border='light' bg='light'>
              <Card.Img variant="top" src={listing.image} alt={listing.address} />
              <button className='custom-button'>SELL</button>
              <Card.Body className='card-body'>
                <Card.Title className='card-price'>{listing.price}</Card.Title>
                <Card.Text>{listing.address}</Card.Text>
                <div className="listing-details">
                  <div className="listing-detail-item">
                    <img src={bed} alt="bed icon" />
                    <span>{listing.bed}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={room} alt="room icon" />
                    <span>{listing.room}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={bath} alt="bath icon" />
                    <span>{listing.bath}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={sqft} alt="sqft icon" />
                    <span>{listing.sqft}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='mt-3'>
        {currentListings.slice(3).map((listing, index) => (
          <Col key={index} xs={12} md={6} lg={4} className='mb-3'>
            <Card border='light' bg='light'>
              <Card.Img variant="top" src={listing.image} alt={listing.address} />
              <button className='custom-button'>SELL</button>
              <Card.Body className='card-body'>
                <h1>{listing.price}</h1>
                <div>{listing.address}</div>
                <div className="listing-details">
                  <div className="listing-detail-item">
                    <img src={bed} alt="bed icon" />
                    <span>{listing.bed}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={room} alt="room icon" />
                    <span>{listing.room}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={bath} alt="bath icon" />
                    <span>{listing.bath}</span>
                  </div>
                  <div className="listing-detail-item">
                    <img src={sqft} alt="sqft icon" />
                    <span>{listing.sqft}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
      ) : (
        <div className="unapproved-page">

   <Container className='mt-3'>
  <Row>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={firstlistingimage} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={secondcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>

  <Row className=''>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={fourthcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={fifthcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</Container>


        </div>
        
      )}
      <button className='fixed-add-list-button'>Add Listing</button>
    </div>
  );
};

export default MyListing;

  