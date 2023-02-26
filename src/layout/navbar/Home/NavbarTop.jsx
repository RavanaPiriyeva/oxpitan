import React from "react";
import { Link } from "react-router-dom";
import "../Home/navbar.scss"


const NavbarTop = () => {
  return (
    <>
     <div className="navbar_top">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-left-list">
                <li className="list">
                  <a href="/" className="link">
                    <div className="navbar_top_left">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    needhelp@oxpitan.com
                  </a>
                </li>
                <li className="list ">
                  <a href="/" className="link d-block ms-3">
                    <i className="fa-solid fa-phone telephone"></i> 666 888 0
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-right-list">
                <li className="list">
                  <Link to="login" className="link">
                    Login
                  </Link>
                </li>
                <li className="list">
                  <Link to="register" className="link">
                    Register
                  </Link>
                </li>
                <li className="list">
                  <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="link">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.facebook.com/" className="link">
                    <div>
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.pinterest.com/login/" className="link">
                    <div>
                      <i className="fa-brands fa-pinterest"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.instagram.com/" className="link">
                    <div>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarTop