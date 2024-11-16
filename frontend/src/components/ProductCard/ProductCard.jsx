import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
        <img
          src={product.picture_url}
          alt={product.name}
          className="product-image"
        />
      <p style={{color:'white'}}>{product.productName}</p>
      <p>Rs{product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
