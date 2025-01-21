import React from 'react'
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Micky = () => {
  return(
  <div>
<Row>
<Col sm={4}>

<Card className='design' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png" />
      <Card.Body>
        <Card.Text><h5>Every day Fresh & Clean with our products</h5>
        
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col sm={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png
" />
      <Card.Body>
        <Card.Text><h5>Make your Breakfast Healthy and Easy</h5>
        
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
</Col>


    <Col sm={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png

" />
      <Card.Body>
        <Card.Text><h5>The Best organic Product online</h5>
        
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    </Col>
</Row>
</div>
    );
  }
  

export default Micky

