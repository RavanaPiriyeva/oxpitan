import React, { useRef, useState } from "react";
import "../header/header.scss";
import { Link } from "react-router-dom";
import donationLogo from "../../media/smalllogo.png";
const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <section id="slide">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item slider_area active">
              <div className="slide_image">
                <img
                  src="http://layerdrops.com/oxpitan/images/slider1.jpg"
                  className="animate__animated animate__pulse"
                  alt="..."
                />
              </div>
              <div className="clip_path_color"></div>
              <div className="slide_text">
                <p> WELCOME TO OXPITAN</p>
                <h2>Lend The Helping Hand Get Involved</h2>
                <Link to="about">
                  <button>Discover more</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item slider_area">
              <div className="slide_image">
                <img
                  src="http://layerdrops.com/oxpitan/images/slider2.jpg"
                  className="animate__animated animate__pulse"
                  alt="..."
                />
              </div>
              <div className="clip_path_color"></div>
              <div className="slide_text">
                <p> WELCOME TO OXPITAN</p>
                <h2>Lend The Helping Hand Get Involved</h2>
                <Link to="about">
                  <button>Discover more</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item slider_area">
              <div className="slide_image">
                <img
                  src="http://layerdrops.com/oxpitan/images/slider3.jpg"
                  className="animate__animated animate__pulse"
                  alt="..."
                />
              </div>
              <div className="clip_path_color"></div>
              <div className="slide_text">
                <p> WELCOME TO OXPITAN</p>
                <h2>Lend The Helping Hand Get Involved</h2>
                <Link to="about">
                  <button>Discover more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-boxs">
          <div
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
            className="slide-box"
          ></div>
          <div
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="slide-box"
          ></div>
          <div
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="slide-box"
          ></div>
        </div>
      </section>

      <div className="header_bottom_area">
        <div className="header_bottom_left">
          <div>
            <img src={donationLogo} alt="" />
          </div>
          <h4 className="header_left_title">Hunger is stalking the globe</h4>
        </div>
        <div className="header_bottom_right">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="header_bottom_video">
                  <Link
                    to="https://youtu.be/-TYNA4Ztpy4"
                    className="header_video_link"
                    title="Play Video"
                  >
                    <button
                      className="header_video_button"
                      onClick={togglePlay}
                    >
                      {" "}
                      <i className="fa fa-play"></i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header_right_title">
                  <h4 className="right_title">
                    We are here to support you every step of the way.
                  </h4>
                  <p className="right_text">
                    Watch us how we take care of everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
