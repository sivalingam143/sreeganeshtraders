import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar} from './components/AppBar'
import Footer from './components/Footer'
import { Container,Row,Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import { ButtonView } from '../components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { MagicStar,HeartTick,Quant,Tag2} from 'iconsax-react';
// import Banner from './components/Banner';
import Carousal from './components/Carousal'
import { HomeProductsOne, HomeProductsTwo, HomeProductThree } from './HomeProducts';
// import Countdown from './components/DayCount';
const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,    // Offset (in px) from the original trigger point
            delay: 500,       // Values from 0 to 3000, with step 50ms
            duration: 3000, // Values from 0 to 3000, with step 50ms
            easing: 'ease', // Default easing for AOS animations
            mirror: true,  // Whether elements should animate out while scrolling past them
          });
      }, []);
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/');
    }

  return (
    <>
<div className='over'>
        <AppBar/>
        <img
        src={require("../assets/images/banner/banner_nine.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
        <div className='padding'>
            <Container>
                <Row>
                    <Col lg={6} xs='12'>
                        <div className='home-top'>
                            <h2 className='bold color-red'> Welcome to Sivakasi Crackers</h2>
                            <div className='regular'>
                                <p>
                                    <span class="color-red bold">Sivakasi Crackers</span> is the leading supplier of Crackers , Sparklers & Fancy items and our aim is to provide the excellent services and true value for money. Any Special Functions can't be completed without Crackers sounds and colors. We provide that through our Dazzling Crackers. We are from the Cracker city Sivakasi. Our efficiency in business has set benchmarks among our competitors in the line of quality.
                                </p>
                                <p>
                                We are one of the leading Wholesale & Retail crackers shop in sivakasi. We are offering the High Quality products with low price. Our main moto is to supply quality products to our valuable Customers. Make your colorful occasion with our quality Crackers.
                                </p>
                                <p>
                                    We have more than 200 varieties of Pyro, Fancy and Aerial cracker items of more than 10 superior quality fireworks
                                </p>
                            </div>
                         
                            <div>
                                {/* <Buttons label={<>Shop Now . . . !</>} onClick={handlenavigate} data-aos="fade-up"/> */}
                                <ButtonView label={<>Shop Now</>} className="shop-now" onClick={handlenavigate}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xs='12'>
                        <img src={require('../assets/images/intro.jpg')} className='img-fluid' alt='best discount in diwali sale'  />
                    </Col>
                </Row>
            </Container>
        </div>
            <>
            <HomeProductsOne/>
            </>
        <div className='blast-one'>
            <img src={require('../assets/images/blast_one.gif')} className='img-fluid' alt='Blast Crackers'  />
          
        </div>
        <div className='blast-two'>
            <img src={require('../assets/images/blast_two.gif')} className='img-fluid' alt='Blast Crackers'  />
        </div>
        {/* <img src={require('../assets/images/banner_two.jpg')} className='img-fluid w-100' alt='Alagar crackers' data-aos="flip-right" /> */}
        {/* <Banner/> */}

        {/* <intro start */}
        <div className='padding'>
            <Container>
                <Row>
                    <Col xs={12} className='py-3 align-self-center'>
                    <div data-aos="fade-up" className='text-center'>
                        <h1 class=" bold text-center pb-1 lg-font h1color"> Welcome to Sivakasi Crackers</h1>  
                            <h2 class=" bold pt-5 subheadcolor">Diwali Best Crackers In sivakasi</h2>
                            <p class="regular">
                                We have immense pleasure in welcoming you to visit our mega fireworks showroom located in Sivakasi, where you can directly place your valuable orders and fulfill all your crackers requirements at one stop. We are in the cracker's industry for past 10+ years. It's our pride in supplying our esteemed customers with the best quality crackers at the lowest market prices.</p>
                                <p class="regular">We are the leading supplier of Sparklers, Ground Chakkars, Flower Pots, Fountains, Fancy Crackers, Sound Crackers, Novelty Fireworks, Rockets, Bombs, Twinkling Stars, Elite Crackers, Fancy Deluxe Fountains, Loose Crackers, Electric Crackers, Fancy Novelties, Multi Colour Shots, Aerial Colour Novelties, Comets and Fireworks Gift Boxes..</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <img src={require('../assets/images/banner/banner_et.jpg')} className='img-fluid w-100' alt='Sivakasi Crackers' />
       {/* <intro end */}

            {/* product start */}
              
            {/* product start */}
                 {/* why choose start */}
                 <Container>
                    <Row className='justify-content-center'>
                        <Col lg='6'>
                            <h1 class=" bold text-center pb-5 lg-font h1color">Why Choose
                            Sivakasi Crackers</h1>
                            <p className='regular text-center'>
                            Sivakasi Crackers Shop is a top provider of premium crackers and fireworks located in Sivakasi, Tamil Nadu. We offer authentic Sivakasi crackers at highly competitive prices, ensuring you get the best quality for your celebrations.</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg="3"xs={12} >
                        <div data-aos="fade-right" className='why-box-one'>
                            <div className='choose-icon' data-aos="zoom-in-left">
                                <Quant
                                    size="32"
                                    color="#fff"
                                    />
                            </div>
                            <h5 class=" bold subheadcolor">Quality</h5>
                            <p class="regular">
                                Manufacturing Quality Crackers & innovation are the key behind our success.
                            </p>
                        </div>
                    </Col>
                    <Col lg="3"xs={12} >
                        <div data-aos="fade-down" className='why-box-two'>
                        <div className='choose-icon' data-aos="zoom-in-left">
                            <Tag2
                            size="32"
                            color="#fff"
                            />
                        </div>
                            <h5 class=" bold subheadcolor">Affordeble Price</h5>
                            <p class="regular">
                            We are producing safe and compliant crackers with highest quality at low price.
                            </p>
                        </div>
                    </Col>
                    <Col lg="3"xs={12}>
                        <div data-aos="fade-up" className='why-box-one'>
                            <div className='choose-icon'>
                                <MagicStar size="32" color="#fff"/>
                            </div>
                            <h5 class=" bold subheadcolor">Safe To Use</h5>
                            <p class="regular">
                            Crackers we offer are safe and made from fine quality raw materials.
                            </p>
                        </div>
                    </Col>
                    <Col lg="3"xs={12} className='pad-z'>
                        <div data-aos="fade-left" className='why-box-two'>
                            <div className='choose-icon'>
                                <HeartTick
                                    size="32"
                                    color="#fff"
                                    />
                            </div>
                            <h5 class=" bold subheadcolor">Customer Satisfaction</h5>
                            <p class="regular">
                            Our quality and timely delivery has attracted customers easily.
                            </p>
                        </div>
                    </Col>
                     </Row>
            </Container>
        {/* why choose end */}
       {/* our special */}
            {/* <Container className='padding'>
                <Row>
                    <Col lg="3" md="6" xs="12" className='py-3'>
                        <div className=' choose text-center py-5' data-aos="zoom-in-right">
                            <div className='choose-icon' data-aos="zoom-in-left">
                            <Quant
                                size="32"
                                color="#555555"
                                />
                            </div>
                                <h2 class="bold">Quality</h2>
                                <p class="regular">Manufacturing Quality Crackers &amp; innovation are the key behind our success.</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" className='py-3'>
                        <div className=' choose text-center py-5' data-aos="zoom-in-right">
                            <div className='choose-icon' >
                            <Tag2
                                size="32"
                                color="#555555"
                                />
                            </div>
                                <h2 class="bold">Affordeble Price</h2>
                                <p class="regular">We are producing safe and compliant crackers with highest quality at low price.</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" className='py-3'>
                        <div className='choose text-center py-5' data-aos="flip-left">
                            <div className='choose-icon'>
                                <MagicStar size="32" color="#555555"/>
                            </div>
                                <h2 class="bold">Safe To Use</h2>
                                <p class="regular">Crackers we offer are safe and made from fine quality raw materials.</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" className='py-3'>
                        <div className='choose text-center py-5' data-aos="flip-right">
                            <div className='choose-icon'>
                                <HeartTick
                                    size="32"
                                    color="#555555"
                                    />
                            </div>
                                <h2 class="bold">Satisfaction</h2>
                                <p class="regular">Our quality and timely delivery has attracted customers easily.</p>
                        </div>
                    </Col>
                </Row>
            </Container> */}
       {/* our special */}
        {/* paralax start */}
        <div className='padding'>
                <Container>
                    <Row>
                        <Col lg="3" xs={12} className='py-3'>
                            <div className='z'>
                                <div className='counter-box text-center' >
                                    <CountUp end={15} delay={8}/><span>+</span>
                                </div>
                                <div className='text-center bold '>Years Experience</div>
                            </div>
                        </Col>
                        <Col lg="3" xs={12} className='py-3'>
                            <div className='z'>
                                <div className='counter-box text-center'>
                                    <CountUp end={200} delay={8}/><span>+</span>
                                </div>
                                <div className='text-center bold'>Products</div>
                            </div>
                        </Col>
                        <Col lg="3" xs={12} className='py-3'>
                            <div className='z'>
                                <div className='counter-box text-center'>
                                    <CountUp end={1000} delay={8}/><span>+</span>
                                </div>
                                <div className='text-center bold'>Customers</div>
                            </div>
                        </Col>
                        <Col lg="3" xs={12} className='py-3'>
                            <div className='z' >
                                <div className='counter-box text-center'>
                                    <CountUp end={100} delay={8}/><span>%</span>
                                </div>
                                <div className='text-center bold'>Customer Satisfaction</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
       {/* paralax end */}
       <img src={require('../assets/images/banner/baanner7.jpg')} className='img-fluid w-100' alt='Sivakasi crackers' data-aos="flip-right" />
       {/* product banner start */}
            <div className='padding'>
                <Container>
                        <Row>
                            <Col lg="6" className='py-3'>
                                <img src={require('../assets/images/wholesale_retails/aboutimage1.webp')} className='img-fluid' alt='reatil crackers' data-aos="flip-right" />
                            </Col>
                            <Col lg="6" className='py-3'>
                                <img src={require('../assets/images/wholesale_retails/aboutimage2.webp')} className='img-fluid' alt='whole sale crackers' data-aos="flip-left"/>
                            </Col>
                        </Row>
                </Container>
            </div>
       {/* product banner end */}
        {/* sale bg start*/}
        <div className='padding'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg="12" md="12" xs='12' className='py-3 align-self-center'>
                        <div className='text-center' data-aos="fade-right">
                            <h1 className='bold h1color'> Our Brands</h1>
                        </div>
                    </Col>
                    <Col lg="8" md="12" xs='12' className='py-3 align-self-center text-center'>
                        <Carousal/>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='salebg'>
            <div className='sale'>
                <Container>
                    <Row>
                        <Col lg="7" md="12" xs='12' className='py-3'>
                            <div class="" data-aos="fade-right">
                                <h1 class="bold">
                                Sivakasi Crackers
                                </h1> 
                                <div className='regular'>
                                    <p>We are the leading crackers wholesale manufacturers in Sivakasi, We deliver crackers directly from Sivakasi at affordable price.</p>
                                    <p>We have a crackers warehouse where you can get 365 days at an affordable price with the best discount.</p>
                                </div>
                            </div>
                            <div>
                                {/* <Buttons label={<>Shop Now . . . !</>} onClick={handlenavigate} data-aos="fade-up"/> */}
                                <ButtonView label={<>Shop Now</>} className="shop-now" onClick={handlenavigate}/>
                            </div>
                        </Col>
                        <Col lg="5" md="12" xs='12' className='py-3 align-self-center text-center'>
                            <img src={require('../assets/images/gify.webp')} className='img-fluid w-50' alt='product name' data-aos="flip-right" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        {/* sale bg end*/}
        <Footer/>
        </div>
    </>
  )
}

export default Home