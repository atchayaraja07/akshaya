import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const Secnav = () => (
  <div>

<Row>
      <Col sm={2}>
        <Button>browse</Button>
      </Col>

      {/* <Container id="one"> */}
      <Col sm={8}> 

      <Container className="one">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" >
          Home
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Home 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Home 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Home 3</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Home 4</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Home 5</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Home 6</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Shop
        </Dropdown.Toggle>

        <Dropdown.Menu id="aksh">

          <Dropdown.Item href="#/action-1">shop grid</Dropdown.Item>
          <Dropdown.Item href="#/action-2">shop grid left side bar</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop grid right sidebar </Dropdown.Item>
          <Dropdown.Item href="#/action-3">shop list left sidebar</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop list right sidebar </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop wide </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Single Product</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop Filter </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop cart </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop compare </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop invoice  </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Vendors
        </Dropdown.Toggle>

        <Dropdown.Menu id="aksh">

          <Dropdown.Item href="#/action-1">vendor grid</Dropdown.Item>
          <Dropdown.Item href="#/action-2">vendor list</Dropdown.Item>
          <Dropdown.Item href="#/action-3">vendor detail 1 </Dropdown.Item>
          <Dropdown.Item href="#/action-3">vendor detail 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">vendor detail 3 </Dropdown.Item>
          <Dropdown.Item href="#/action-3">vendor dashboard </Dropdown.Item>
          <Dropdown.Item href="#/action-3">vendor guide</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Blog
        </Dropdown.Toggle>

        <Dropdown.Menu id="aksh">

          <Dropdown.Item href="#/action-1">Blog category grid</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Blog category list</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Blog category Big </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Blog category wide</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shop wide </Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-basic">
          pages
        </Dropdown.Toggle>

        <Dropdown.Menu id="aksh">

          <Dropdown.Item href="#/action-1">About us</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
          <Dropdown.Item href="#/action-3">My Account </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Register </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Forgot password </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Reset password</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Purchase Guide  </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Privacy policy </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Terms and condition  </Dropdown.Item>
          <Dropdown.Item href="#/action-3">404 page  </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
 

      </Container>
      </Col>


<Col sm={2}>
</Col>

  {/* </Container> */}

    </Row>
    </div>
 
  
  );


export default Secnav;
