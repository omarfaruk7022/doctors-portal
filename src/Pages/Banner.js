import React from "react";
import image from "../assets/images/chair.png";
import PrimaryButton from "./PrimaryButton";
import bg from "../assets/images/bg.png";

const Banner = () => {
  return (
    <div style={{ background: `url(${bg})` }}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mt-28">
          <img
            src={image}
            className="max-w-sm  rounded-lg shadow-2xl "
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
