import React from 'react'
import log from '../images/logo.svg'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col} from 'react-bootstrap';
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



const Navbarr = () => {
  return (
    <div className='n1'>
        <Row>
            <Col sm={2}>
            <img src={log}></img>

            </Col>

            <Col sm={6}>
            <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="All Categories"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Milk and Diaries</Dropdown.Item>
          <Dropdown.Item href="#">Wine and Alcohol</Dropdown.Item>
          <Dropdown.Item href="#">Vegetables</Dropdown.Item>
          <Dropdown.Item href="#">Fruits</Dropdown.Item>
          <Dropdown.Item href="#">Clothing and beauty</Dropdown.Item>
          <Dropdown.Item href="#">Baking material</Dropdown.Item>
          <Dropdown.Item href="#">Icecream and dessert</Dropdown.Item>
          <Dropdown.Item href="#">Seafood </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Pet Food and toy</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
            </Col>


            <Col sm={4}>

            <button className='nb'><HiArrowPathRoundedSquare className='nbi' />Compare</button>
            <button className='nb'><FaHeart className='nbi' />Wishlist</button>
            <button className='nb'><FaShoppingCart  className='nbi' />Cart</button>
            <button className='nb'><RiAccountCircleFill className='nbi' />Account</button>

            
            </Col>
        </Row>
      
      




    </div>
  )
}


export default Navbarr
;