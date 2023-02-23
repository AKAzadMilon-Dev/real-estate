import React from "react";
import Container from "../../components/shared/Container";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiIsland } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";

const PropertyType = () => {
  return (
    <div className="py-24">
      <Container>
        <div>
          <ul className="mb-1 flex w-[439px] items-center justify-between px-6 shadow-md rounded-md outline-none">
            <li className="Hover:border-solid flex w-[32%] cursor-pointer justify-center py-6 duration-300 font-poppins font-medium text-base hover:bg-secondary hover:font-semibold hover:text-primary">
              Buy
            </li>
            <li className="Hover:border-solid flex w-[32%] cursor-pointer justify-center py-6 duration-300 font-poppins font-medium text-base hover:bg-secondary hover:font-semibold hover:text-primary">
              Sell
            </li>
            <li className="Hover:border-solid flex w-[32%] cursor-pointer justify-center py-6 duration-300 font-poppins font-medium text-base hover:bg-secondary hover:font-semibold hover:text-primary">
              Udwell Now
            </li>
          </ul>
        </div>
        <div className="flex w-full items-center justify-between p-9 shadow-md rounded-md">
          <div className="w-[32%]">
            <div className="flex items-center gap-x-4">
              <GoLocation className="w-5 h-6 text-txColor" />
              <h3 className="font-poppins font-semibold text-2xl text-txColor">Location</h3>
            </div>
            <div className="flex items-center gap-x-2 mt-2 ml-9">
              <p className="font-poppins font-medium text-base text-txColor">Add location</p>
              <TfiAngleDown className="w-4 h-3 text-txColor" />
            </div>
          </div>
          <div className="w-[32%]">
            <div className="flex items-center gap-x-4">
              <GiIsland className="w-5 h-6 text-txColor" />
              <h3 className="font-poppins font-semibold text-2xl text-txColor">Property types</h3>
            </div>
            <div className="flex items-center gap-x-2 mt-2 ml-9">
              <p className="font-poppins font-medium text-base text-txColor">Condols</p>
              <TfiAngleDown className="w-4 h-3 text-txColor" />
            </div>
          </div>
          <div className="w-[32%]">
            <div className="flex items-center gap-x-4">
              <MdOutlinePriceChange className="w-5 h-6 text-txColor" />
              <h3 className="font-poppins font-semibold text-2xl text-txColor">Max price</h3>
            </div>
            <div className="flex items-center gap-x-2 mt-2 ml-9">
              <p className="font-poppins font-medium text-base text-txColor">560 USD</p>
              <TfiAngleDown className="w-4 h-3 text-txColor" />
            </div>
          </div>
          <button className="p-7 bg-primary rounded-md hover:bg-secondary">
            <BsSearch className="text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PropertyType;
