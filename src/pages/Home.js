import React from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
const Home = () => {
  return (
    <>
        <div className="max-w-[1300px] mx-auto">
            <Navbar />
            <Products />
        </div>
    </>
  );
};

export default Home;
