import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./single_page.css";
import ReactImageMagnify from "react-image-magnify";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const Single_Page = ({ handleaddtocart }) => {
  const { id } = useParams();
  const [singleproduct, setSingleProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      // fetch("https://api.pujakaitem.com/api/products")
      // fetch("http://localhost:8085/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSingleProduct(data);
      });
  }, [id]);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded image_single"
              src={singleproduct.image}
            /> */}
            <div style={{ width: "342px", height: "513px" }}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: singleproduct.image,
                  },
                  largeImage: {
                    src: singleproduct.image,
                    width: 400,
                    height: 700,
                  },
                }}
              />
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {singleproduct.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleproduct.title}
              </h1>

              <p className="leading-relaxed">{singleproduct.description}</p>

              <div className="flex cart_single  mt-2">
                <span className="title-font font-medium text-2xl text-gray-900">
                  RS- {singleproduct.price}
                </span>
                <button
                  onClick={() => handleaddtocart(singleproduct)}
                  className=" flex ml-auto  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single_Page;
