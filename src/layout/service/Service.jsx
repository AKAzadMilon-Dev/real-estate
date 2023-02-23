import React, { useState } from "react";
import Container from "../../components/shared/Container";
import { GiSpookyHouse } from "react-icons/gi";
import { motion } from "framer-motion";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-24">
      <Container>
        <div className="app flex w-full items-center justify-between">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:font-semibol w-[32%] cursor-pointer rounded-md bg-gradient-to-r from-sky-700 to-sky-300 p-6 hover:from-sky-300 hover:to-sky-700 hover:text-white shadow-md"
          >
            <GiSpookyHouse className="my-2.5 text-3xl font-semibold hover:text-primary" />
            <motion.h2 className="font-poppins text-xl font-semibold">
              Home for Families
            </motion.h2>
            {isOpen ? (
              <motion.div>
                <p className="font-regular mt-5 font-poppins text-base leading-7">
                  Rent a beautiful house for your family. Choose from flats in
                  societies and individual apartments
                </p>
              </motion.div>
            ) : (
              ""
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
