import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar} from './components/AppBar'
import Footer from './components/Footer'
import { Container,Row,Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import { Link }from 'react-router-dom';
import { ButtonView } from '../components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { MagicStar,HeartTick,Quant,Tag2} from 'iconsax-react';
// import Banner from './components/Banner';
import Carousal from './components/Carousal'
import { HomeProductsOne, HomeProductsTwo, HomeProductThree } from './HomeProducts';
import './home.css';
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
        src={require("../assets/images/banner/ganesh craxkers.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
        <div className='padding'>
                    {/* about content start */}

        <Container className="container pad products">
		<Row className="row">
<Col
  md="6"
  className="align-self-center pt-3 ord1"
  data-aos="zoom-in"
  data-aos-duration="1500"
  data-aos-delay="200"
>
  <img
    src={require('../assets/images/wel-side.webp')}
    className="img-fluid sty-radius shadow1"
    alt="sri ganesh traders shop"
    title="sri ganesh traders shop"
  />
</Col>

<Col
  md="6"
  className="text-center align-self-center pt-3 ord2"
  data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="200"
>
  <p className="top-title vara text-danger"><span>வரவேற்கிறோம்</span></p>
  <div className="heading1 tamil-font clr1">ஸ்ரீ கணேஷ் டிரேடர்ஸ்</div>
  <div className="heading6 pb-3 tamil-font">
    எங்களிடம் பட்டாசுகள் வாங்க சிறந்த வசதி உள்ளது!
  </div>
  <p className="tamil-font cracker-text">
    🚗 பார்க்கிங் வசதி உள்ளது! <br />
    🛍️ தங்கி பட்டாசு வாங்கிச் செல்ல போதுமான இட வசதி உள்ளது!<br />
    🛁 பாத்ரூம் வசதி உள்ளது! 
  </p>
</Col>

<Col
  md="6"
  className="text-center align-self-center pt-3 ord2"
  data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="200"
>
  <p className="top-title text-danger"><span>Welcome To</span></p>
  <div className="heading1 arial clr1">Sri Ganesh Traders</div>
  <div className="heading6 pb-3">
    WE HAVE THE GLORY BEGINING IN FIREWORKS BUSINESS
  </div>
  <p className="helvetica">
    Sri Ganesh Traders has been a well-known Fireworks Store in Sivakasi.
    What started out as a hobby, has become our passion and we're delighted to share it with you.
    We’re committed to offering quality products, unparalleled service and the most competitive
    prices in town. Great service begins with great people and industry experience, which is why
    our staff is made up of the best and most qualified in the business.
  </p>
</Col>

		</Row>
	</Container>
    {/* about content end */}
       {/* Our products start */}
        <div className="whychoosebg">
	<Container className="container">
		<Row className="row">
            <div className="para_size">
                <Col lg='12' className=" text-center pb-lg-4 wow fadeInDown" 
                style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                    <h1 className="arial headfnt text-white font-weight-bold">Our Products</h1>
					<img src={require("../assets/images/nod.webp") }
                    className="img-fluid mb-3 w-10" 
                    alt="sivakasi wholesale crackers shop" 
                    title="sivakasi wholesale crackers shop"/>
                    <p className="helvetica text-white pt-4">We aim to make our customers satisfied and happy with all of our innovative crackers.
                        We introduce new crackers and packages every year for our beloved customers. </p>
                </Col>
            </div>
		</Row>
	</Container>
</div>
{/* Our products end */}
{/* products start */}
<Container className="container productsline ">
	<Row className="row row-hang">
        
        <Col lg='4' md='6' className="pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/unnamed.jpg")} style={{maxHeight:'420px',maxWidth:'700px'}}
                                className="img-fluid rd" alt="online crackers shopping" title="online crackers shopping"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial"> Baby's Collection </div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
        <Col lg='4' md='6' className="pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product2.webp")}  
                                className="img-fluid rd" alt="diwali crackers sale" title="diwali crackers sale"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial">Single Sounds</div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className="pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product6.webp")}
                                className="img-fluid rd" alt="online crackers shopping" title="online crackers shopping"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial"> Ground Chakkars </div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className=" pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product3.webp")} 
                                className="img-fluid rd" alt="diwali crackers sale" 
                                title="diwali crackers sale"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial"> Flower Pots </div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className=" pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product5.webp")} 
                                className="img-fluid rd" alt="diwali crackers sale" title="diwali crackers sale"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial">Sparklers</div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className=" pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product4.webp")}  
                                className="img-fluid rd" alt="sri ganesh traders shop" title="sri ganesh traders shop"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial">Skyshots</div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className="pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/product1.webp")}  
                                className="img-fluid rd" alt="online crackers shopping" title="online crackers shopping"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial">Rockets</div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
		<Col lg='4' md='6' className="pt-4">
			<Link to="/">
				<div className="mb-30">
					<div className="product-item">
						<div className="thumb">
							<div className="thumb-inner"> 
								<img src={require("../assets/images/bann-scaled.webp")}  style={{maxHeight:'420px',maxWidth:'700px'}}
                                className="img-fluid rd" alt="diwali crackers sale" title="diwali crackers sale"/>
							</div>
						</div>
						<div className="details">
							<div className="helvetica pb-3 text-dark"></div>
							<div className="heading5 clr1 arial">Gift Box items</div>
						</div>
					</div>
				</div>
			</Link>
		</Col>
	</Row>
</Container>
{/* products end */}
            {/* <Container>
                <Row>
                    <Col lg={6} xs='12'>
                        <div className='home-top'>
                            <h2 className='bold color-red'> Welcome to sri ganesh  </h2>
                            <div className='regular'>
                                <p>
                                    <span class="color-red bold">Sri Ganesh Traders</span> is the leading supplier of Crackers , Sparklers & Fancy items and our aim is to provide the excellent services and true value for money. Any Special Functions can't be completed without Crackers sounds and colors. We provide that through our Dazzling Crackers. We are from the Cracker city Sivakasi. 
                                    Our efficiency in business has set benchmarks among our competitors in the line of quality.
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
                                {/* <ButtonView label={<>Shop Now</>} className="shop-now" onClick={handlenavigate}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xs='12'>
                        <img src={require('../assets/images/intro.jpg')} className='img-fluid' alt='best discount in diwali sale'  />
                    </Col>
                </Row>
            </Container> */}
        </div>
            {/* <>
            <HomeProductsOne/>
            </> */}
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
                        <h1 class=" bold text-center pb-1 lg-font h1color"> Welcome to Sri Ganesh Traders</h1>  
                            <h2 class=" bold pt-5 subheadcolor">Diwali Best Crackers In sivakasi</h2>
                            <p class="regular">
                                We have immense pleasure in welcoming you to visit our mega fireworks showroom located in Sivakasi, where you can directly place your valuable orders and fulfill all your crackers requirements at one stop. We are in the cracker's industry for past 10+ years. It's our pride in supplying our esteemed customers with the best quality crackers at the lowest market prices.</p>
                                <p class="regular">We are the leading supplier of Sparklers, Ground Chakkars, Flower Pots, Fountains, Fancy Crackers, Sound Crackers, Novelty Fireworks, Rockets, Bombs, Twinkling Stars, Elite Crackers, Fancy Deluxe Fountains, Loose Crackers, Electric Crackers, Fancy Novelties, Multi Colour Shots, Aerial Colour Novelties, Comets and Fireworks Gift Boxes..</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <img src={require('../assets/images/banner/banner_et.jpg')} className='img-fluid w-100' alt='Sri Ganesh Traders' />
       {/* <intro end */}

            {/* product start */}
              
            {/* product start */}
                 {/* why choose start */}
                 <Container>
                    <Row className='justify-content-center'>
                        <Col lg='6'>
                            <h1 class=" bold text-center pb-5 lg-font h1color">Why Choose
                            Sri Ganesh Traders</h1>
                            <p className='regular text-center'>
                            Sri Ganesh Traders Shop is a top provider of premium crackers and fireworks located in Sivakasi, Tamil Nadu. 
                            We offer authentic Sri Ganesh Traders at highly competitive prices, ensuring you get the best quality for your celebrations.</p>
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
       <img src={require('../assets/images/banner/baanner7.jpg')} className='img-fluid w-100' alt='Sri Ganesh traders' data-aos="flip-right" />
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
                                Sri Ganesh Traders
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
        {/* about content start */}
    </div>
    </>
  )
}

export default Home