import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Design1 = () => {
  return (
    <div>
        <Row>
      <Col sm={2}>
      <Card  className='art'>
      <Card.Img variant="top" src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png
" />
      <Card.Body>
        <Card.Title>By nest food</Card.Title>
        <Card.Text>
        Seeds of Change Organic Quinoa, Brown, & Red Rice
 


        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card></Col>


<Col sm={2}>
    <Card className='art'>
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png
" />
      <Card.Body>
        <Card.Title>By Old El Paso</Card.Title>
        <Card.Text>
        Perdue Simply Smart Organics Gluten Free
 


        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card></Col>

<Col sm={2}>
    <Card className='art'>
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png

" />
      <Card.Body>
        <Card.Title>By Progresso</Card.Title>
        <Card.Text>
       Signature Wood-Fired Mushroom and Cramelized
 


        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card></Col>



<Col sm={2}>
    <Card className='art'>
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png

" />
      <Card.Body>
        <Card.Title>By Yoplait</Card.Title>
        <Card.Text>
       Simply Lemonade with Rasberry Juice
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
</Col>
</Row>

    </div>
  )
}

export default Design1
