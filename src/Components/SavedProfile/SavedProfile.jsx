import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Image, Button } from 'react-bootstrap';
import profileOne from '../../assets/profileOne.png';
import profileTwo from '../../assets/profileTwo.png';
import profileThree from '../../assets/profileThree.png';
import location from '../../assets/location.png';
import ratingstar from '../../assets/ratingstar.png';
import "./savedprofile.css"; 
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import Animation from '../Animation';


const SavedProfile = () => {
  return (
    <div>
       <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
  <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
    <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
    <div className="d-flex align-items-center">
      <Image
        src={bell}
        className="mr-2 mx-2 mb-2 bell"
        style={{
          maxWidth: '15px',
          maxHeight: '15px'
        }}
      />
      <Image
        src={profile}
        className="prof"
        style={{
          maxWidth: '35px',
          maxHeight: '35px',
          marginRight:"20px"
        }}
        roundedCircle
      />
    </div>
  </Container>
</div>

      <div className="container d-none d-md-block mb-5">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
          <div className="d-flex align-items-center position-absolute  profile-container">
            <Image
              src={bell}
              className="mr-2 mx-2 mb-4 bell"
            />
            <Image
              src={profile}
              className="prof"
              style={{
                maxWidth: '65px',
                maxHeight: '65px'
              }}
              roundedCircle
            />
          </div>
        </Container>
      </div>

      <Container>
        <Row>
        <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="m-2"> 
        <h3 className='my-listing mt-1'>Saved Profile</h3>
      </div>  
        </Col>
         <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
            <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
              <FormControl type="text" placeholder="Search" className="search-input" />
              <Image src={searchlight} className="ml-2" />
            </Form>
          </Col>  
        </Row>
      </Container>


<div className='mt-3'>
<Animation animationClass="animate__fadeInDownBig" delay={2000}>
  <Card body border='light' bg='' className='p-2'>
    <div className="profile-containers">
      <div>
        <img src={profileOne} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <button className='profile-buttons mt-1'>Rentals</button>
        </div>
        <div className='review-open-container'>
          <div className="reviews">No Reviews</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>

  <Card body  border='light' bg='' className=' mt-3 p-2'>
    <div className="profile-containers">
      <div className="">
        <img src={profileTwo} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <div className=''>MD Lotex Properties</div>
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos m-0 p-0'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <div className="button-container mt-1">
            <button className='profile-buttons'>Selling a house</button>
            <button className='profile-buttons'>Buying a House</button>
          </div>
          <button className='profile-buttons mt-2'>8 Years experience</button>
        </div>
        <div className='review-open-container'>
          <div className="reviews">12 Reviews</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>

  <Card body border='light' className=' mt-3 p-2'style={{marginBottom:"180px"}}>
    <div className="profile-containers">
      <div className="">
        <img src={profileThree} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <div className=''>MD Lotex Properties</div>
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos m-0 p-0'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <div className="button-container mt-1">
          <button className='profile-buttons mt-2'>8 Years experience</button>
            <button className='profile-buttons'>Selling a house</button>
            <button className='profile-buttons'>Buying a House</button>
          </div>
        </div>
        <div className='review-open-container'>
          <div className="reviews">No Reviews</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>
</Animation>
</div>

      </div>
  
  );
};

export default SavedProfile;
