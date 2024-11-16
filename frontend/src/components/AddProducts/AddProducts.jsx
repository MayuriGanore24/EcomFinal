import React, { useState } from "react";
import "./AddProducts.css";

const AddProducts = ({ addProduct, closeModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && description && pictureUrl) {
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        description,
        picture_url: pictureUrl,
      };
      addProduct(newProduct);
      setName("");
      setPrice("");
      setDescription("");
      setPictureUrl("");
      closeModal();
    }
  };

  return (
    <div className="add-product-modal">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Add New Product</h2>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input
            type="number"
            id="productPrice"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description</label>
          <textarea
            id="productDescription"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pictureUrl">Picture URL</label>
          <input
            type="text"
            id="pictureUrl"
            placeholder="Enter picture URL"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
