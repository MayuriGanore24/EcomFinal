import React from 'react';
import './Wishlist.css';

const Wishlist = ({ wishlist, addToCart, removeFromWishlist }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlist.map(item => (
          <div key={item.id} className="wishlist-item">
            <div>{item.name}</div>
            <div>${item.price}</div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
