/* eslint-disable no-unused-vars */
import React from 'react'
import "./Footer.css"
import facebook_icon from "../Assets/facebook_icon.png"
import twitter_icon from "../Assets/twitter_icon.png"
import linkedin_icon from "../Assets/linkedin_icon.png"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">

        <div className="footer-social-icons">
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon } alt="" />
            <img src={linkedin_icon } alt="" />
        </div>
        </div>
        <div className="footer-content-right">
            {/* <h2>Contact Us </h2> */}
            <ul>
                {/* <li><b>Phone </b> <span></span>+91 7276867899</li> */}
                <li><b>contact</b> <span>@ShreeGajananTechnologies.com</span></li>
            </ul>
        </div>      
      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright 2024- All rights reserved @ShreeGajananTechnologies.com</p>
    </div>
  )
}

export default Footer
