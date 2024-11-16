import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { useEffect,useState } from 'react';

const Checkout = ({cart}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const makePayment = async () => {
    console.log("Payment");

    const stripe = await loadStripe(
      "pk_test_51PwiCJP1l3q7TQO1VK8wkP9SEurXcmdU1JS2JSgzWsstd3sApoM3j0BiInipDnkNurBoxWOm4FwiOcbzYJNTJjND00UIaR2IrL"
    );
    const body = {
      product: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:8000/api/create-Checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
    
  }
  return (
    <>
    <div className="container text-start p-3">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group p-3">
                  <label for="FirstName" className="mb-2">
                    First Name
                  </label>
                  <input type="text" class="form-control" id="firstname_text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group p-3">
                  <label for="LastName" className="mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lirstname_text"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group p-3">
                  <label for="FirstName" className="mb-2">
                    Phone Number
                  </label>
                  <input type="text" class="form-control" id="firstname_text" />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group p-3">
                  <label for="LastName" className="mb-2">
                    E-mail
                  </label>
                  <input type="text" class="form-control" id="lirstname_text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group p-3">
                  <label for="FirstName" className="mb-2">
                    Pin Code
                  </label>
                  <input type="text" class="form-control" id="firstname_text" />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group p-3">
                  <label for="LastName" className="mb-2">
                    City
                  </label>
                  <input type="text" class="form-control" id="lirstname_text" />
                </div>
              </div>
            </div>
            <div className="row p-3">
              <div class="mb-3 ">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Shipping Address
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              {cart.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td>
                      <img src={item.image} style={{ width: "4rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>

                    <td></td>
                  </tr>
                </tbody>
              ))}
            </table>
            <button class="btn btn-primary ms-3">Total Price - {price}</button>
            <button
              class="btn btn-danger ms-3"
              type="button"
              onClick={makePayment}
            >
              Complete Payment
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Checkout
