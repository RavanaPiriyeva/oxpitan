import React from "react";
import { Link } from "react-router-dom";
import "../Home/cause.scss";
import donationLogo from "../../media/smalllogo.png";
import { useState, useEffect } from "react";
import axios from "axios";
const Cause = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/cause");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [sorted, setSorted] = useState({ sorted: "goal", reversed: false });
  const sorteddata = () => {
    setSorted({ sorted: "goal", reversed: !sorted.reversed });
    const datacopy = [...data];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.goal - a.goal;
      } else {
        return a.goal - b.goal;
      }
    });
    setData(datacopy);
  };
  return (
    <div className="cause">
      <div className="container">
        <div className="cause_title">
          <img src={donationLogo} alt="logo"/>
          <h2>Latest Causes</h2>
        </div>
        <button onClick={sorteddata}>Sorted</button>
        <div className="row">
          {data?.map((datas) => {
            return (
              <div className="cards col-lg-4 col-md-6" key={datas._id}>
                <img src={datas.image} alt="" />
                <div className="cause_card">
                  <h3>
                    <Link to={`${datas._id}`} className="cause_title_link">
                      {datas.title}
                    </Link>
                  </h3>
                  <p>{datas.text}</p>
                  <ul>
                    <li className="causes_list">
                      <i className="fa-solid fa-bullseye"></i>Goal:
                      <span>${datas.goal},000</span>
                    </li>
                    <li className="causes_list">
                      <i className="fa-solid fa-chart-line"></i>Raised:
                      <span>{datas.raised}0</span>
                    </li>
                  </ul>
                  <Link to="/donatenow" className="cause_link">
                    <button>Donate Now</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cause;
