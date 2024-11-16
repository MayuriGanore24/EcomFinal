import React from 'react';
import './OrderHistory.css';

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h2>Order History</h2>
      <div className="order-items">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div>Order ID: {order.id}</div>
            <div>Date: {order.date}</div>
            <div>Total: ${order.total}</div>
            <div>
              {order.items.map(item => (
                <div key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
