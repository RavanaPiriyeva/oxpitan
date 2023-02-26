import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home/navbar.scss";
import Connection from "../../../components/ConnectIcon/ConnectIcon"
const HomeHamburgerMenu = () => {
  const [menu, setMenu] = useState(false);
  const [cause, setCause] = useState(false);
  const [page, setPage] = useState(false);

  return (
    <div>
      <div
        className="hamburger_icon d-block w-0 h-0 px-3 py-2 d-lg-none "
        onClick={() => {
          setMenu(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`sidebar_menu ${menu ? "menu-show" : "menu-hide"}`}>
        <div
          className="text-light text-end fs-1 px-3 "
          onClick={() => {
            setMenu(false);
          }}
        >
          <i className="close-icon fa-solid fa-xmark"></i>
        </div>
        <ul className="px-3">
          <li className="py-3" >
            <Link to="/">Home</Link>
          </li>
          <li className="py-3">
            <div className="d-flex justify-content-between ">
              {" "}
              <Link to="causes">Causes</Link>
              <i
                className="text-light fa-solid fa-plus"
                onClick={() => {
                  setCause(!cause);
                }}
              ></i>
            </div>

            <ul className={`cause_menu overflow-hidden ${cause ? "cause-show" : "cause-hide"}`}>
              <li className="px-4 show-list">
                <Link to="causes">Causes</Link>
              </li>

              <li className="px-4 show-list">
                <Link to="donatenow">Donate Now</Link>
              </li>
            </ul>
          </li>
          <li className="py-3">
            <Link to="events">Events</Link>
          </li>
          <li className="py-3">
            <Link to="news">News</Link>
          </li>
          <li className="py-3">
            <div className="d-flex justify-content-between">
              {" "}
              <Link to="about">Pages</Link>
              <i
                className="text-light fa-solid fa-plus"
                onClick={() => {
                  setPage(!page);
                }}
              ></i>
            </div>

            <ul className={` page_menu ${page ? "page-show" : "page-hide"}`}>
              <li className="px-4 show-list">
                <Link to="about">About</Link>
              </li>
              <li className="px-4 show-list">
                <Link to="gallery">Gallery</Link>
              </li>
              <li className="px-4 show-list">
                <Link to="volunteer">Become a Volunteer</Link>
              </li>
              <li className="px-4 show-list">
                <Link to="ourteam">Our Team</Link>
              </li >
              <li className="px-4 show-list">
                <Link to="sponsors">Sponsors</Link>
              </li>
            </ul>
          </li>
          <li className="py-3">
            <Link to="contact">Contact</Link>
          </li>
          <li className="py-3"><Connection/> </li>
          <li className="py-3 text-center"><Link to="/donatenow"><button>Donate Now</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHamburgerMenu;
