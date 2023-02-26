import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/navbar.scss"
import HomeHamburgerMenu from "./HomeHamburgerMenu";
const Navbar1 = () => {
  const [isNavbarSmall, setIsNavbarSmall] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsNavbarSmall(false);
    } else {
      setIsNavbarSmall(true);
    }
  };
  return (
    <nav>
      <div className={`navbar_bottom ${isNavbarSmall?"navbar-large":"navbar-small"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-5 ">
              <div className="bottom_left_logo d-block d-md-flex">
                <img  src="http://layerdrops.com/oxpitan/images/logo.png" alt="img" />
                <Link
                  className="link d-lg-block  d-none  ms-md-4"
                  to="/donatenow"
                >
                  <button>DONATE NOW</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-7 d-flex justify-content-end align-items-center">
              <ul className="bottom_lists d-none d-lg-flex justify-content-end">
                <li className="home bottom_list">
                  <Link to="/" className="bottom_link">
                    Home
                  </Link>
                </li>
                <li className="causes bottom_list">
                  <Link to="causes" className="bottom_link">
                    Causes
                  </Link>
                  <ul className="causes_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="causes" className="bottom_link">
                        Causes
                      </Link>
                    </li>
                    {/* <li className="bottom_list">
                      <Link to="causesdetail" className="bottom_link">
                        Causes Detail
                      </Link>
                    </li> */}
                    <li className="bottom_list">
                      <Link to="donatenow" className="bottom_link">
                        Donate Now
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="events bottom_list">
                  <Link to="events" className="bottom_link">
                    Events
                  </Link>
                  {/* <ul className="events_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="events" className="bottom_link">
                        Events
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="eventsdetail" className="bottom_link">
                        Events Detail
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="news bottom_list">
                  <Link to="news" className="bottom_link">
                    News
                  </Link>
                  {/* <ul className="news_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="news" className="bottom_link">
                        News
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="news/:id" className="bottom_link">
                        News Detail
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="pages bottom_list">
                  <Link to="about" className="bottom_link">
                    Pages
                  </Link>
                  <ul className="pages_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="about" className="bottom_link">
                        About
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="gallery" className="bottom_link">
                        Gallery
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="volunteer" className="bottom_link">
                        Become a Volunteer
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="ourteam" className="bottom_link">
                        Our Team
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="sponsors" className="bottom_link">
                        Sponsors
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="bottom_list">
                  <Link to="contact" className="bottom_link">
                    Contact
                  </Link>
                </li>
              </ul>
           <HomeHamburgerMenu/>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
