import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HelpUs from "../components/Home/HelpUs";
import Volunteers from "../components/Home/Volunteers";
import donationLogo from "../media/smalllogo.png";
import "../style/_about.scss";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);

  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const res = await axios.get("http://localhost:8080/aboutList");
  //   setData(res.data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="abouts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_title">
                <h2>About</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_area_photo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/about-img-0dad1207dc947a472f1b58d99184edc9.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about_area">
        <div className="container">
          <div className="row">
            <div className="about_left col-lg-5 col-md-12">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/about-img2-0c4d5c8326b43a11fa5db01800ab9ad5.jpg"
                alt="img"
              />
            </div>
            <div className="about_right col-lg-7 col-md-12">
              <img src={donationLogo} alt="ilogo" />
              <h3>Discover About Oxpitan</h3>
              <h6>LEARN ABOUT NON PROFIT AGENCY</h6>
              <p>
                Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien
                nunced amet ultrices, dolores sit ipsum velit purus aliquet,
                massa fringilla leo orcium dolors sit amet elit magnis amet
                ultrices lorem ipsum is simply free text purusrfed aliquet.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Volunteers />
      <section className="about_question">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={donationLogo} alt="ilogo" />
              <h3>Have any Question?</h3>
              <h6>FREQUENTLY ASKED QUESTIONS</h6>
              <img
                className="about_image"
                src="https://oxpitan-gatsby.vercel.app/static/faq-img-685ecd7d1075dceeaa8d482dcb00c566.jpg"
                alt="img"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <div
                  className="d-flex justify-content-between px-4  py-4"
                  style={{ backgroundColor: "white" }}
                >
                  <h5>Make a difference in the life of a child</h5>
                  <i
                    class="py-1 fa-solid fa-plus"
                    onClick={() => {
                      setText1(!text1);
                    }}
                  ></i>
                </div>

                <p className={`px-4 text1 ${text1 ? "block" : "none"}`}>
                  Suspendisse finibus urna mauris, vitae consequat quam blandit
                  vel. Vestibulum leo ligula, molestie ullamcorper vulputate
                  vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                  metus. There are many variations of eration in some form.s
                </p>
              </div>
              <div>
                <div
                  className="d-flex justify-content-between px-4  py-4"
                  style={{ backgroundColor: "white" }}
                >
                  <h5>Let’s do the right thing now</h5>
                  <i
                    class="py-1 fa-solid fa-plus"
                    onClick={() => {
                      setText2(!text2);
                    }}
                  ></i>
                </div>

                <p className={`px-4 text2 ${text2 ? "block" : "none"}`}>
                  Suspendisse finibus urna mauris, vitae consequat quam blandit
                  vel. Vestibulum leo ligula, molestie ullamcorper vulputate
                  vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                  metus. There are many variations of eration in some form.s
                </p>
              </div>
              <div>
                <div
                  className="d-flex justify-content-between px-4  py-4"
                  style={{ backgroundColor: "white" }}
                >
                  {" "}
                  <h5>Join your hand with us for a better life</h5>
                  <i
                    class="py-1 fa-solid fa-plus"
                    onClick={() => {
                      setText3(!text3);
                    }}
                  ></i>
                </div>

                <p className={`px-4 text3 ${text3 ? "block" : "none"}`}>
                  Suspendisse finibus urna mauris, vitae consequat quam blandit
                  vel. Vestibulum leo ligula, molestie ullamcorper vulputate
                  vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                  metus. There are many variations of eration in some form.s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HelpUs />
    </>
  );
};

export default About;
