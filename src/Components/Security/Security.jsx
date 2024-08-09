
import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Container, Row, Col, Button, FormControl, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import 'animate.css/animate.min.css';

const Security = () => {
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
     <h3 className='my-listing mt-1'>Sign in & Security</h3>
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

<Form className='mt-5'>
  <div className="d-block d-sm-none">
  <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1" style={{padding:""}} >
    <Form.Control
      type="email"
      placeholder="verify your email address linked to your account"
      className="custom-inputs"
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    <div className="position-absolute d-flex flex-column flex-md-row align-items-start align-items-md-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
      <div>
        <div className="me-md-5 mt-4 na" style={{ fontSize: '0.875rem' }}>igorfriday@gmail.org</div>
      </div>
      <div className="d-flex">
        <div className="me-md-5 text-danger" style={{ fontSize: '0.875rem' }}>unverified</div>
         <h1 className="edit mx-2 mb-4 mt-md-0 verify" style={{ fontSize: '1rem' }}>verify</h1>
      </div>
    </div>
    <Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
  </Form.Group>
  </div>

  <div className="d-none d-sm-block">
  <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1">
<Form.Control
 type="email"
 placeholder="verify your email address linked to your account"
 className="custom-inputs"
 style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
/>
<div className="position-absolute d-flex flex-column flex-md-row align-items-start align-items-md-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
 <div>
   <div className="me-md-5 mt-4 na">igorfriday@gmail.org</div>
   <div className="me-md-5 text-danger">unverified</div>
 </div>
 <h1 className="edit mt-2 mt-md-0 mb-1">verify</h1>
</div>
<Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
</Form.Group>
  </div>

  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput2">
    <Form.Control
      type="password"
      placeholder="set a unique password to protect your account"
      className="custom-inputs"
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    <div className="position-absolute d-flex align-items-center custom-password" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na"></div>
      <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>create password</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Password</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput3">
    <Form.Control
      type="text"
      placeholder="make your account extra secure"
      className="custom-inputs"
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
    />
    <div className="position-absolute d-flex align-items-center custom-verification" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na"></div>
      <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>enable</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">2-step verification</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput4">
    <Form.Control
      type="number"
      placeholder="Link your google account to REALHOMES"
      className="custom-inputs"
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
    />
    <div className="position-absolute d-flex align-items-center custom-google" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na"></div>
      <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>unlink</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Google sign in</Form.Label>
  </Form.Group>

  <h3 className='my-listing mx-3 mt-5'>Manage account</h3>
  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput5">
    <Form.Control
      type="text"
      placeholder="this will shut down your account, but retain your information"
      className="custom-inputs"
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
    />
    <div className="position-absolute d-flex align-items-center custom-deactivate" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na"></div>
      <h1 className='edit mt-3' style={{ fontSize: '1rem' }}>Deactivate account</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Deactivate account</Form.Label>
  </Form.Group>

  <Form.Group style={{marginBottom:"180px"}} className="position-relative" controlId="exampleForm.ControlInput6">
    <Form.Control
      type="number"
      placeholder="this will shut down your account, but retain your information"
      className="custom-inputs "
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    <div className="position-absolute d-flex align-items-center custom-privacy" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na"></div>
      <h1 className='edit mt-3' style={{ fontSize: '1rem' }}>Go to privacy portal</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Privacy & Cookies</Form.Label>
  </Form.Group>
</Form>

<style jsx>{`
  @media (max-width: 576px) {
    .custom-content, .custom-password, .custom-verification, .custom-google, .custom-deactivate, .custom-privacy {
      flex-direction: column;
      align-items: flex-start;
      right: 10px !important;
    }
    .edit {
      font-size: 1rem;
    }
     

      .r{
      margin-top:-2px;  
      }

    .custom-form-group .na, .custom-form-group .text-danger {
      font-size: 1.75rem;
      font-weight: 700
      font-family: kufam
      margin-right: 0 !important;
    }
  }
`}</style>



 </div>
  )
}

export default Security
























