import React, { useState,useEffect } from 'react';
//import CardOne from '../../products/cardone/CardOne';
import CardThree from '../../products/cardthree/CardThree'
// import ProductCardTwo from '../../products/cardtwo/ProductCardTwo'
import API_DOMAIN from '../../config/config';
import CardFour from '../../products/cardfour/CardFour';
import {calculateTotals,districtData } from '../../models/cardone/card_one_model';
const ProductController = () => {
  const [products, setProducts] = useState([]);
  const [category,setcatgory] = useState([]);
  console.log(category);
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(false); // State for modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showVideoModal,setShowVideoModal]= useState(false);
  const [cart, setCart] = useState([]);
  console.log('cart',cart)
  const [setting,setSetting]=useState([]);
  const [banner,setbanner]= useState([]);
  const [companydata, setcompanydata] = useState([]);
  console.log('companydata',companydata)
  useEffect(() => {
    fetch(`${API_DOMAIN}/company.php`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        "search_text": ""
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      
      setcompanydata(data.body.company);
      
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });

   
  }, [])
  useEffect(() => {
    fetch(`${API_DOMAIN}/page_settings.php`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        "search_text": ""
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        
      setSetting(data.body.settings);
      
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, [])
  useEffect(() => {
    fetch(`${API_DOMAIN}/home_banner.php`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        "search_text": ""
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        
      setbanner(data.body.banner);
      
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });

   
  }, [])

  useEffect(() => {
    fetch(`${API_DOMAIN}/products.php`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        "search_text": ""
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        const initialProducts = data.body.products.map(product => ({
            ...product,
            qty: 0 // Initialize qty to 0 for each product
          }));
      
      setProducts(initialProducts);
      
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);
  useEffect(() => {
    fetch(`${API_DOMAIN}/products.php`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        "search_text": ""
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setcatgory(data.body.category);
      
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);
  

  const updateQuantity = (id, delta) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQty = Math.max(product.qty + delta, 0);

        return { ...product, qty: newQty };
      }
      return product;
    }));
  };

  const handleQuantityChange = (productId, newQty, discount) => {
    console.log('newQty before processing:', newQty);
    
    // Ensure newQty is treated as a string for leading zero check
    let qtyString = newQty.toString(); // Ensure it's treated as a string
  
    // If the input becomes empty (due to backspace), set it to 1 instead of letting it become empty or 0
    if (qtyString === "" || qtyString === null) {
      removeFromCart(productId);
      setProducts(products.map(product => {
        if (product.id === productId) {
          return { ...product, qty: 0 }; // Reset to 0 if backspace leads to empty value
        }
        return product;
      }));
      return; // Prevent further execution, we handled the case of empty input
    }
  
    // Check for leading zeros and remove them if necessary
    if (qtyString.startsWith("0") && qtyString.length > 1) {
      qtyString = qtyString.replace(/^0+/, ''); // Remove leading zeros
      console.log('newQty after removing leading zeros:', qtyString);
    }
  
    // Parse the cleaned string as a number
    const qty = parseInt(qtyString, 10);
  
    // Ensure the parsed qty is a valid number and not negative
    if (!isNaN(qty) && qty >= 0) {
      // Update the quantity in the products array
      setProducts(products.map(product => {
        if (product.id === productId) {
          return { ...product, qty };  // Update the quantity for the matching product
        }
        return product;  // Keep other products unchanged
      }));
  
      if (qty === 0) {
        // If the quantity is 0, remove the product from the cart
        removeFromCart(productId);
      } else {
        // Otherwise, update the cart with the new quantity and discount logic
        addToCartFromInput(productId, qty, discount);
      }
    }
  };
  
  
  

  
  
  // Modify your addToCart function to handle quantity updates from the input field
  const addToCartFromInput = (productId, qty,dis) => {
    // Find the product in the products array
    const productToAdd = products.find(product => product.id === productId);
    console.log('productToAdd',productToAdd);
    console.log('qty',qty);
    if (productToAdd) {

      const initialTotalPrice = calculateTotalPrice(Math.round(productToAdd.price), qty, dis, productToAdd.discount_lock);
      console.log('initialTotalPrice',initialTotalPrice);
      const initialOverallTotal = calculateOverallTotalPrice(Math.round(productToAdd.price), qty);
      
      const existingItemIndex = cart.findIndex(item => item.id === productId);
      
      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        const updatedTotalPrice = calculateTotalPrice(Math.round(productToAdd.price), qty, dis, productToAdd.discount_lock);
        const overallTotal = calculateOverallTotalPrice(Math.round(productToAdd.price), qty);
        if (qty > 0) {
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            qty: qty,
            total_price: Math.round(updatedTotalPrice),
            overallin: Math.round(overallTotal)
          };
        } else {
          // Remove item from cart if qty is 0
          updatedCart.splice(existingItemIndex, 1);
        }
        setCart(updatedCart);
      } else {
        if (qty > 0) {
          const newCartItem = {
            id: productToAdd.id,
            name: productToAdd.product_name,
            product_name: productToAdd.product_name,
            qty: qty,
            discount: dis,
            discount_lock: productToAdd.discount_lock,
            total_price: Math.round(initialTotalPrice),
            overallin: Math.round(initialOverallTotal),
            per_price:
              productToAdd.discount_lock !== null && productToAdd.discount_lock === 0
                ? (
                  Math.round(productToAdd.price -
                    (productToAdd.price * dis) / 100)
                  )
                : Math.round(productToAdd.price),
            product_content: productToAdd.product_content,
            img: productToAdd.img || null,
          };
          setCart([...cart, newCartItem]);
        }
      }
    }
  };
  
  // Modify your calculateTotalPrice function if necessary
  const calculateTotalPrice = (price, quantity, discountPercent, discount_lock) => {
    console.log('discountPercent',discountPercent);
    console.log('price',price);
    console.log('quantity',quantity);
    console.log('discount_lock',discount_lock);
    let totalAmount = 0;
    if (discount_lock === 1) {
      totalAmount = (Math.round(price) * quantity).toFixed(2);
    } else {
      const discountedPrice = Math.round(price) - (Math.round(price) * (discountPercent / 100));
      totalAmount = (Math.round(discountedPrice) * quantity).toFixed(2);
    }
    console.log('totalAmount',totalAmount);
    return totalAmount;
  };
  
  const calculateOverallTotalPrice = (price, quantity) => {
    return (Math.round(price) * quantity).toFixed(2);
  };
  
  const addToCart = (productToAdd) => {
    console.log('productToAdd',productToAdd)
    const initialTotalPrice = calculateTotalPrice(productToAdd.total_price, productToAdd.qty, productToAdd.discount,productToAdd.discount_lock);
    const initialoverallTotal = calculateoverallTotalPrice(productToAdd.total_price, productToAdd.qty);
    
    const existingItemIndex = cart.findIndex(item => item.id === productToAdd.id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemIndex];

      if(productToAdd.action === "minus"){
        const newQty = existingItem.qty - 1;
        if (newQty > 0) {
        const updatedTotalPrice = calculateTotalPrice(productToAdd.total_price, newQty, productToAdd.discount,productToAdd.discount_lock);
        const overallTotal = calculateoverallTotalPrice(productToAdd.total_price, newQty);
       
        updatedCart[existingItemIndex] = {
          ...existingItem,
          qty: existingItem.qty - 1,
          total_price: updatedTotalPrice,
          overallin : overallTotal 
        };
        setCart(updatedCart);
      } else {
        removeFromCart(productToAdd.id);
      }              
      }else{
  
      const updatedTotalPrice = calculateTotalPrice(productToAdd.total_price, existingItem.qty + 1, productToAdd.discount,productToAdd.discount_lock);
      const overallTotal = calculateoverallTotalPrice(productToAdd.total_price, existingItem.qty + 1);
      updatedCart[existingItemIndex] = {
        ...existingItem,
        qty: existingItem.qty + 1,
        total_price: updatedTotalPrice,
        overallin : overallTotal 
      };
      setCart(updatedCart);
    }
    } else {
      const newCartItem = {
        id: productToAdd.id,
        name: productToAdd.name,
        product_name:productToAdd.name,
        qty: productToAdd.qty,
        discount:productToAdd.discount,
        discount_lock :productToAdd.discount_lock,
        total_price: initialTotalPrice,
        overallin : initialoverallTotal,
        per_price : productToAdd.per_price,
        product_content : productToAdd.product_content,
        img :productToAdd.img
      };
      setCart([...cart, newCartItem]);
    }
  };
  
  const calculateoverallTotalPrice =(price,quantity) =>{
    return  (price * quantity).toFixed(2);
  }
  // const calculateTotalPrice = (price, quantity, discountPercent,discount_lock) => {
  //   let totaldisamount = 0;
  //   if(discount_lock === 1){
  //     totaldisamount = (price * quantity).toFixed(2);
  //   }else{
  //     const discountedPrice = price - (price * (discountPercent / 100));
  //     totaldisamount = (discountedPrice * quantity).toFixed(2);
  //   }
  //  return totaldisamount;
  // };
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleShow = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
    setShow(true); // Show the modal
  };
  const handleClose = () => {
    setShow(false); // Hide the modal
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.id === productId) {
            return { ...product, qty: 0 }; // Reset quantity to 0
          }
          return product;
        })
      );
  };
  const totals = calculateTotals(cart);
  return (
  //   <CardThree
  //   products={products}
  //   category ={category}
  //   totals={totals}
  //   updateQuantity={updateQuantity}
  //   handleShowCart={handleShowCart}
  //   handleCloseCart={handleCloseCart}
  //   showCart={showCart}
  //   handleShow={handleShow}
  //   selectedProduct={selectedProduct}
  //   handleClose={handleClose}
  //   show={show}
  //   setShowVideoModal={setShowVideoModal}
  //   showVideoModal ={showVideoModal}
  //   removeProduct={removeFromCart}
  //   addToCart ={addToCart}
  //   companydata ={companydata}
  //   cart={cart}
  //  setCart={setCart}
  //   districtData={districtData}
  //    setting ={setting}
  //    banner={banner}
  //   />
    <CardFour
    products={products}
    category ={category}
    totals={totals}
    updateQuantity={updateQuantity}
    handleShowCart={handleShowCart}
    handleCloseCart={handleCloseCart}
    showCart={showCart}
    handleShow={handleShow}
    selectedProduct={selectedProduct}
    handleClose={handleClose}
    companydata ={companydata}
    show={show}
    setCart={setCart}
    setShowVideoModal={setShowVideoModal}
    showVideoModal ={showVideoModal}
    removeProduct={removeFromCart}
    addToCart ={addToCart}
    cart={cart}
    districtData={districtData}
    setting={setting}
    banner={banner}
    handleQuantityChange={handleQuantityChange}
    />
    //  <ProductCardTwo
    //   products={products}
    //   category ={category}
    //   totals={totals}
    //   updateQuantity={updateQuantity}
    //   handleShowCart={handleShowCart}
    //   handleCloseCart={handleCloseCart}
    //   showCart={showCart}
    //   handleShow={handleShow}
    //   selectedProduct={selectedProduct}
    //   handleClose={handleClose}
    //   show={show}
    // companydata ={companydata}
    //   setShowVideoModal={setShowVideoModal}
    //   showVideoModal ={showVideoModal}
    //   removeProduct={removeFromCart}
    //   addToCart ={addToCart}
    //   cart={cart}
    // setCart={setCart}
    //   districtData={districtData}
    // setting ={setting}
    //  banner={banner}
    // /> 
    // <CardOne
      // products={products}
      // category ={category}
      // totals={totals}
      // updateQuantity={updateQuantity}
      // handleShowCart={handleShowCart}
      // handleCloseCart={handleCloseCart}
      // showCart={showCart}
      // handleShow={handleShow}
      // selectedProduct={selectedProduct}
      // handleClose={handleClose}
      // companydata ={companydata}
      // show={show}
      // setCart={setCart}
      // setShowVideoModal={setShowVideoModal}
      // showVideoModal ={showVideoModal}
      // removeProduct={removeFromCart}
      // addToCart ={addToCart}
      // cart={cart}
      // districtData={districtData}
      // setting={setting}
      // banner={banner}
    // />
  );
};

export default ProductController;
