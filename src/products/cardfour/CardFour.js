import React, { useState } from 'react'
import { Col, Container, Row, Table, Modal } from 'react-bootstrap'
import { Table as BootstrapTable, Offcanvas } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Forms, DropDowns } from '../../components/Forms';
import { Buttons, Close } from '../../components/Buttons/Buttons';
import PageTitle from '../../components/Buttons/PageTitle';
import { FaPlay, FaTimes, } from "react-icons/fa";
import { PDFDownloadLink } from '@react-pdf/renderer';
import '../cardfour/CardFour.css'
import Bill from '../../pdf/Bill';
import { ToastContainer, toast } from 'react-toastify';
import { AiTwotonePicture } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import API_DOMAIN from '../../config/config';
const CardFour = ({ products, category, selectedProduct, totals, addToCart, setShowVideoModal, showVideoModal, updateQuantity, handleShowCart, handleCloseCart, showCart, handleClose, handleShow, show, removeProduct, cart, districtData, companydata, setCart, setting, banner, handleQuantityChange }) => {
    const [checkout, setCheckOut] = useState(false);
    const closeOut = () => setCheckOut(false);
    const showOut = () => setCheckOut(true);
    const [showEstimate, setShowEstimate] = useState(false);
    const closeModal = () => {
        window.location.reload();
        setShowEstimate(false);
    }
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
    const [printData, setPrintData] = useState([]);
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
        if (!formData.mobile || formData.mobile.trim() === '' || !formData.name || formData.name.trim() === "") {
            toast.error('Mobile number And Name cannot be empty!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        } else {
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
                        setPrintData(data.body.data);
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
        }
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
            <Container fluid>
                <Row>
                    <Col lg='12'>
                        <Row>
                            <Col lg='12' className='px-0'>
                                <div className='w-100 table-four-pricelist stick-top'>
                                    <Table className='mb-0'>
                                        <thead>
                                            <tr>
                                                <th className='text-left'>Total Product: {totals.totalProducts}</th>
                                                <th className='text-left'>Net Rate Total : {totals.overallTotal.toFixed(2)}</th>
                                                <th className='text-left'>Discount with Total: {totals.discountRate.toFixed(2)}</th>
                                                <th className='text-left cart-four' onClick={handleShowCart}><FaShoppingCart /></th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </div>
                                <div>
                                    <Table className='mb-0 fourth-table'>
                                        <tbody>
                                            <tr className='cardfour-table'>
                                                <th>Img</th>
                                                <th>Products</th>
                                                <th className='hide-small'>Content</th>
                                                <th>Net Rate</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>

                                            {category.map((categoryItem) => (
                                                <React.Fragment key={categoryItem.id}>
                                                    <tr>
                                                        <th colSpan={7} className='category-bg'>
                                                            <div className='category'>
                                                                {categoryItem.category_name}
                                                                {categoryItem.discount > 0 && (
                                                                    <span className='discount_percentage'>
                                                                        ({categoryItem.discount}% Discount)
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                    </tr>

                                                    {products
                                                        .filter((product) => product.category_id === categoryItem.id)
                                                        .map((product) => (
                                                            <tr className='product-four-list' key={product.id}>
                                                                <td>
                                                                    <div onClick={() => handleShow(product)}>
                                                                        <span className="mx-1">  <AiTwotonePicture /></span>
                                                                        <span className="mx-1"> <MdOutlineVideoLibrary /></span>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className='cardfour-product-name'>{product.product_name}</div>
                                                                </td>

                                                                <td className='hide-small'>
                                                                    <div>{product.product_content}</div>
                                                                </td>

                                                                <td >
                                                                    <div className='netrate'>
                                                                    {product.price}
                                                                    </div>
                                                                    <div className='d-lg-none d-block'>{product.product_content}</div>
                                                                </td>

                                                                <td >
                                                                    {product.discount_lock !== null && product.discount_lock === 0
                                                                        ? (
                                                                            Math.round(product.price -
                                                                            (product.price * categoryItem.discount) / 100)
                                                                        ).toFixed(2)
                                                                        : Math.round(product.price)}
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <input
                                                                            className='card-four-table-input-qty form-control'
                                                                            type='number'
                                                                            value={products.find(products => products.id === product.id)?.qty || ''} 
                                                                            
                                                                            min='0'
                                                                            onChange={(e) => handleQuantityChange(product.id, e.target.value,categoryItem.discount)}
                                                                        />
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <input
                                                                            className='card-four-table-input-price form-control'
                                                                            value={(
                                                                                (product.discount_lock !== null && product.discount_lock === 0
                                                                                    ? Math.round(product.price -
                                                                                    (product.price * categoryItem.discount) / 100)
                                                                                    : Math.round(product.price)) * (product.qty || 0)
                                                                            ).toFixed(2)}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </Table>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title><div> {selectedProduct && selectedProduct.product_name}</div></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="text-center image_video" colspan="2">
                                        <div className='modal-img mx-auto'>
                                            {selectedProduct && (
                                                selectedProduct.img ? (
                                                    <img src={selectedProduct.img} className='img-fluid' alt='Product' />
                                                ) : (
                                                    <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product' />
                                                )
                                            )}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer className='mx-auto'>
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
                            <Modal.Title>{selectedProduct && selectedProduct.product_name}</Modal.Title>
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
                    <PageTitle onClick={handleCloseCart} title={companydata.company_name} address={companydata.address} phone={companydata.phone} />
                    <Offcanvas.Body>
                        <div className='canvas-table'>
                            <div className='cart-table'>
                                <BootstrapTable>
                                    <tbody>
                                        {cart.map(cart => (
                                            <tr key={cart.id}>
                                                <td className='w-75'>
                                                    <div className='product-name pb-2'>{cart.product_name}</div>
                                                    <div className='qty-box'>
                                                        <input className='form-cntrl form-control' value={cart.qty} readOnly />
                                                    </div>
                                                </td>
                                                <td className='text-end'>
                                                    <div className='pb-2'> <Close label={<><FaTimes /></>} onClick={() => removeProduct(cart.id)} /> </div>
                                                    <div className='price_total'>₹<span>{Math.round(cart.total_price)}</span></div>
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
                                            <td className='w-100'>Total MRP rate :</td>
                                            <td> ₹<span>{totals.overallTotal.toFixed(2)}</span></td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <tr>
                                            <td className='w-100'>Total Discount Amount (80%) :</td>
                                            <td> ₹<span>{(totals.discountedOverallTotal).toFixed(2)}</span></td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <tr>
                                            <td className='w-100'>Total Amount :</td>
                                            <td> ₹<span>{(totals.discountRate).toFixed(2)}</span></td>
                                        </tr>
                                    </td>
                                </tr>
                            </BootstrapTable>
                        </div>

                        <div className='text-center'>
                            {/* {totals.discountRate >= "2500" && ( */}
                                <div className='text-center regular py-3'>
                                    <Buttons label={<>Confirm Estimate</>} fullWidth={'100%'}
                                        onClick={() => {
                                            showOut();
                                            handleCloseCart();
                                        }}
                                    ></Buttons>
                                </div>
                            {/* )} */}
                            {/* <div className='py-2'>
                                Min Order : ₹<span>2500</span>
                            </div> */}
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
                    </Col>                                        <Col lg='12' className='py-2'>
                      <DropDowns
                        options={cityOptions}
                        placeholder={"Select City"}
                        label={"Select City"}
                        name="city"
                        value={{ value: formData.city, label: formData.city }}
                        onChange={handleCityChange}
                      />
                    </Col>
                                        {/* <Col lg='12' className='py-2'>
                                            <Forms
                                                placeholder={"Enter the State"}
                                                label={"Enter the State"}
                                                name="state"
                                                value={formData.state}
                                                onChange={(e) => handleChange(e, 'state')}
                                            />
                                        </Col>
                                        <Col lg='12' className='py-2'>
                                            <Forms
                                                placeholder={"Enter the City"}
                                                label={"Enter the City"}
                                                name="city"
                                                value={formData.city}
                                                onChange={(e) => handleChange(e, 'city')}
                                            />
                                        </Col> */}
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
                                                <td className='w-100'>Total MRP rate :</td>
                                                <td> ₹<span>{totals.overallTotal.toFixed(2)}</span></td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td className='w-100'>Total Discount Amount (80%) :</td>
                                                <td> ₹<span>{(totals.discountedOverallTotal).toFixed(2)}</span></td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td className='w-100'>Total Amount :</td>
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
                <>
                    <Modal show={showEstimate} onClick={closeModal} centered className='regular' size='lg'>
                        <Modal.Header closeButton>
                            <Modal.Title className='bold'>Order Preview</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container fluid>
                                <Row>
                                    <Col lg="12">
                                        <div className='text-center py-3 mx-auto'>
                                            <div> {companydata.company_name}</div>
                                            <div>{companydata.address}</div>
                                            <div> Phone No :{companydata.phone}</div>
                                        </div>
                                        <div className='text-center'>Estimated Successfully</div>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer className='mx-auto'>
                            <PDFDownloadLink document={<Bill data={printData} />} fileName="estimate.pdf">
                                {({ loading }) => (
                                    loading
                                        ? <Buttons label={<>Generating PDF...</>} disabled />
                                        : <Buttons label={<>Download PDF</>} />
                                )}
                            </PDFDownloadLink>
                        </Modal.Footer>
                    </Modal>
                </>
            </>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}

export default CardFour