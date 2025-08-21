import React from 'react'
import { Container,Nav,Navbar,Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid,MdOutlineDashboard,MdHealthAndSafety  } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { ImPriceTag } from "react-icons/im";
import { RiContactsFill } from "react-icons/ri";
const AppBar = () => {
  return (
    <>
    <>
    <div className='mark-bg'>
      <div className='d-lg-block d-none'>
        <Container fluid >
              <Row className='py-2'>
              {/* <Col lg="4" xs="4" sm="4" className='align-self-center d-lg-block d-none'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <img src={require('../../assets/images/gpay.png')} className='img-fluid gpay' alt='gpay' />
                    </div>
                    <div className='text-white'>
                       <h5 className='bold mt-2 mx-2'>9361499985,9790578763 </h5> 
                    </div>
                  </div>
              </Col> */}
                <Col lg='12' className='align-self-center text-white'>
                  <Marquee pauseOnHover={true}  direction="left" speed={50} delay={9}>
  Diwali sale is open now. Kindly buy early to get best discounts &amp; Offers Happy &amp; Safe Diwali....!!!!
                  </Marquee>
                </Col>
              </Row>
          </Container>
      </div>
      <div className='d-lg-none d-block py-3'>
          <Container fluid>
            <Row>
              <Col xs="4" sm="4">
              <a href="https://wa.me/919597145823?text=Hello Sri Ganesh Crackers">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/whatsappicon.webp')} className='img-fluid' alt='product name' />
                  </div>
              </a>
                  
              </Col>
              <Col xs="4" sm="4">
              <a href='tel:+919597145823'>
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/callicon.webp')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
                 
              </Col>
              <Col xs="4" sm="4">
              <a href='https://maps.app.goo.gl/M1GWLcyX96XHrBqMA' alt="">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/googlelocation.png')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
    </>
    <>
      {/* <div  className='navv-bg bg-overlay'>
        <Container className='py-3 z'>
            <Row>
              <Col lg='4' md='12' xs="12">
                <Navbar.Brand href="/">
                  <div className='logo mx-auto'>
                    <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' />
                  </div>
              </Navbar.Brand>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div></div>
                    <div>
                      <h5 className='bold'> Address</h5>
                      <p className='regular'> 3/1362/30 Bharathi Nagar, Sivakamipuram Colony, <br/>
                      Sivakasi - 626189
                      </p>
                    </div>
                </div>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div></div>
                    <div class>
                      <h5 className='bold'> Mobile Number</h5>
                        <div className='regular'>
                          <li>+91 9003885080</li>
                          <li>+91 9944726077</li>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div> */}
    </>
    
    <>
      <Navbar expand="lg" className="headnav navback" >
        <Container fluid className='px-lg-5'>
          {/* <Navbar.Brand href="/">
            <div className='logo mx-auto'>
              <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' />
            </div>
            </Navbar.Brand> */}
        <div className='mx-auto'>
          <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
        </div>
         
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center py-3">
              <Nav.Link as={NavLink} exact to={"/home"} >Home</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/about"} >About</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/"} >Pricelist</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/safetytips"} >Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} >Contact</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
            </Nav>
            {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    </>
  )
}
const AppBarTwo = () => {
  return (
    <>
    <>
    <div className='mark-bg'>
      <div className='d-lg-block d-none'>
        <Container fluid>
              <Row className='py-2'>
              <Col lg="4" xs="4" sm="4" className='align-self-center d-lg-block d-none'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <img src={require('../../assets/images/gpay.png')} className='img-fluid gpay' alt='gpay' />
                    </div>
                    <div className='text-white'>
                       <h5 className='bold mt-2 mx-2'>8110807330</h5> 
                    </div>
                  </div>
              </Col>
                <Col lg='8' className='align-self-center text-white'>
                  <Marquee pauseOnHover={true}  direction="left" speed={50} delay={9}>
                    Whatsapp : +91 81108 07330 | Alter No : +91 93421 73125 | Alter No : +91 70105 00491 | Email :  Jaslakshmicrackers@gmail.com
                  </Marquee>
                </Col>
              </Row>
          </Container>
      </div>
      <div className='d-lg-none d-block py-3'>
          <Container fluid>
            <Row>
              <Col xs="4" sm="4">
              <a href="https://wa.me/918110807330?text=Hello Jaslakshmi Crackers">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/whatsappicon.webp')} className='img-fluid' alt='product name' />
                  </div>
              </a>
                  
              </Col>
              <Col xs="4" sm="4">
              <a href='tel:+918110807330'>
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/callicon.webp')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
                 
              </Col>
              <Col xs="4" sm="4">
              <a href='https://maps.app.goo.gl/oUGR24yDnTNLX2V89' alt="">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/googlelocation.png')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
    </>
    <>
      <div>
        <Container className='py-3 z'>
            <Row>
              <Col lg='4' md='12' xs="12">
                <Navbar.Brand href="/">
                  <div className='logo mx-auto'>
                    <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' />
                  </div>
              </Navbar.Brand>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div className='me-3'><IoLocationOutline  size={45} color='#395aa8'/></div>
                    <div>
                      <h5 className='bold'> Address</h5>
                      <p className='regular'>  Sattur to Thayilpatti Road, <br/>
                      THAYILPATTI
                      </p>
                    </div>
                </div>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div className='me-3'><MdOutlinePhoneAndroid  size={45} color='#395aa8'/></div>
                    <div class>
                      <h5 className='bold'> Mobile Number</h5>
                        <div className='regular'>
                          <li>+91 8110807330</li>
                          <li>+91 9342173125</li>
                          <li>+91 7010500491</li>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  
    <>
      <Navbar expand="lg" className="nav-pad nav-bg" >
        <Container className='px-lg-5'>
          <div className='mx-auto'>
            <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link as={NavLink} exact to={"/home"} >Home</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/about"} >About</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/"} >Pricelist</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/safetytips"} >Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} >Contact</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
            </Nav>
            {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    </>
  )
}
const AppBarThree = () => {
  return (
    <>
    <>
    <div className='mark-bg'>
      <div className='d-lg-block d-none'>
        <Container fluid>
              <Row className='py-2'>
              <Col lg="4" xs="4" sm="4" className='align-self-center d-lg-block d-none'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <img src={require('../../assets/images/gpay.png')} className='img-fluid gpay' alt='gpay' />
                    </div>
                    <div className='text-white'>
                       <h5 className='bold mt-2 mx-2'>9361499985 </h5> 
                    </div>
                  </div>
              </Col>
                <Col lg='8' className='align-self-center text-white'>
                  <Marquee pauseOnHover={true}  direction="left" speed={50} delay={9}>
                    Whatsapp : +91 95971 45823 | Phone No : +91 95971 45823 | Email :  sriganeshtraders@gmail.com
                  </Marquee>
                </Col>
              </Row>
          </Container>
      </div>
      <div className='d-lg-none d-block py-3'>
          <Container fluid>
            <Row>
              <Col xs="4" sm="4">
              <a href="https://wa.me/919597145823?text=Hello Sri Ganesh Crackers">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/whatsappicon.webp')} className='img-fluid' alt='product name' />
                  </div>
              </a>
                  
              </Col>
              <Col xs="4" sm="4">
              <a href='tel:+919597145823'>
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/callicon.webp')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
                 
              </Col>
              <Col xs="4" sm="4">
              <a href='https://maps.app.goo.gl/M9bD62NWEtL2kUfdA' alt="">
                <div className='mob-icon mx-auto'>
                    <img src={require('../../assets/images/googlelocation.png')} className='img-fluid' alt='product name' />
                  </div> 
              </a>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
    </>
    <>
      <div>
        <Container className='py-3 z'>
            <Row>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div className='me-3'>
                      <IoLocationOutline  size={45} color='#ff1d55'/></div>
                    <div>
                      <h5 className='bold'> Address</h5>
                      <p className='regular'>  Sri Ganesh Crackers<br/>
                      Kovilpatti to Sattur Main Road, 626203
                      </p>
                    </div>
                </div>
              </Col>
              <Col lg='4' md='12' xs="12">
                <Navbar.Brand href="/">
                  <div className='logo mx-auto'>
                    <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' />
                  </div>
              </Navbar.Brand>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div className='me-3'>
                      <MdOutlinePhoneAndroid  size={45} color='#ff1d55'/></div>
                    <div class>
                      <h5 className='bold'> Mobile Number</h5>
                        <div className='regular'>
                          <li>+91 9944708084</li>
                          
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  
    <>
      <Navbar  className="nav-pad nav-bg d-lg-none d-block fixed-bottom" >
        <Container className='px-lg-5'>
          <div className='mx-auto'>
            <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
             
            
              <Nav.Link as={NavLink} exact to={"/home"} className='margin-20'><IoHome />Home</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/about"} className='margin-20'><MdOutlineDashboard />About</Nav.Link> */}
              <Nav.Link as={NavLink} exact to={"/"} className='margin-20'><ImPriceTag />Pricelist</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/safetytips"} className='margin-20'><MdHealthAndSafety />Safety Tips</Nav.Link> */}
              <Nav.Link as={NavLink} exact to={"/contactus"} className='margin-20'><RiContactsFill />Contact</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
            </Nav>
            {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="nav-pad nav-bg d-lg-block d-none" >
        <Container className='px-lg-5'>
          <div className='mx-auto'>
            <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link as={NavLink} exact to={"/home"} >Home</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/about"} >About</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/"} >Pricelist</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/safetytips"} >Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} >Contact</Nav.Link>
              {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
            </Nav>
            {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    </>
  )
}

export {AppBar,AppBarTwo,AppBarThree}