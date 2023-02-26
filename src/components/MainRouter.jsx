import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Home/Navbar";
import NavbarTop from "../layout/navbar/Home/NavbarTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import SquareLoader from "react-spinners/SquareLoader";

const MainRouter = () => {
  
  const override: CSSProperties = {
    display: "flex",
    justifyContent:"center",
    margin: "0 auto",
    margintOP:"10%"
  };
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"270px"}}> <SquareLoader     color={"orange"}    cssOverride={override} loading={loading} size={40}    /></div>
       
      ) : (
        <div>
          {" "}
          <NavbarTop />
          <Navbar />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default MainRouter;
