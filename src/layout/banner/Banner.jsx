import React from "react";
import bannerleft from "../../assets/images/bannerleft.png";
import "./banner.css";
import bannervideo from "../../assets/videos/bannervideo.mp4";

const Banner = () => {
  return (
    <div className="body">
      <video src={bannervideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="banner-container">
        <div className="bannertop flex w-[100%] items-center justify-center">
          <div className="relative">
            <div>
              <img src={bannerleft} alt="bannerleft" />
              <div className="absolute top-[-19px] left-[-18px]">
                <div className="round-shape"></div>
              </div>
            </div>
            <div className="flex w-[525px] flex-col">
              <p className="mt-12 font-poppins text-xl font-medium text-yellow-200 ">
                We are real estate agency that will help you find the best
                residence you dream of, let’s discuss for your
              </p>
              <button className=" btn font-regular mt-8 rounded-md border border-solid border-white p-4 font-poppins text-base text-white hover:border-primary hover:bg-primary hover:font-bold">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
