import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/eventsDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EventsDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const getEvent = async () => {
    const res = await axios.get(`http://localhost:8080/event/` + id);
    setEvent(res.data);
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <Helmet>
        <title>Events Detail</title>
      </Helmet>
      <section className="events_detail">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events_detail_title">
                <h2>Events Detail</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events_detail_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <img src={event.image} alt="img" />
              <span
                className="date_of_card card2"
                style={{ backgroundColor: event.color }}
              >
                <span className="day_date">{event.day}</span>
                <span className="month_date">{event.month}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="events_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="detail_left">
                <h3>{event.title}</h3>
                <p>{event.text}</p>
                <h3>Event Requirements</h3>
                <p>{event.requirements}</p>
                <Link to="/volunteer">
                  <button>Register Now</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="detail_right">
                <h3>Event Details</h3>
                <ul class="detail_list">
                  <li>
                    <span className="span1">Starting Time:</span> {event.watch}
                  </li>
                  <li>
                    <span className="span2">Date:</span>
                    {event.date}
                  </li>
                  <li>
                    <span className="span3">Category:</span>
                    {event.category}
                  </li>
                  <li>
                    <span className="span4">Phone:</span>
                    {event.phone}
                  </li>
                  <li>
                    <span className="span5">Website:</span>
                    {event.website}
                  </li>
                  <li>
                    <span className="span6">Location:</span>
                    {event.location}
                  </li>
                </ul>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96753.25799868624!2d-74.077644!3d40.728157!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sus!4v1676124329284!5m2!1sen!2sus"
                  style={{ width: "100%", height: "60vh" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsDetail;
