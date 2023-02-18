import React from "react";
import Container from "../../components/shared/Container";
import bannerleft from "../../assets/images/bannerleft.png";
import homevector from "../../assets/images/homevector.png";
import bannerimg from "../../assets/images/bannerimg.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="flex w-[100%] items-center">
          <div className="relative w-[50%]">
            <img src={bannerleft} alt="bannerleft" />
            <img
              className="absolute bottom-0 right-[211px]"
              src={homevector}
              alt="homevector"
            />
            <div className="absolute top-[-19px] left-[-18px]">
              <div className="round-shape"></div>
            </div>
          </div>
          <div className=" w-[50%]">
            <img className="flex justify-end" src={bannerimg} alt="bannerimg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
