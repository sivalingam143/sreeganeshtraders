import React from 'react';
import MetaTags from './components/MetaTags';
import { AppBar } from './components/AppBar'
import { Container,Row,Col } from 'react-bootstrap'
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Mark from './components/Mark';
const ContactUs = () => {
  return (
    <div>
       <MetaTags
        title="Contact Us - Shree Ganesh Traders - Whole sale Crackers"
        type="website"
        siteName="diwalicracker.com"
        url="https://diwalicracker.com/contactus"
        keywords="Contact Us | Shree Ganesh Traders "
        description="Contact for wholesale Crackers and Retail Crackers"
        revisitAfter="10 Days"
      />
      <AppBar/>
      <img src={require('../assets/images/banner/banner_seven.jpg')} className='img-fluid w-100' alt='product name' />
        <Container className='padding'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className='py-3'>
                <h1 className='bold  text-center'> Contact Us</h1>
              </Col>
              <Col lg="4" md="12" className='py-3'>
                    <div className='box'>
                        <div className='box-icon'>
                          <PiMapPinSimpleAreaBold size={40} color={'#000'} />
                        </div>
                        <div className='regular'>
                        Kovilpatti to Sattur Main Road, 626203.  <br></br>
                        </div>
                    </div>
                  </Col>
                  <Col lg="4" className='py-3'>
                    <div className='box'>
                        <div className='box-icon'>
                        <BiPhoneCall size={40} color={'#000'}/>
                        </div>
                        <div>
                        <li>+91 9944708084</li>
                       
                        </div>
                    </div>
                  </Col>
                  <Col lg="4" className='py-3'>
                    <div className='box'>
                        <div className='box-icon'>
                          <MdOutlineAlternateEmail size={40} color={'#000'}/>
                        </div>
                        <div className='pb-4'>
                          <div>shreeganeshcrackers@gmail.com</div> 
                        </div>
                    </div>
                  </Col>
             
              <Col lg='12' md="12" xs="12" className='py-5'>
                <>
               
                
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.033543295169!2d77.55746647450249!3d9.406019982974492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ea00d83661cb%3A0x8aa40ff4bbb97ea1!2sAlagar%20Fire%20Crackers%20agencies!5e1!3m2!1sen!2sin!4v1727800205472!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Google Maps Embed of Shree Ganesh Crackers, Tamil Nadu"
                  />
                </>
              </Col>
            
              
            </Row>
        </Container>
    
      
        <>
        <Mark/>
        </>
    </div>
  )
}

export default ContactUs