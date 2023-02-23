import React from "react";
import Container from "../shared/Container";
import "./header.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main w-full bg-primary py-3">
      <Container>
        <div className="header flex items-center justify-between font-poppins font-semibold text-sm ">
          <h3>youremail@gmail.com</h3>
          <div className="flex items-center gap-x-5">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaLinkedinIn />
            </Link>
            <Link to="#">
              <SlSocialInstagram />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
