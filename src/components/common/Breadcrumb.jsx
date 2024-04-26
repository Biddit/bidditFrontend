import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/bg/banner-bg1.png";
function Breadcrumb(props) {
  return (
    <>
      {/* <div className="inner-banner">
        <div className="container">
          <h2 className="inner-banner-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">{props.pageName}</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{props.pageTitle}</li>
            </ol>
          </nav>
        </div>
      </div> */}
      <div className="relative h-screen">
        <img
          src={logo}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#210D42] via-[#210D42]/80 to-[#f57d1f] opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pl-8 text-white">
            <div className="border-l-[#f57d1f] border-l-[4px]  pl-3 ">
              <h1 className="text-5xl leading-2   font-bold mb-4">
               {props.pageName}
              </h1>
              
            </div>
            
            {/* <div className="flex justify-start space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Bid Now
              </button>
              <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb