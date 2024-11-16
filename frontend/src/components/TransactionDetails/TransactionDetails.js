import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./TransactionDetails.css";

const TransactionDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState({
    transactionId: "",
    orderId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.get('/transaction');
        setTransactionDetails(response.data);
      } catch (error) {
        console.error("Error fetching transaction details:", error);
      }
    };

    fetchTransactionDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionDetails({ ...transactionDetails, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      await axios.put('/transaction', transactionDetails);
    } catch (error) {
      console.error("Error saving transaction details:", error);
    }
  };

  return (
    <div className="profile-container">
      {isEditing ? (
        <div className="profile-form">
          <input
            name="transactionId"
            value={transactionDetails.transactionId}
            onChange={handleChange}
            placeholder="Transaction ID"
          />
          <input
            name="orderId"
            value={transactionDetails.orderId}
            onChange={handleChange}
            placeholder="Order ID"
          />
          <input
            name="username"
            value={transactionDetails.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            name="firstName"
            value={transactionDetails.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={transactionDetails.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            name="email"
            value={transactionDetails.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="phone"
            value={transactionDetails.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="profile-details">
          <p>Transaction ID: {transactionDetails.transactionId}</p>
          <p>Order ID: {transactionDetails.orderId}</p>
          <p>Username: {transactionDetails.username}</p>
          <p>First Name: {transactionDetails.firstName}</p>
          <p>Last Name: {transactionDetails.lastName}</p>
          <p>Email: {transactionDetails.email}</p>
          <p>Phone: {transactionDetails.phone}</p>
          <button onClick={handleEditClick}>Edit Transaction Details</button>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
