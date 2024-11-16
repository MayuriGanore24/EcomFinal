import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductDashboard from "./components/ProductDashboard/ProductDashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Cart from "./components/Cart/cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import CCAvenuePayment from "./components/CCAAvenuePayment/CCAAvenuePayment";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.jsx";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Review from "./components/Review/Review.jsx";
import { Navigate } from "react-router-dom";

import Cart_Test from "./components/Cart_Testing/Cart_Test.jsx";
import Single_Page from "./components/Cart/Single_Page/Single_Page.jsx";
import Help from "./components/Help/component.jsx";
import Sucess from "./components/Sucess/Sucess.jsx";
import Cancel from "./components/Cancel/Cancel.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8085/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);
      setProducts(data); // Assuming data is an array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productId === product.productId
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  };

  
  const handleCheckout = () => {
    console.log("Order placed", cart);
    setCart([]);
  };

  const updateProductList = () => {
    fetchProducts(); // Call fetchProducts to refresh the product list
  };

  const calculateItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handleUserUpdate = (userData) => {
    setUser(userData);
    navigate("/profile");
  };
  // **************************************************************************************
  // Cart Item Try
  const [product, setProduct] = useState([]);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // fetch("https://api.pujakaitem.com/api/products")
      // fetch("http://localhost:8085/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  const handleaddtocart = (products) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (products.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    if (isPresent == false) {
    }
    setCart([...cart, { ...products, quantity: 1 }]);
    console.log(products);
    console.log(cart);
  };

  return (
    <div className="app">
      <Navbar cartCount={calculateItemCount()} size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginSignup onUserUpdate={handleUserUpdate} user={user} />}
        />
        <Route
          path="/products"
          element={
            <ProductDashboard
              product={product}
              handleaddtocart={handleaddtocart}
              addToCart={addToCart}
              updateProductList={updateProductList}
            />
          }
        />
        <Route
          path="/cart_test"
          element={
            <Cart_Test
              cart={cart}
              setCart={setCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              // handleChange={handleChange}
            />
          }
        />
        <Route
          path="/single_page/:id"
          element={<Single_Page handleaddtocart={handleaddtocart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          }
        />
        <Route path="/single_page" element={Single_Page} />
        <Route
          path="/checkout"
          element ={<Checkout cart={cart}/>}
        />
        <Route
          path="/ccavenue-payment"
          element={<CCAvenuePayment cart={cart} />}
        />
        <Route
          path="/profile"
          element={
            user ? <ProfileComponent user={user} /> : <Navigate to="/login" />
          }
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/help" element={<Help />} />
        <Route path="/sucess" element={<Sucess/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Routes>
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
      <Footer />
      {/* <p>Learn React</p> Add this line temporarily */}
    </div>
  );
};

export default App;
