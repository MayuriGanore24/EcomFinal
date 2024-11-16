import React, { useState, useEffect } from "react";
import "../Cart_Testing/cart_test.css";
import { Link } from "react-router-dom";

const Cart_Test = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0) tempArr[ind].quantity = 1;
    setCart([...tempArr]);
  };
  return (
    <>
      <article>
        {
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.image} />
                  <p>{item.title}</p>
                </div>
                <div>
                  <button onClick={() => handleChange(item, +1)}> + </button>
                  <button>{item.quantity}</button>
                  <button onClick={() => handleChange(item, -1)}> - </button>
                </div>
                <div>
                  <span>{item.price}</span>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        }
        <div className="total">
          <span>Total Price of your Cart</span>
          <button className="btn btn-danger" style={{ marginTop: "0px" }}>
            Rs :{price.toFixed(2)}
          </button>
          <Link to="/Checkout">
            <button style={{ marginTop: "0px" }}>Checkout</button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Cart_Test;
