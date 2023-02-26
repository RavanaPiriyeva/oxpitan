import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/sponsors.scss";
import envato from "../media/envato.png";
const Sponsors = () => {
  useEffect(() => {
    window.scrollTo({
           top: 0,
           left: 0,
           behavior: "smooth"
         });
 },[])
  return (
    <>
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
      <section className="sponsors">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sponsors_title">
                <h2>Sponsors</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="which_sponsors">
        <div className="container">
          <div className="row">
            <div className="sponsor1 col-lg-3 col-md-12">
              <img src={envato} alt="envato" />
            </div>
            <div className="sponsor_title col-lg-9 col-md-12">
              <h3>Company name here 01</h3>
              <span>brisbane, australia</span>
              <p>
                Phasellus vehicul justo eget diam dosuere sollicitudin eu
                tincidun. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry been the industry's standard dummy text
                ever since.
              </p>
            </div>
            <div className="sponsor2 col-lg-3 col-md-12">
              <img src={envato} alt="envato" />
            </div>
            <div className="sponsor_title col-lg-9 col-md-12">
              <h3>Company name here 01</h3>
              <span>brisbane, australia</span>
              <p>
                Phasellus vehicul justo eget diam dosuere sollicitudin eu
                tincidun. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry been the industry's standard dummy text
                ever since.
              </p>
            </div>
            <div className="sponsor3 col-lg-3 col-md-12">
              <img src={envato} alt="envato" />
            </div>
            <div className="sponsor_title col-lg-9 col-md-12">
              <h3>Company name here 01</h3>
              <span>brisbane, australia</span>
              <p>
                Phasellus vehicul justo eget diam dosuere sollicitudin eu
                tincidun. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry been the industry's standard dummy text
                ever since.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
