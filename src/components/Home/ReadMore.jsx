import React from "react";
import { Link } from "react-router-dom";
import "../Home/readmore.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const ReadMore = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/read");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="readmore">
      <div className="container">
        <div className="row g-2">
          {data?.map((datas)=>{
            return(  <div className="col-lg-4 col-md-4 col-sm-12  ">
            <div className="read_card1">
              <img
                src={datas.image}
                alt="card1"
              />
              <div className="card1_color" style={{backgroundColor:datas.color}}></div>
            <h3>{datas.title}</h3>
              <Link to="/events" className="read_link">
                <button>Read More</button>
              </Link>
            </div>
          </div>)
          })}
        
        
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
