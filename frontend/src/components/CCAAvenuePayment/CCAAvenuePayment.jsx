import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CCAvenuePayment = ({ cart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const initiateCCAPayment = async () => {
      try {
        const response = await fetch("/api/ccavenue/initiate-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart,
          }),
        });

        const data = await response.json();

        if (data.success) {
          window.location.href = data.paymentUrl;
        } else {
          console.error("Payment initiation failed:", data.message);
          navigate("/cart");
        }
      } catch (error) {
        console.error("Error initiating payment:", error);
        navigate("/cart");
      }
    };

    initiateCCAPayment();
  }, [cart, navigate]);

  return (
    <div>
      <h2>Redirecting to CCAvenue...</h2>
    </div>
  );
};

export default CCAvenuePayment;
