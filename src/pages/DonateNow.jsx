import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Donate from "../components/donation/Donate";
import "../style/donatenow.scss";
const DonateNow = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Donate Now</title>
      </Helmet>
      <section className="donate_now">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="donate_now_title">
                <h2>Donate Now</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="donate_now_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Donate />{" "}
            </div>
            <div className=" col-lg-4 col-md-12">
              <img
                className="cards"
                src="https://oxpitan-gatsby.vercel.app/static/img2-0e2d4e23ddf6de2cfc3ff871784bf4b7.jpg"
                alt=""
              />
              <div className="donate_now_card">
                <h3>
                  <Link to="causesdetail" className="cause_title_link">
                    They want to study
                  </Link>
                </h3>

                <ul>
                  <li className="causes_list">
                    <i className="fa-solid fa-bullseye"></i>Goal:
                    <span>$30,000</span>
                  </li>
                  <li className="causes_list">
                    <i className="fa-solid fa-chart-line"></i>Raised:
                    <span>25,270</span>
                  </li>
                </ul>
                <p>Raised by 25 donors</p>
              </div>
              <div className="donate_organizer">
                <img
                  src="https://layerdrops.com/oxpitan/images/author-avatar.jpg"
                  alt="img"
                />
                <div className="donate_organizer_title">
                  <span>CREATED APRIL 11, 2018</span>
                  <h4>
                    Organizer: <a href="/"> Jessica Smith</a>
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-tag"></i> Education
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>Wrightwood, Canada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateNow;
