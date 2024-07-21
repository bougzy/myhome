import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Security = () => {
  return (
    <div>
         <h3 className='my-listing mx-3' style={{marginTop:"70px"}}>Sign in & Security</h3>

         <Form className='mt-5'>
      {/* <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email"
          placeholder="verify your email address linked to your account"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
        />
        <div className="position-absolute d-flex align-items-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
          <div>
            <div className="me-5 na">igorfriday@gmail.org</div>
            <div className="me-5 text-danger">unverified</div>
          </div>
          <h1 className="edit">verify</h1>
        </div>
        <Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
      </Form.Group> */}

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

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput2">
        <Form.Control
          type="password"
          placeholder="set a unique password to protect your account"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>create password</h1>
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
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>enable</h1>
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
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>unlink</h1>
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
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-3'>Deactivate account</h1>
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
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-3'>Go to privacy portal</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">Privacy & Cookies</Form.Label>
      </Form.Group>
    </Form>


    </div>
  )
}

export default Security

















 //     <div>
  //        <h3 className='my-listing mx-3' style={{marginTop:"70px"}}>Sign in & Security</h3>
  //   <Container className="my-4">
  //   <Row className="align-items-center mb-3 border-bottom pb-2 bg-white p-2">
  //     <Col>
  //       <h5>Verify Email</h5>
  //       <p className="text-muted mb-0">verify your email address linked to your account</p>
  //     </Col>
  //     <Col className="text-end">
  //     <h6>igorfriday@gmail.org</h6>
  //       <span className="me-3" style={{color:"#FF0F00"}}>unverified</span>
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>verify</Button>
  //     </Col>
  //   </Row>
  //   <Row className="align-items-center mb-3 border-bottom pb-2 pb-2 bg-white p-2">
  //     <Col>
  //       <h5>Password</h5>
  //       <p className="text-muted mb-0">set a unique password to protect your account</p>
  //     </Col>
  //     <Col className="text-end">
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>create password</Button>
  //     </Col>
  //   </Row>
  //   <Row className="align-items-center mb-3 border-bottom pb-2 pb-2 bg-white p-2">
  //     <Col>
  //       <h5>2-step verification</h5>
  //       <p className="text-muted mb-0">make your account extra secure</p>
  //     </Col>
  //     <Col className="text-end">
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>Enable</Button>
  //     </Col>
  //   </Row>
  //   <Row className="align-items-center mb-3 border-bottom pb-2 pb-2 bg-white p-2">
  //     <Col>
  //       <h5>Google sign in</h5>
  //       <p className="text-muted mb-0">Link your Google account to REALHOMES</p>
  //     </Col>
  //     <Col className="text-end">
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>unlink</Button>
  //     </Col>
  //   </Row>
  //   <h4 className="mt-4">Manage account</h4>
  //   <Row className="align-items-center mb-3 border-bottom pb-2 pb-2 bg-white p-2">
  //     <Col>
  //       <h5>Deactivate my account</h5>
  //       <p className="text-muted mb-0">this will shut down your account, but retain your information</p>
  //     </Col>
  //     <Col className="text-end">
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>Deactivate account</Button>
  //     </Col>
  //   </Row>
  //   <Row className="align-items-center mb-3 pb-2 bg-white p-2">
  //     <Col>
  //       <h5>Privacy & cookies</h5>
  //       <p className="text-muted mb-0">this will shut down your account, but retain your information</p>
  //     </Col>
  //     <Col className="text-end">
  //       <Button variant="link" className="text-decoration-none text-orange" style={{color:"#FF7B29"}}>Go to privacy portal</Button>
  //     </Col>
  //   </Row>
  // </Container>
  //     </div>
