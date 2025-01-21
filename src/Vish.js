import React from 'react'
import Card from 'react-bootstrap/Card';import Button from 'react-bootstrap/Button';


const Vish = () => {
  return (
    <div>
      

      <Card className="nira">
      <Card.Img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png" />
      <Card.ImgOverlay >
        <Card.Title>Start You'r Daily Shopping with Nest Mart</Card.Title>
        <Card.Text>
          <h2>Stay home & get your daily
          needs from our shop</h2>
        </Card.Text>
        <Card.Text>Add your email</Card.Text>
        <Button variant="info">Subscribe</Button>
      </Card.ImgOverlay>
    </Card>




    </div>
  )
}

export default Vish
