import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import AdminNavbar from "../layout/navbar/Admin/AdminNavbar";
import NavbarTop from "../layout/navbar/Home/NavbarTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const AdminRouter = () => {
  return (
    <>
    <NavbarTop/>
    <AdminNavbar/>
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AdminRouter;
