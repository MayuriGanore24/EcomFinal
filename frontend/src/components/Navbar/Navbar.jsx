// import React , {useState} from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBox,
//   faShoppingCart,
//   faSignInAlt,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";
// const Navbar = ({ cartCount, size }) => {
//   const liveChat = () => {
//     console.log("helo");
//     window.open("http://localhost:5173/", "_blank") ||
//       window.location.assign("http://localhost:5173/");
//   };
//   return (
//     <nav className="navbar">
    // <img src="https://img1.wsimg.com/isteam/ip/7ffb00db-210e-43d1-a8d6-23fe463127a3/logo.PNG/:/" alt="eCommerce Logo" class="navbar-logo"></img>
//       <input type="checkbox" id="nav-toggle" className="nav-toggle" />
//       <label htmlFor="nav-toggle" className="nav-toggle-label">
//         <span></span>
//         <span></span>
//         <span></span>
//       </label>
//       <div className="links">
//         <Link to="/">
//           <FontAwesomeIcon icon={faHome} />
//           <span className="spacing">Home</span>
//         </Link>
//         <Link to="/products">
//           <FontAwesomeIcon icon={faBox} />
//           <span className="spacing">Products</span>
//         </Link>
//         {/* <Link to="/cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//           <span className="spacing">Cart</span>
//           {cartCount > 0 && <span className="cart-count ">{cartCount}</span>}
//         </Link>
//          */}
//         <Link to="/login">
//           <FontAwesomeIcon icon={faSignInAlt} />
//           <span className="spacing">Login</span>
//         </Link>
//         <Link to="/profile">
//           <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
//         </Link>
//         <Link to="/reviews">
//           <FontAwesomeIcon icon={faUser} /> <span>Reviews</span>
//         </Link>
//         {/* <Link to="/modal">
//           <FontAwesomeIcon icon={faUser} /> <span>Modal</span>
//         </Link> */}
//         <Link to="/cart_test">
//           <FontAwesomeIcon icon={faShoppingCart} />
//           <span className="cart-count">{size}</span>
     // </Link>
//         <Link target="__block">
//           <button className="live_chat" onClick={liveChat}>Live Chat</button>
//         </Link>
//         {/* <Link to="/single_page">
//           <span className="spaceing">Single Page</span>
//         </Link> */}
//       </div>
//     </nav>
//   );
// };

//export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBox, faShoppingCart, faSignInAlt, faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggles the dropdown open/close state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Closes the dropdown on link click
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const liveChat = () => {
       console.log("helo");
       window.open("http://localhost:5173/", "_blank") ||
          window.location.assign("http://localhost:5173/");
      };

  return (
    <nav className="navbar">
      <img src="https://img1.wsimg.com/isteam/ip/7ffb00db-210e-43d1-a8d6-23fe463127a3/logo.PNG/:/" alt="eCommerce Logo" class="navbar-logo mr-auto"></img>
      <div className="links">
        {/* Dropdown on the left (new position) */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faHome} />
          
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </button>

          {/* Dropdown menu content */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <Link className="d-flex justify-content-center" to="/" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faHome} />
              <span className="spacing">Home</span>
            </Link>
            <Link  className="d-flex justify-content-center" to="/products" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faBox} />
              <span className="spacing">Products</span>
            </Link>
            
            
            <Link  className="d-flex justify-content-center" to="/login" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faSignInAlt} />
              <span className="spacing">Login</span>
            </Link>
            <Link  className="d-flex justify-content-center" to="/profile" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faUser} />
              <span className="spacing">Profile</span>
            </Link>
            <Link   className="d-flex justify-content-center" to="/reviews" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faUser} />
              <span className="spacing">Reviews</span>
            </Link>
          </div>
        </div>

        {/* Cart icon (new position) */}
        <div className="cart-container">
          <Link to="/cart_test">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {/* Always display the count, even when it's 0 */}
            <span className="cart-count">{cartCount}</span>
          </Link>
          <Link target="__block">
           <button className="live_chat" onClick={liveChat}>Live Chat</button>
    </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

