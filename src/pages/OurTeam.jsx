import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/ourteam.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const OurTeam = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/team");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <div className="ourteam">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourteam_title">
                <h2> Our Team</h2>
                <Link to="/">
                  <button>Our Team</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="our_team">
        <div className="container">
          <div className=" row">
            <input
              type="text"
              placeholder="Search Name"
              onChange={(e) => setSearch(e.target.value)}
            />
            {data
              ?.filter((d) => {
                return search.toLowerCase() === ""
                  ? d
                  : d.name.toLowerCase().includes(search);
              })
              .map((datas) => {
                return (
                  <div className="col-lg-3 col-md-6" key={datas._id}>
                    <div className="volunteers_card volunteer_row">
                      <div className="card_image">
                        <img src={datas.image} alt="card" />
                        <div className="volunteers_icons">
                          <ul>
                            <li className="list">
                              <a href="/" className="link">
                                <div>
                                  <i className="fa-brands fa-twitter"></i>
                                </div>
                              </a>
                            </li>
                            <li className="list">
                              <a href="/" className="link">
                                <div>
                                  <i className="fa-brands fa-facebook-f"></i>
                                </div>
                              </a>
                            </li>
                            <li className="list">
                              <a href="/" className="link">
                                <div>
                                  <i className="fa-brands fa-pinterest"></i>
                                </div>
                              </a>
                            </li>
                            <li className="list">
                              <a href="/" className="link">
                                <div>
                                  <i className="fa-brands fa-instagram"></i>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="volunteers_title"
                        style={{ backgroundColor: datas.color }}
                      >
                        <h2>{datas.name}</h2>
                        <p>{datas.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section id="join">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="join_title">
                <h3>Become an Volunteer</h3>
                <p>JOIN YOUR HAND WITH US FOR A BETTER LIFE AND FUTURE</p>
                <Link to="/volunteer">
                  <button> Join Us Now</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
