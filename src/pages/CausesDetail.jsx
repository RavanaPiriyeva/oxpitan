import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/causesdetail.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { format } from "date-fns";
import ConnectIcon from "../components/ConnectIcon/ConnectIcon";
const CausesDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [recent, setRecent] = useState([]);
  const [cause, setCause] = useState([]);
  const [search, setSearch] = useState("");

  const getRecent = async () => {
    const res = await axios.get("http://localhost:8080/causeRecent");
    setRecent(res.data);
  };
  const { id } = useParams();
  const getCause = async () => {
    const res = await axios.get(`http://localhost:8080/cause/` + id);
    setCause(res.data);
  };
  useEffect(() => {
    getRecent();
    getCause();
  }, []);

  return (
    <>
      <Helmet>
        <title>Causes Detail</title>
      </Helmet>
      <section className="causes_detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causes_detail_title">
                <h2>Causes Detail</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="causes_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="causes_detail_card">
                <img src={cause.image} alt="img" />
                <div className="card_bottom">
                  <div>
                    <h2>{cause.title}</h2>
                    <ul>
                      <li>
                        <i className="fa-solid fa-bullseye"></i>
                        Goal: <span>${cause.goal}</span>
                      </li>
                      <li className="causes_list">
                        <i className="fa-solid fa-chart-line"></i>Raised:
                        <span>{cause.raised}0</span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/donatenow">
                    <button>Donate now</button>
                  </Link>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
              </div>
              <div className="area_image row">
                {" "}
                <div className="col-lg-6 col-md-12">
                  <img
                    src="https://layerdrops.com/oxpitan/images/img13.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <img
                    src="https://layerdrops.com/oxpitan/images/img14.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <Comment/>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="organizer">
                <img
                  src="https://layerdrops.com/oxpitan/images/author-avatar.jpg"
                  alt="img"
                />
                <div className="organizer_title">
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

              <div className="recent_donations">
                <h2>Recent Donations</h2>
                <input
                  type="text"
                  placeholder="Search name"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {recent
                  ?.filter((r) => {
                    return search.toLowerCase() === ""
                      ? r
                      : r.fullName.toLowerCase().includes(search);
                  })
                  .map((recents) => {
                    return (
                      <div className="recent_donations_title" key={recents._id}>
                        <img src={recents.image} alt="img" />
                        <div className="recent_donations_text">
                          <span className="span">${recents.payment}</span>
                          <h4>
                            {recents.fullName}
                            <span>{recents.createdAt}</span>
                          </h4>
                          <ul>
                            <li>{recents.text}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="recent_donations_connect">
                <h2>Share Cause</h2>
                <ConnectIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CausesDetail;
