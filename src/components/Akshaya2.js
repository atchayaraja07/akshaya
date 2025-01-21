import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaShoppingCart } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Akshaya2 = () => {
  return (
    <div>
        <Row>

            <Col sm={2}>
            <Card classname="hope">
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg" />
      <Button variant="outline-primary">Add to Cart</Button>
        <Card.Title><h6>Hodofoods</h6></Card.Title>
        <Card.Text>
        Seeds of Change Organic Quinoa, Brown
        </Card.Text></Card>
      </Col>
    

<Col sm={2}>
<Card classname="hope">
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg" />
      <Button variant="outline-primary"> Add to cart</Button>
        <Card.Title><h6>Hodofoods</h6></Card.Title>
        <Card.Text>
        All Natural Italian-style chicken meatballs
        </Card.Text></Card></Col>

        <Col sm={2}>
<Card classname="hope">
      <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg" />
      <Button variant="outline-primary"> Add to cart</Button>
        <Card.Title><h6>Hodofoods</h6></Card.Title>
        <Card.Text>
        Angies' Boomchickapop Sweet and Womies
        </Card.Text></Card></Col>
        <Col sm={2}>
<Card classname="hope">
      <Card.Img variant="top" src="		https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg" />
      <Button variant="outline-primary"> Add to cart</Button>
        <Card.Title><h6>Hodofoods</h6></Card.Title>
        <Card.Text>
        Seeds of change organic Quinoa,Brown
        </Card.Text></Card></Col>
        </Row>

</div>


  )
}

export default Akshaya2
