import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../style/gallery.scss";
import { Link } from "react-router-dom";
import "animate.css";
import { useContext } from "react";
import { mainContext } from "../Context/ContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { data } = useContext(mainContext);
  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="galerry_title">
                <h2>Gallery</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_area">
        <div className="container">
          {" "}
          <div className="row">
            {data?.map((datas) => {
              return (
                <div className="col-lg-4 col-md-6" key={datas._id}>
                  <div className="gallery_photo">
                    <img src={datas.image} alt="img" />
                    <div className="gallery_color"></div>
                    <button
                      type="button"
                      class="modal_button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-body">
                          <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                          >
                            <SwiperSlide className="modal_slide1"></SwiperSlide>
                            <SwiperSlide className="modal_slide2"></SwiperSlide>
                            <SwiperSlide className="modal_slide3"></SwiperSlide>
                            <SwiperSlide className="modal_slide4"></SwiperSlide>
                            <SwiperSlide className="modal_slide5"></SwiperSlide>
                            <SwiperSlide className="modal_slide6"></SwiperSlide>
                          </Swiper>
                        </div>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
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

export default Gallery;
