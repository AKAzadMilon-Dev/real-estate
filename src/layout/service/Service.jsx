import React, { useState } from "react";
import Container from "../../components/shared/Container";
import { GiSpookyHouse } from "react-icons/gi";
import { motion } from "framer-motion";
import Heading from "../../components/shared/Heading";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-24">
      <Heading title="Our Service" />
      <p className="font-regular mt-6 mb-16 flex w-full justify-center font-poppins text-base text-txColor">
        When it comes to real estate & properties, we’re happy every step of the
        way
      </p>
      <Container>
        <div className="app flex w-full items-center justify-between">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:font-semibol w-[32%] cursor-pointer rounded-md bg-gradient-to-r from-primary to-secondary p-6 shadow-md hover:from-secondary hover:to-primary hover:text-white"
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
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:font-semibol w-[32%] cursor-pointer rounded-md bg-gradient-to-r from-primary to-secondary p-6 shadow-md hover:from-secondary hover:to-primary hover:text-white"
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
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:font-semibol w-[32%] cursor-pointer rounded-md bg-gradient-to-r from-primary to-secondary p-6 shadow-md hover:from-secondary hover:to-primary hover:text-white"
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
