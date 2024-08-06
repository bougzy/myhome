import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.png';
import searchlight from '../../assets/searchlight.png';
import Calendar from './Calendar';
import { FaRegistered } from 'react-icons/fa';
import freshtop from "../../assets/freshtop.png"
import x from "../../assets/x.png"
import './Activities.css'; 
import { MdMargin } from 'react-icons/md';
import Animation from '../Animation';

export const Dashb = () => {
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

      <div className="container d-none d-md-block">
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

<Container className="mt-4">
  <Row>
    <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
      <div className="">
      <Row>
                  <Col>
                    <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> {/* Replace FaIconName with the actual icon name, e.g., FaUser */}
                  </Col>
                  <Col className="mt-3">
                    <p className="">JANUARY <span className="me-4">2021</span></p>
                    
                  </Col>
                </Row>
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


   <Container className="my-4">
   <Animation animationClass="animate__slideInRight" delay={100}>
      <Row>
        <Col xs={12} lg={8}>
      
          <Row>
            <Col xs={12} sm={6} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                  <Row>
                  <Col xs="auto">
                    <Image src={freshtop} style={{width:"100px", height:"100px"}}/> 
                  </Col>
                  <Col className="mt-4">
                    <p style={{fontFamily:"SF Pro Display", fontWeight:"700"}}>Successful Inspection</p>
                    <p style={{fontWeight:"400", fontSize:"28px"}}>321</p>
                  </Col>
                </Row>
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="mb-4">
              <Card>
                <Card.Body>
                <Card.Title>
                <Row>
                  <Col xs="auto">
                    <Image src={x} style={{width:"100px", height:"100px"}}/> 
                  </Col>
                  <Col className="mt-4">
                    <p style={{fontFamily:"SF Pro Display", fontWeight:"700"}}>Unsuccessful Inspection</p>
                    <p style={{fontWeight:"400", fontSize:"28px"}}>0</p>
                  </Col>
                </Row>
                </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h3 className="mt-5">Next Inspection</h3>
          <div className="table-responsive rounded-4">
            <Table hover className="bg-white no-borders text-center custom-table">
              <thead>
                <tr>
                  <th scope="col">Dates</th>
                  <th scope="col">Clients Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">22/01</th>
                  <td>Peter</td>
                  <td>Blake resort</td>
                  <td>Selling</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">31/01</th>
                  <td>Mr Blake</td>
                  <td>Living spring</td>
                  <td>Renting</td>
                  <td>08133289824</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col xs={12} lg={4} className="">
          <Calendar/>
        </Col>
      </Row>
      </Animation>
    </Container>


    
    
  <Container className="mt-3" style={{marginBottom:"180px"}}>
  <Animation animationClass="animate__slideInRight" delay={200}>
      <Row>
        <Col xs="12" lg="12" className=""> {/* Center the column within the container */}
          <div className="m-3">
            <h3 className="mt-5">Recent Inspection</h3> {/* Center the header */}
          </div>
          <div className="table-responsive rounded-4">
            <Table hover className="bg-white no-borders text-center custom-table"> {/* Center table content */}
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Client's Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00FF38"}}>Sold</td>
                </tr>
                <tr>
                <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00FF38"}}>Bought</td>
                </tr>
                <tr>
                <th scope="row">22/01</th>
                  <td>Peter</td>
                  <td>Blake resort</td>
                  <td>Selling</td>
                  <td>08133289824</td>
                  <td style={{color:"#61FF00"}}>Bought</td>
                </tr>
                <tr>
                <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00B2FF"}}>Rented out</td>
                </tr>
                <tr>
                <th scope="row">31/01</th>
                  <td>Mr Blake</td>
                  <td>Living spring</td>
                  <td>Renting</td>
                  <td>08133289824</td>
                  <td style={{color:"#00B2FF"}}>Rented out</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      </Animation>
    </Container>


    </div>
  );
}

export default Dashb;

