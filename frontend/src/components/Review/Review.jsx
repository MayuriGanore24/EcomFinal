import React, { useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Review = ({ cartCount }) => {
  return (
    <>
      <h1 className="header_top">Review From Customers</h1>
      <div className="display_align">
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
      </div>{" "}
      <div className="display_align">
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
      </div>{" "}
      <div className="display_align">
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
        <div class="card">
          <div className="content">
            <h1>User Name</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon icon={faStar} className="font_awsesome_color" />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="font_awsesome_color"
              />
            </div>
            <div class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* <div>
              <button>Contact</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
