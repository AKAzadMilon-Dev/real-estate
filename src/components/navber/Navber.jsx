import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import logo from "../../assets/images/logo.png";
import Dropdwon from "../shared/Dropdwon";
import { FaAngleDown } from "react-icons/fa";
import List from "../../layout/List";
import Listitem from "../../layout/Listitem";

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
    <nav>
      <Container>
        <div className=" navber flex items-center gap-x-12 py-5">
          <div>
            <Link to="#">
              <img src={logo} />
            </Link>
          </div>
          <div className="flex w-[100%] items-center justify-between">
            <List className="flex items-center justify-center gap-x-6 text-white">
              <Listitem itemname="Home" />
              <Listitem itemname="Our Property" />
              <Listitem itemname="Agent" />
              <Listitem itemname="Blog" />
            </List>
            <div className="flex gap-x-8">
              <Dropdwon
                title="Eng"
                dropRef={lanRef}
                className="relative flex cursor-pointer items-center gap-x-5 text-white "
              >
                <FaAngleDown />
                {lanDrop && (
                  <List className="absolute top-9 right-[3px] w-[150px] bg-black py-3 px-5 ">
                    <Listitem
                      className="w-full hover:bg-slate-400"
                      itemname="Eng"
                    />
                    <Listitem
                      className="w-full hover:bg-slate-400"
                      itemname="USA"
                    />
                    <Listitem
                      className="w-full hover:bg-slate-400"
                      itemname="Ind"
                    />
                    <Listitem
                      className="w-full hover:bg-slate-400"
                      itemname="Ban"
                    />
                  </List>
                )}
              </Dropdwon>
              {/* <option className="bg-none">
                <option value="">Eng</option>
              </option> */}
              <button className="rounded-lg bg-black py-2 px-2.5 text-white">
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
