import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/news.scss";
import axios from "axios";
import { useState, useEffect } from "react";
const News = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/news");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>
      <section className="new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news_title">
                <h2>News</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_area">
        <div className="container">
          <div className="row">
            {data?.map((datas) => {
              return (
                <div className="col-lg-6 col-md-12" key={datas._id}>
                  <div className="news_card">
                    <span className="news_of_card ">
                      <span
                        className="news_date card1"
                        style={{ backgroundColor: datas.color }}
                      >
                        {datas.date}
                      </span>
                    </span>
                    <img src={datas.image} alt="img" />
                    <div className="news_text">
                      <Link to={`${datas._id}`} className="news_link">
                        <h3 className="news_title1">{datas.title}</h3>
                      </Link>
                      <p>{datas.text}</p>
                      <Link to={`${datas._id}`}>
                        <button>Read More</button>
                      </Link>
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

export default News;
