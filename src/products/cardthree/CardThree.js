import React, { useState } from 'react'
import styled from 'styled-components';
import { Container, Row, Col, Table as BootstrapTable, Modal, Offcanvas } from 'react-bootstrap';
import './cardthree.css'
import ProductCardTwo from '../cardtwo/ProductCardTwo';
import { FaPlay, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Buttons, Close } from '../../components/Buttons/Buttons';
import { FaPlus, FaMinus } from "react-icons/fa6";
import PageTitle from '../../components/Buttons/PageTitle';
import { Forms, DropDowns } from '../../components/Forms';
import API_DOMAIN from '../../config/config';
const CardThree = ({ products, category, selectedProduct, totals, addToCart, setShowVideoModal, showVideoModal, updateQuantity, handleShowCart, handleCloseCart, showCart, handleClose, handleShow, show, removeProduct, cart, districtData, companydata, setCart, setting, banner }) => {
  const [checkout, setCheckOut] = useState(false);
  const closeOut = () => setCheckOut(false);
  const showOut = () => setCheckOut(true);
  const [showEstimate, setShowEstimate] = useState(false);
  const closeModal = () => setShowEstimate(false);
  const showModal = () => setShowEstimate(true);
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    name: '',
    email: '',
    mobile: '',
    address: ''
  });
  const [cityOptions, setCityOptions] = useState([]);

  const handleStateChange = (selectedOption) => {
    const state = selectedOption.value;
    setFormData(prevState => ({
      ...prevState,
      state,
      city: ''
    }));

    const cities = districtData[state] || [];
    setCityOptions(cities.map(city => ({ value: city, label: city })));
  };

  const handleCityChange = (selectedOption) => {
    const city = selectedOption.value;
    setFormData(prevState => ({
      ...prevState,
      city
    }));
  };

  const handleChange = (e, fieldName) => {
    const value = e.target ? e.target.value : e.value;

    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const handleSubmit = () => {
    fetch(`${API_DOMAIN}/online_enq_web.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "cart_pro": cart,
        "customer_data": formData,
        "total_products": totals.totalProducts,
        "total_price": totals.discountRate.toFixed(2),
        "total_discount": totals.overallTotal.toFixed(2)
      })
    })
      .then(response => {
        console.log('postdata', JSON.stringify({
          "cart_pro": cart,
          "customer_data": formData,
          "total_products": totals.totalProducts,
          "total_price": totals.discountRate.toFixed(2),
          "total_discount": totals.overallTotal.toFixed(2)
        }))
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.head.code === 200) {
          showModal();
          setCart([]);
          setFormData([]);
          closeOut();
        } else {
          console.error(data.body.msg);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1);
    } else if (urlObj.hostname === 'youtube.com' || urlObj.hostname === 'www.youtube.com') {
      return urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
    }
    return '';
  };
  const handleVideoModalShow = () => {
    console.log('Showing video modal');
    setShowVideoModal(true);
  };

  const handleVideoModalClose = () => {
    console.log('Closing video modal');
    setShowVideoModal(false);
  };
  const actionvalue = "minus";
  return (
    <>
    
      <>
    
        <Container fluid className='stick-top'>
          <Row>
            <Col lg='12' className='p-0'>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Total Products :{totals.totalProducts}</th>
                    <th>Discount Rate : {totals.discountRate.toFixed(2)}</th>
                    <th>Overall Total : {totals.overallTotal.toFixed(2)}</th>
                    <th>
                      <div className='cart-icon' onClick={handleShowCart}>
                        <FaShoppingCart />
                      </div>
                    </th>
                  </tr>
                </thead>
              </StyledTable>
            </Col>
          </Row>
        </Container>
      </>
      <div className='card'>
        <Container fluid >
          <Row>
            <Col lg="12">
              <Row>
                <Col lg='12' className='px-0' >
                  <div className='w-100 card'>
                    <table bordered responsive="sm" className="table table-bordered ">
                      <tbody>
                        <tr className='table-head'>
                          <th>Img</th>
                          <th>Products</th>
                          <th className='hide-small'>Content</th>
                          <th className='d-none d-lg-block'>Net Rate</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Price</th>
                        </tr>
                        {category.map(categoryItem => (
                          <React.Fragment key={categoryItem.id}>
                            <tr>
                              <th colspan="9" class="category-bg">
                                <div className='category'>
                                  {categoryItem.category_name}  {categoryItem.discount && categoryItem.discount > 0 ? (<span className='discount_percentage'>({categoryItem.discount}% Discount)</span>) : ('')}
                                </div>
                              </th>
                            </tr>
                            {products
                              .filter(product => product.category_id === categoryItem.id)
                              .map(product => (
                                <tr key={product.id}>
                                  <td>
                                    <div className='product-img text-center' onClick={handleShow}>
                                      <img src={product.img ? product.img : require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' title='product name' />
                                    </div>
                                  </td>
                                  <td className='wordbreak'>
                                    <div className='product-name'> {product.name}</div>
                                  </td>
                                  <td className='hide-small'>
                                    <div className='product-content'> {product.product_content}</div>
                                  </td>
                                  {/* if there is conditional rendering only net_rate */}
                                  {/* <td>
                                                <div className='net_rate_only py-1'>₹ <span>1223</span></div>
                                            </td> */}
                                  {/* if there is conditional rendering only net_rate */}
                                  <td className='d-none d-lg-block'>
                                    <div className='net_rate py-1'>{product.discount_lock !== null && product.discount_lock === 1 ? (
                                      <>
                                        ₹<span>{product.price}</span>
                                      </>
                                    ) : ''}</div>
                                  </td>
                                  {/* if there is conditional rendering net_rate and discount_rate */}
                                  <td>
                                    {product.discount_lock === 0 ? (
                                      <>
                                        <div className='discount_rate py-1'>₹ <span>{product.discount_lock !== null && product.discount_lock === 0 ? (product.price - (product.price * categoryItem.discount / 100)).toFixed(2) : product.price}</span></div>
                                      </>
                                    ) : (null)}
                                  </td>
                                  {/* if there is conditional rendering  net_rate and discount_rate */}
                                  <td style={{ width: "10px" }}>
                                    <div>
                                      <Calc className='py-3 '>
                                         {/* <Buttons className='mx-2' label={<><FaMinus /></>}
                                          onClick={() => {
                                            if (product.qty > 0) {
                                              updateQuantity(product.id, -1)
                                              addToCart({
                                                id: product.id,
                                                name: product.name,
                                                total_price: product.price,
                                                qty: product.qty - 1,
                                                discount: categoryItem.discount,
                                                category_id: product.category_id,
                                                per_price: product.discount_lock !== null && product.discount_lock === 0 ? (product.price - (product.price * categoryItem.discount / 100)).toFixed(2) : product.price,
                                                product_content: product.product_content,
                                                img: product.img || null,
                                                action: actionvalue
                                              });
                                            }
                                          }}
                                        />  */}
                                        <div className='mx-2'>
                                          <Input placeholder='Qty' value={product.qty}/>
                                        </div>
                                         {/* <Buttons className='mx-2' label={<><FaPlus /></>}
                                          onClick={() => {
                                            addToCart({
                                              id: product.id,
                                              name: product.name,
                                              total_price: product.price,
                                              qty: product.qty + 1,
                                              discount: categoryItem.discount,
                                              category_id: product.category_id,
                                              per_price: product.discount_lock !== null && product.discount_lock === 0 ? (product.price - (product.price * categoryItem.discount / 100)).toFixed(2) : product.price,
                                              product_content: product.product_content,
                                              img: product.img || null
                                            });
                                            updateQuantity(product.id, 1)
                                          }}
                                        />  */}
                                      </Calc>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='total_price'> <Input placeholder='Price' value={((product.discount_lock !== null && product.discount_lock === 0) ? (product.price - (product.price * categoryItem.discount / 100)).toFixed(2) : product.price) * product.qty.toFixed(2)} readOnly /></div>
                                  </td>
                                </tr>
                              ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title><div> {selectedProduct && selectedProduct.name}</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tbody>
                <tr>
                  <td class="text-center image_video" colspan="2">
                    <div className='modal-img'>
                      {selectedProduct && (
                        selectedProduct.img ? (
                          <img src={selectedProduct.img} className='img-fluid' alt='Product' />
                        ) : (
                          <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='Product Placeholder' />
                        )
                      )}

                    </div>
                  </td>
                </tr>
                {/* if only img upload */}
                {/* <tr>
                        <td colspan="2" className='mx-auto'>
                        <div className='text-center w-25 mx-auto'>
                            <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product' />
                        </div>
                        </td>
                    </tr> */}
                {/* if only img upload */}
                {/* if both i9mg or vide upload show  */}
                {/* <tr>
                        <td>
                        <div className=' w-25'>
                            <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product' />
                        </div>
                        </td>
                        <td>
                        <div className=''>
                            <div className=' w-25 play-icon'>
                            <FaPlay />
                            </div>
                        </div>
                        
                        </td>
                    </tr> */}
                {/* if both i9mg or vide upload show it working for like tab*/}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <table>
              <tbody>
                <tr>
                  {selectedProduct && selectedProduct.img && (
                    <td>
                      <div className='dual'>
                        <img src={selectedProduct.img} className='img-fluid' alt='product' />
                      </div>
                    </td>
                  )}
                  {selectedProduct && selectedProduct.video_url && (
                    <td>
                      <div className='w-25 mx-auto'>
                        <div className='play-icon' onClick={handleVideoModalShow}>
                          <FaPlay />
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </Modal.Footer>
        </Modal>
        {showVideoModal && (
          <Modal show={showVideoModal} onHide={handleVideoModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${extractVideoId(selectedProduct.video_url)}`}
                frameBorder="0"
                allowFullScreen
                title="Product Video"
              />
            </Modal.Body>
          </Modal>
        )}
      </>
      <>
        <Offcanvas show={showCart} onHide={handleCloseCart} scroll="true" placement='end'>
          <PageTitle onClick={handleCloseCart} title={companydata.company_name} />
          <Offcanvas.Body>
            <div className='canvas-table'>
              <BootstrapTable>
                {cart.map(cart => (
                  <tr key={cart.id}>
                    <td className='w-50'>
                      <div className='product-name'>{cart.name} </div>
                      <div className='qty-box'>
                        <input className='w-25 form-control' value={cart.qty} readOnly />
                      </div>
                    </td>
                    <td className='text-end'>
                      <div> <Close label={<><FaTimes /></>} onClick={() => removeProduct(cart.id)} /> </div>
                      <div className='price_total'>₹  <span>{cart.total_price}</span></div>
                    </td>
                  </tr>
                ))}
              </BootstrapTable>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
        {/* <div className='d-lg-none d-md-block'>
          <ProductCardTwo
            products={products}
            category={category}
            totals={totals}
            updateQuantity={updateQuantity}
            handleShowCart={handleShowCart}
            handleCloseCart={handleCloseCart}
            showCart={showCart}
            handleShow={handleShow}
            selectedProduct={selectedProduct}
            handleClose={handleClose}
            show={show}
            companydata={companydata}
            setShowVideoModal={setShowVideoModal}
            showVideoModal={showVideoModal}
            removeProduct={removeProduct}
            addToCart={addToCart}
            cart={cart}
            setCart={setCart}
            districtData={districtData}
            setting={setting}
            banner={banner}
          />
        </div> */}
      </>
      <>
        <Offcanvas show={showCart} onHide={handleCloseCart} scroll="true" placement='end'>
          <PageTitle onClick={handleCloseCart} title={companydata.company_name} />
          <Offcanvas.Body>
            <div className='canvas-table'>
              <div className='cart-table'>
                <BootstrapTable>
                  <tbody>
                    {cart.map(cart => (
                      <tr key={cart.id}>
                        <td className='w-75'>
                          <div className='product-name pb-2'>{cart.name}</div>
                          <div className='qty-box'>
                            <input className='form-cntrl form-control' value={cart.qty} readOnly />
                          </div>
                        </td>
                        <td className='text-end'>
                          <div className='pb-2'> <Close label={<><FaTimes /></>} onClick={() => removeProduct(cart.id)} /> </div>
                          <div className='price_total'>₹<span>{cart.total_price}</span></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </BootstrapTable>
              </div>
            </div>
            <div className='bottom-table'>
              <BootstrapTable>
                <tr>
                  <td>
                    <tr>
                      <td className='w-100'> Net rate :</td>
                      <td> ₹<span>{totals.overallTotal.toFixed(2)}</span></td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td>
                    <tr>
                      <td className='w-100'> Discount Total :</td>
                      <td> ₹<span>{(totals.discountRate).toFixed(2)}</span></td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td>
                    <tr>
                      <td className='w-100'> Overall Total :</td>
                      <td> ₹<span>{(totals.discountRate).toFixed(2)}</span></td>
                    </tr>
                  </td>
                </tr>
              </BootstrapTable>
            </div>
            <div className='text-center'>
              {totals.discountRate >= "2500" && (
                <div className='text-center regular py-3'>
                  <Buttons label={<>Confirm Estimate</>} fullWidth={'100%'}
                    onClick={() => {
                      showOut();
                      handleCloseCart();
                    }}
                  ></Buttons>
                </div>
              )}
              <div className='py-2'>
                Min Order : ₹<span>2500</span>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
        <Offcanvas show={checkout} scroll="true" placement='end'>
          <PageTitle onClick={closeOut} title={companydata.company_name} />
          <Offcanvas.Body>
            <div className='customer-details'>
              <div className='canvas-table'>
                <Container>
                  <Row>
                    <Col lg='12' className='py-2'>
                      <DropDowns
                        options={Object.keys(districtData).map(state => ({ value: state, label: state }))}
                        placeholder={"Select State"}
                        label={"Select State"}
                        name="state"
                        value={{ value: formData.state, label: formData.state }}
                        onChange={handleStateChange}
                      />
                    </Col>
                    <Col lg='12' className='py-2'>
                      <DropDowns
                        options={cityOptions}
                        placeholder={"Select City"}
                        label={"Select City"}
                        name="city"
                        value={{ value: formData.city, label: formData.city }}
                        onChange={handleCityChange}
                      />
                    </Col>
                    <Col lg='12' className='py-2'>
                      <Forms
                        placeholder={"Enter the name"}
                        label={"Enter the Name"}
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                      />
                    </Col>
                    <Col lg='12' className='py-2'>
                      <Forms
                        placeholder={"Enter the Mail"}
                        label={"Enter the Mail"}
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, 'email')}
                      />
                    </Col>
                    <Col lg='12' className='py-2'>
                      <Forms
                        placeholder={"Mobile No."}
                        label={"Mobile No."}
                        name="mobile"
                        value={formData.mobile}
                        onChange={(e) => handleChange(e, 'mobile')}
                      />
                    </Col>
                    <Col lg='12' className='py-2'>
                      <div className='py-2'> <label> Address</label></div>
                      <textarea
                        placeholder='Address'
                        className='w-100'
                        name="address"
                        value={formData.address}
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className='bottom-table'>
                <BootstrapTable>
                  <tr>
                    <td>
                      <tr>
                        <td className='w-100'> Net rate :</td>
                        <td> ₹<span>{totals.overallTotal.toFixed(2)}</span></td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <tr>
                        <td className='w-100'> Discount Total :</td>
                        <td> ₹<span>{totals.discountRate.toFixed(2)}</span></td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <tr>
                        <td className='w-100'> Overall Total :</td>
                        <td> ₹<span>{(totals.discountRate).toFixed(2)}</span></td>
                      </tr>
                    </td>
                  </tr>
                </BootstrapTable>
              </div>
              <div className='d-flex justify-content-evenly'>
                <div className='text-center regular py-3 w-100 mx-2'>
                  <Buttons label={<>Submit</>} className="w-100" fullWidth={"100%"} onClick={handleSubmit} onHide={closeOut}></Buttons>
                </div>
                <div className='text-center regular py-3 w-100 mx-2'>
                  <Buttons label={<>Cancel</>} fullWidth={"100%"} onClick={closeOut}></Buttons>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
        <Modal show={showEstimate} onClick={closeModal} centered className='regular' size='lg'>
          <Modal.Header closeButton>
            <Modal.Title className='bold'>Order Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col lg="12">
                  <div className='text-center py-3'>
                    <div> {companydata.company_name}</div>
                    <div>{companydata.address}</div>
                    <div> Phone No :{companydata.phone}</div>
                  </div>
                  <div className='text-center'>Estimated Successfully</div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Buttons label={<>Download PDF</>} onClick={closeModal} />
          </Modal.Footer>
        </Modal>
        
      </>
    </>
  )
}

export default CardThree
const StyledTable = styled(BootstrapTable)`
margin-bottom:0 !important;
background-color: red; 
border:0;
border-color:red;  
  & th, & td {
    text-align: center; 
    background-color: red;         
  }
`
const Calc = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Input = styled.input`
border: none;
outline: none;
padding: 4px; width:70px;
text-align:center;
background: transparent;
@media (max-width: 768px) {
    width: 30px;
  }
`;

