// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Container, Row, Col, Card, Form, Button, Image, FormControl } from 'react-bootstrap';
// import firstlistingimage from '../../assets/firstlistingimage.png';
// import pencil from '../../assets/pencil.png'; 
// import secondcardlisting from '../../assets/secondcardlisting.png';
// import thirdcardlisting from '../../assets/thirdcardlisting.png';
// import fourthcardlisting from '../../assets/fourthcardlisting.png';
// import fifthcardlisting from '../../assets/fifthcardlisting.png';
// import sixthcardlisting from '../../assets/sixthcardlisting.png';
// import bath from '../../assets/bath.png';
// import bed from '../../assets/bed.png';
// import room from '../../assets/room.png';
// import sqft from '../../assets/sqft.png';
// import Search from '../../assets/Search.png';
// import dropdown from '../../assets/dropdown.png';
// import sorry from '../../assets/sorry.png';
// import bell from "../../assets/bell.png";
// import profile from '../../assets/profile.png';
// import searchlight from '../../assets/searchlight.png';
// import "./MyListing.css"; 
// import Animation from '../Animation';

// const listingsContainerOne = [
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: firstlistingimage,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: secondcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: thirdcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: fourthcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: fifthcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: sixthcardlisting,
//   }
// ];

// const unapprovedListings = [
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '30 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '120sqft',
//     image: firstlistingimage,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '30 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '120sqft',
//     image: secondcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '30 Beds',
//     room: '2 Rooms',
//     bath: '2 Baths',
//     sqft: '120sqft',
//     image: thirdcardlisting,
//   }
// ];

// const MyListing = () => {
//   const [showIcon, setShowIcon] = useState(true);
//   const [currentView, setCurrentView] = useState('Approved');

//   const handleFocus = () => {
//     setShowIcon(false);
//   };

//   const handleBlur = () => {
//     setShowIcon(true);
//   };

//   const [selectedAction, setSelectedAction] = useState({
//     forSale: 'For sale',
//     price: 'Price',
//     bedsBath: 'Beds & Bath',
//     homeType: 'Home Type',
//     more: 'More',
//   });

//   const handleSelect = (category, action) => {
//     setSelectedAction(prevState => ({
//       ...prevState,
//       [category]: action
//     }));
//   };

//   const currentListings = currentView === 'Approved' ? listingsContainerOne : unapprovedListings;

//   return (
//     <div style={{ marginTop: "-1px", marginBottom: "180px" }}>
//       <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
//         <Animation animationClass="animate__fadeInDownBig" delay={2000}>
//           <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
//             <h3 className="flex-grow-1 mt-1" style={{ marginLeft: "60px", color: "#FF7B29", fontFamily: "Syne", fontWeight: "700", fontSize: "22px" }}>RealHomes</h3>
//             <div className="d-flex align-items-center">
//               <Image
//                 src={bell}
//                 className="mr-2 mx-2 mb-2 bell"
//                 style={{
//                   maxWidth: '15px',
//                   maxHeight: '15px'
//                 }}
//               />
//               <Image
//                 src={profile}
//                 className="prof"
//                 style={{
//                   maxWidth: '35px',
//                   maxHeight: '35px',
//                   marginRight: "20px"
//                 }}
//                 roundedCircle
//               />
//             </div>
//           </Container>
//         </Animation>
//       </div>

//       <div className="container d-none d-md-block mb-5">
//         <Container className="p-3" style={{ position: 'relative', marginLeft: "-30px" }}>
//           <div className="d-flex align-items-center position-absolute profile-container">
//             <Image
//               src={bell}
//               className="mr-2 mx-2 mb-4 bell"
//             />
//             <Image
//               src={profile}
//               className="prof"
//               style={{
//                 maxWidth: '65px',
//                 maxHeight: '65px'
//               }}
//               roundedCircle
//             />
//           </div>
//         </Container>
//       </div>

//       <Container>
//         <Row>
//           <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
//             <div className="m-2">
//               <div className='approved-unapproved-container mx-2'>
//                 <h6
//                   className={`approved ${currentView === 'Approved' ? 'active' : ''}`}
//                   onClick={() => setCurrentView('Approved')}
//                   style={{
//                     color: currentView === 'Approved' ? 'black' : 'black',
//                     backgroundColor: currentView === 'Approved' ? '#FFFFFF' : 'transparent'
//                   }}
//                 >
//                   Approved
//                 </h6>
//                 <h6
//                   className={`unapproved ${currentView === 'Unapproved' ? 'active' : ''}`}
//                   onClick={() => setCurrentView('Unapproved')}
//                   style={{
//                     color: currentView === 'Unapproved' ? 'black' : 'black',
//                     backgroundColor: currentView === 'Unapproved' ? '#FFFFFF' : 'transparent'
//                   }}
//                 >
//                   Unapproved
//                 </h6>
//               </div>
//             </div>
//           </Col>
//           <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
//             <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
//               <FormControl type="text" placeholder="Search" className="search-input" />
//               <Image src={searchlight} className="ml-2" />
//             </Form>
//           </Col>
//         </Row>
//       </Container>

//       <div className="container me-4">
//         <h3 className='my-listing mx-3 mt-3'>My Listings</h3>

//         <div className="filters-container mt-2">
//           {/* search */}
//           <div className="position-relative search-container">
//             {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
//             <Form.Control
//               className="custom-input pl-5"
//               placeholder="Search city, neighborhood, zip address"
//               aria-label="Search"
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//           </div>

//           {/* dropdowns */}
//           <div className="dropdowns-wrapper">
//             <div className='dropdown-container px-3'>
//               <div className='dropdown-item-wrapper'>
//                 <Dropdown onSelect={(e) => handleSelect('forSale', e)}>
//                   <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
//                     {selectedAction.forSale}
//                     <img src={dropdown} alt="drop" style={{ marginLeft: '10px' }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="Sale">Sale</Dropdown.Item>
//                     <Dropdown.Item eventKey="Rent">Rent</Dropdown.Item>
//                     <Dropdown.Item eventKey="Lease">Lease</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               <div className='dropdown-item-wrapper'>
//                 <Dropdown onSelect={(e) => handleSelect('price', e)}>
//                   <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
//                     {selectedAction.price}
//                     <img src={dropdown} alt="drop" style={{ marginLeft: '10px' }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="$5000 - $20,000">$5000 - $20,000</Dropdown.Item>
//                     <Dropdown.Item eventKey="$20,000 - $50,000">$20,000 - $50,000</Dropdown.Item>
//                     <Dropdown.Item eventKey="$50,000 - $100,000">$50,000 - $100,000</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               <div className='dropdown-item-wrapper'>
//                 <Dropdown onSelect={(e) => handleSelect('bedsBath', e)}>
//                   <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
//                     {selectedAction.bedsBath}
//                     <img src={dropdown} alt="drop" style={{ marginLeft: '10px' }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="1 Bed, 1 Bath">1 Bed, 1 Bath</Dropdown.Item>
//                     <Dropdown.Item eventKey="2 Bed, 2 Bath">2 Bed, 2 Bath</Dropdown.Item>
//                     <Dropdown.Item eventKey="3 Bed, 3 Bath">3 Bed, 3 Bath</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               <div className='dropdown-item-wrapper'>
//                 <Dropdown onSelect={(e) => handleSelect('homeType', e)}>
//                   <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
//                     {selectedAction.homeType}
//                     <img src={dropdown} alt="drop" style={{ marginLeft: '10px' }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="House">House</Dropdown.Item>
//                     <Dropdown.Item eventKey="Apartment">Apartment</Dropdown.Item>
//                     <Dropdown.Item eventKey="Condo">Condo</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               <div className='dropdown-item-wrapper'>
//                 <Dropdown onSelect={(e) => handleSelect('more', e)}>
//                   <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
//                     {selectedAction.more}
//                     <img src={dropdown} alt="drop" style={{ marginLeft: '10px' }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="More Options 1">More Options 1</Dropdown.Item>
//                     <Dropdown.Item eventKey="More Options 2">More Options 2</Dropdown.Item>
//                     <Dropdown.Item eventKey="More Options 3">More Options 3</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Container className="mt-4">
//           <Row>
//             {currentListings.length > 0 ? (
//               currentListings.map((listing, index) => (
//                 <Col key={index} md={6} lg={4} className="my-3">
//                   <Card>
//                     <Card.Img variant="top" src={listing.image} />
//                     <Card.Body>
//                       <Card.Title className="listing-price">{listing.price}</Card.Title>
//                       <Card.Text className="listing-address">{listing.address}</Card.Text>
//                       <div className="d-flex justify-content-between">
//                         <span className="listing-detail">
//                           <Image src={bed} className="detail-icon" /> {listing.bed}
//                         </span>
//                         <span className="listing-detail">
//                           <Image src={room} className="detail-icon" /> {listing.room}
//                         </span>
//                         <span className="listing-detail">
//                           <Image src={bath} className="detail-icon" /> {listing.bath}
//                         </span>
//                         <span className="listing-detail">
//                           <Image src={sqft} className="detail-icon" /> {listing.sqft}
//                         </span>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))
//             ) : (
//               <div className="no-listings-container">
//                 <Image src={sorry} alt="No listings available" />
//                 <h5 className="no-listings-text">No listings available.</h5>
//               </div>
//             )}
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default MyListing;
