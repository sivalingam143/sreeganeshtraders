import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import WhatsAppButton from './Whatsapp';
import { useNavigate } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const handlenavigate = () => {
    navigate('/');
  }
  return (
    <>
      {location.pathname !== '/' && (
        <div className='fixed point2 blink' onClick={handlenavigate}>
          <img src={require('../../assets/images/quickpurchase.png')} className='img-fluid priceicn2 float-right' alt='special price' />
        </div>
      )}
      <div className='fixed point'>
        <WhatsAppButton name="Hi Sri ganesh traders" phoneNumber="9944708084" />
      </div>
      <a href="https://maps.app.goo.gl/xuU39C1BsATVaKJN7">
        <div className="fixed point3" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/googlelocation.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a>
      <a href='tel:+919944708084'>
        <div className='fixed point4' style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/callicon.webp')} className='img-fluid priceicn float-left' alt='product name' />
        </div>
      </a>

      {/* <a href="https://www.instagram.com/amaranramesh1122000?igsh=aGE2dnJoZnU1M2g=">
        <div className="fixed point4" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/inst.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://www.facebook.com/profile.php?id=61556757217479&mibextid=ZbWKwL">
        <div className="fixed point5" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/fb.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://youtube.com/@rkamaran...6617?si=-oU5tWwgPmQbLxIn">
        <div className="fixed point6" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/you.jpg')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> */}
      <>
        <div className='footer-bg foot-pad'>
          <Container className='z'>
            <Row>
              <Col lg='12' className='py-4'>
                <Row className='justify-content-center'>
                  <Col lg='3' className="py-3">
                    <div className='ft-logo'>
                      <img src={require('../../assets/images/storelogo.png')} className='img-fluid border-0 ' alt='Selva Crackers' />
                    </div>
                    <div className='regular'>Light up your Diwali celebrations with our spectacular range of crackers! Enjoy unbeatable discounts and make this festival of lights truly memorable</div>
                  </Col>
                  <Col lg='5' className="align-self-center py-3">
                    <h4 className='bold'> Contact Us</h4>
                    <ul className='list-unstyled'>
                      <li className='mx-3 pb-3 smallfnt'>
                        <p><CiLocationArrow1 /></p>
                        <div className='text_one'>
                          sri Ganesh Traders,
                        Kovilpatti to Sattur Main Road, 626203</div>
                      </li>
                          <li className='mx-3 pb-3 smallfnt'>
                            <p> <FaSquarePhone /></p>
                            <div className='text_one'>+91 9944708084</div>
                          
                          </li>
                               <li className='mx-3 pb-3 smallfnt'>
                            <p> <FaSquarePhone /></p>
                            <div className='text_one'>+91 9361499985</div>
                          
                          </li>
                      
                      <li className='mx-3 pb-3 smallfnt'>
                        <p><FaWhatsapp /></p>
                        <div className='text_one'>+91 9944708084</div>
                      </li>
                      
                      <li className='mx-3 pb-3 smallfnt'>
                        <p><FaRegEnvelope /></p>
                        <div className='text_one'>sriganeshtraders@gmail.com</div>
                      </li>
                    </ul>

                  </Col>
                  <Col lg='3' className="align-self-center py-3">
                    <h4 className='bold'> Quick Links</h4>
                    <ul className='list-unstyled'>
                      <li className='mx-3 pb-3 smallfnt'><Link to='/home'>Home</Link></li>
                      <li className='mx-3 pb-3 smallfnt'><Link to='/about'>About</Link></li>
                      <li className='mx-3 pb-3 smallfnt'><Link to='/'>Products</Link></li>
                      <li className='mx-3 pb-3 smallfnt'><Link to='/safetytips'>Safety Tips</Link></li>
                      <li className='mx-3 pb-3 smallfnt'><Link to='/contactus'>Contact US</Link></li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg='3' className='py-3'>


              </Col>
              {/* <Col lg='9' className='py-3 align-self-center'>
                <div className='rules'>
                  As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our customers and at the same time, respect jurisdiction. We request you to add your products to the cart and submit the required crackers through the enquiry button. We will contact you within 24 hrs and confirm the order through WhatsApp or phone call. Please add and submit your enquiries and enjoy your Diwali with Selva Crackers Crackers. Our License No.----. Selva Crackers Crackers as a company following 100% legal & statutory compliances and all our shops, go-downs are maintained as per the explosive acts. We send the parcels through registered and legal transport service providers as like every other major companies in Sivakasi is doing so.
                </div>
              </Col> */}

            </Row>
          </Container>
        </div>
      </>
      <>
        <div className='mark-bg'>
          <Container>
            <Row>
              <Col lg='12' className='py-3'>
                <div className='text-center regular text-white'> Copyright © 2024,. Sri Ganesh Traders. All rights reserved </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </>
  )
}

export default Footer