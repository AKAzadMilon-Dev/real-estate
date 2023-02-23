import React from "react";

const Heading = ({ title, className }) => {
  return (
    <div className="mt-16 font-poppins text-4xl font-bold text-txColor w-full justify-center flex">
      {title}
    </div>
  );
};

export default Heading;
