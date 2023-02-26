import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/events.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/event");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [sorted, setSorted] = useState({ sorted: "day", reversed: false });
  const sorteddata = () => {
    setSorted({ sorted: "day", reversed: !sorted.reversed });
    const datacopy = [...data];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.day - a.day;
      } else {
        return a.day - b.day;
      }
    });
    setData(datacopy);
  };

  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <section className="event">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events_title">
                <h2>Events</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events_area">
        <div className="container">
          <button onClick={sorteddata}>Sorted</button>
          <div className="row">
            {data.map((datas) => {
              return (
                <div className="col-lg-4 col-md-6" key={datas._id}>
                  <div className="events_card">
                    <img src={datas.image} alt="img" />
                    <span
                      style={{ backgroundColor: datas.color }}
                      className="date_of_card "
                    >
                      <span className="day_date">{datas.day}</span>
                      <span className="month_date">{datas.month}</span>
                    </span>
                    <div className="events_text">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${datas._id}`}
                      >
                        {" "}
                        <h3
                          className="events_title1"
                          style={{ color: datas.color }}
                        >
                          {datas.title}
                        </h3>
                      </Link>

                      <ul>
                        <li
                          className="events_list1"
                          style={{ color: datas.color }}
                        >
                          {datas.watch}
                        </li>
                        <li
                          className="events_list1"
                          style={{ color: datas.color }}
                        >
                          {datas.name}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
