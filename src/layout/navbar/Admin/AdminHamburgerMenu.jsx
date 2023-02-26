import React, { useState } from "react";
import "../Admin/adminNavbar.scss";
import Connection from "../../../components/ConnectIcon/ConnectIcon";
import { Link } from "react-router-dom";

const AdminHamburgerMenu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div
        className="hamburger_admin_icon d-block w-0 h-0 px-3 py-2 d-lg-none "
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
          <Link to="/admin" id="admin_link">
            HomeAdmin
          </Link>
          <li className="py-3">
            <div className="d-flex justify-content-between ">
              {" "}
              <Link to="causeAdd" id="admin_link">
                CauseAdd
              </Link>
            </div>
          </li>
          <li className="py-3">
            <Link to="eventAdd" id="admin_link">
              EventAdd
            </Link>
          </li>
          <li className="py-3">
            <Link to="galleryAdd" id="admin_link">
              GalleryAdd
            </Link>
          </li>
          <li className="py-3">
            <div className="d-flex justify-content-between">
              {" "}
              <Link to="newsAdd" id="admin_link">
                NewsAdd
              </Link>
            </div>
          </li>
          <li className="py-3">
            <Link to="readAdd" id="admin_link">
              ReadAdd
            </Link>
          </li>
          <li className="py-3">
            <Link to="recentAdd" id="admin_link">
              RecentAdd
            </Link>
          </li>
          <li className="py-3">
            <Link to="teamAdd" id="admin_link">
              TeamAdd
            </Link>
          </li>
          <li className="py-3">
            <Link to="volunteerAdd" id="admin_link">
              VolunteerAdd
            </Link>
          </li>

          <li className="py-3">
            <Connection />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHamburgerMenu;
