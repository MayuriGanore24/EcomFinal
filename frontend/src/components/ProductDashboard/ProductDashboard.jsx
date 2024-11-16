import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import AddProducts from "../AddProducts/AddProducts";
import "./ProductDashboard.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { all } from "axios";
import { Link } from "react-router-dom";

const ProductDashboard = ({
  product,
  handleaddtocart,
  addToCart,
  removeFromCart,
  updateProductList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleAddProduct = (newProduct) => {
    updateProductList((prevProducts) => [...prevProducts, newProduct]);
    setShowAddProduct(false);
  };

  const closeModal = () => {
    setShowAddProduct(false);
  };

  // const filteredProducts = products.filter((product) =>
  //   product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const sortedProducts = filteredProducts.sort((a, b) => {
  //   if (sortOption === "price-asc") {
  //     return a.price - b.price;
  //   } else if (sortOption === "price-desc") {
  //     return b.price - a.price;
  //   } else if (sortOption === "name-asc") {
  //     return a.productName.localeCompare(b.productName);
  //   } else if (sortOption === "name-desc") {
  //     return b.productName.localeCompare(a.productName);
  //   }
  //   return 0;
  // });

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     // fetch("https://api.pujakaitem.com/api/products")
  //     // fetch("http://localhost:8085/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setProduct(data);
  //     });
  // }, []);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setMaxPrice(value);
  };
  // *****************************************
  // Cart Item try
  // const handleaddtocart = (products) => {
  //   console.log(products);
  // };

  return (
    <div className="product-container">
      {/* <div className="search-bar" tabIndex={0}>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div> */}
      {/* Just Trying Things */}
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" class="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      {/* //hel ya */}
      <div className="controls">
        {/* Our Slider  */}
        <div class="slidecontainer">
          <p className="Slider_text">
            Price Slider:- {minPrice}-{maxPrice}:
          </p>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handlePriceChange}
          />
        </div>
        {/* Our Slider close */}

        {/* <select value={sortOption} onChange={handleSortChange}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select> */}

        {/* <button
          className="update-product-list"
          onClick={() => {
            updateProductList();
          }}
        >
          Update Product List
        </button> */}
      </div>

      <div className="product-list">
        {/* {sortedProducts.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))} */}
        {/* Products MIn */}
        <div className="product-card">
          <div class="grid-container">
            {product
              .filter((products) => {
                return searchQuery.toLowerCase() == ""
                  ? products
                  : products.category.toLowerCase().includes(searchQuery);
              })
              .filter((products) => {
                return products.price >= minPrice && products.price <= maxPrice;
              })

              .map((products) => (
                <div class="card" key={products.id}>
                  <div className="content">
                    <img src={products.image} alt={products.name} />
                    <h1 className="product_title"> {products.title}</h1>
                    <h2>Price:- {products.price}</h2>

                    <div class="title">{products.description}</div>
                    <div className="button_cart">
                      <button onClick={() => handleaddtocart(products)}>
                        Add to Cart
                      </button>
                      <Link to={`/single_page/${products.id}`}>
                        <button>View Product</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Product close */}
      </div>
      {showAddProduct && (
        <AddProducts addProduct={handleAddProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProductDashboard;
