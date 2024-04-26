import React from "react";
import AboutUsCounter from "../../common/AboutUsCounter";

import WhyCHooseUs from "../howItWork/WhyCHooseUs";
import AboutTestimonial from "./AboutTestimonial";
import WhoWeAreArea from "./WhoWeAreArea";
import AboutHead from "./AboutHead";


function About() {
  return (
    <>
      <AboutHead  />
      <WhoWeAreArea />
      <WhyCHooseUs />
      
      <AboutUsCounter />
    </>
  );
}

export default About;
