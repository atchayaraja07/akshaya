import React from 'react'
import img1 from '../images/slider-1.png'
import img2 from '../images/slider-2.png'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const Slider = () => {
  return (
    <div className='hh'>
      <Carousel>
      <Carousel.Item>
<img src={img1} alt="first slide"  className='abi'/>
        <Carousel.Caption>
          <h3 className='a15'>Dont miss amazing grocery Deals</h3>
          <p className='a18'>Save up to 50% on your first order</p>
          <button className='jee'><Button >Subscribe</Button></button>
        </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item>
      <img src={img2} alt="second slide" className='abi' />
        <Carousel.Caption>
          <h3 className='a16'>Big Discount</h3>
          <p className='a17'>Sign up for the daily news letter</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 className='a55'> Featured Categories</h1>
    </div>
  )
}

export default Slider









































// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import sl1 from '../images/slider-1.png'
// import sl2 from '../images/slider-2.png'
// const Slider = () => {
//   return (
//     <div>

// <Carousel id="shara">
//       <Carousel.Item>
//      <img src={sl1} />
//         <Carousel.Caption>
//           <h1>Dont miss amazing grocery deals</h1>
//           <h4>Sign up and stay updated</h4>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>



//       <Carousel.Item>
//       <img src={sl2}/>        <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>



 

      
    


