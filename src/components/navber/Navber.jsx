import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../shared/Container";
import logo from "../../assets/images/logo.png";
import Dropdwon from "../shared/Dropdwon";
import { FaAngleDown } from "react-icons/fa";
import List from "../shared/List";
import Listitem from "../shared/Listitem";

const Navber = () => {
  const [lanDrop, setLanDrop] = useState(false);
  const lanRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (lanRef.current.contains(e.target)) {
        setLanDrop(true);
      } else {
        setLanDrop(false);
      }
    });
  }, []);
  return (
    <nav className="navmain active">
      <Container>
        <div className=" navber flex items-center gap-x-12 py-5">
          <div>
            <Link to="#">
              <img src={logo} />
            </Link>
          </div>
          <div className="flex w-[100%] items-center justify-between">
            <List className="flex items-center justify-center gap-x-8 font-poppins text-xl font-medium text-black ">
              <Listitem className="hover:text-primary" itemname="Home" />
              <Listitem
                className="hover:text-primary"
                itemname="Our Property"
              />
              <Listitem className="hover:text-primary" itemname="Agent" />
              <Listitem className="hover:text-primary" itemname="Blog" />
            </List>
            <div className="flex gap-x-8">
              <Dropdwon
                title="Eng"
                dropRef={lanRef}
                className="relative flex cursor-pointer items-center gap-x-5 font-poppins text-xl font-medium text-black"
              >
                <FaAngleDown />
                {lanDrop && (
                  <List className="absolute top-9 right-[3px] w-[150px] bg-primary z-10 ">
                    <Listitem
                      className="w-full py-3 px-3 text-center font-poppins text-base font-medium hover:bg-secondary hover:text-white"
                      itemname="Eng"
                    />
                    <Listitem
                      className="w-full py-3 px-3 text-center font-poppins text-base font-medium hover:bg-secondary hover:text-white"
                      itemname="USA"
                    />
                    <Listitem
                      className="w-full py-3 px-3 text-center font-poppins text-base font-medium hover:bg-secondary hover:text-white"
                      itemname="Ind"
                    />
                    <Listitem
                      className="w-full py-3 px-3 text-center font-poppins text-base font-medium hover:bg-secondary hover:text-white"
                      itemname="Ban"
                    />
                  </List>
                )}
              </Dropdwon>
              <button className="rounded-lg bg-primary py-2 px-2.5 text-white hover:bg-black">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
