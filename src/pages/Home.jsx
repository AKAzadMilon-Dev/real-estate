import React from "react";
import Banner from "../layout/banner/Banner";
import PropertyType from "../layout/propertytype/PropertyType";
import Service from "../layout/service/Service";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
        <PropertyType />
      </div>
      <Service />
    </div>
  );
};

export default Home;
