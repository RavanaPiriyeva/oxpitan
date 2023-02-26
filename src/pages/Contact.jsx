import React from "react";
import { Helmet } from "react-helmet-async";
import donationLogo from "../media/smalllogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/contact.scss";
import ConnectIcon from "../components/ConnectIcon/ConnectIcon";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [state, setState] = useState({
    fullName: "",
    email: "",
    number: 0,
    message: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addData = async () => {
    if (!state.fullName || !state.email || !state.number || !state.message)
      return;
    await axios.post("http://localhost:8080/connect", state);
    setState({
      fullName: "",
      email: "",
      number: 0,
      message: "",
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    addData();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact_title">
                <h2>Contact</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_area">
        <div className="container">
          <div className="row">
            <div className="contact_left col-lg-6 col-md-12">
              <img src={donationLogo} alt="ilogo" />
              <h2>Get in Touch With Us</h2>
              <h6>WRITE A MESSAGE</h6>
              <p>
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis sollicitud. Lorem ipsum is simply free text dolor sit
                amet, consectetur adipiscing ullam blandit hendrerit faucibus
                suspendisse.
              </p>
              <ConnectIcon />
            </div>
            <div className="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form_top">
                  <input
                    type="text"
                    {...register("fullName")}
                    onChange={handleChange}
                    value={state.fullName}
                    name="fullName"
                    placeholder="Full Name..."
                  />{" "}
                  <br />
                  {errors.fullName ? (
                    <span style={{ color: "red" }}>
                      {errors.fullName.message}
                    </span>
                  ) : (
                    <></>
                  )}
                  <input
                    type="email"
                    {...register("email")}
                    onChange={handleChange}
                    value={state.email}
                    name="email"
                    placeholder="E-mail..."
                  />
                  {errors.email ? (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  ) : (
                    <></>
                  )}
                </div>

                <input
                  type="number"
                  {...register("number")}
                  onChange={handleChange}
                  value={state.number}
                  name="number"
                  placeholder="Phone number..."
                />
                {errors.number ? (
                  <span style={{ color: "red" }}>{errors.number.message}</span>
                ) : (
                  <></>
                )}

                <textarea
                  type="text"
                  {...register("message")}
                  onChange={handleChange}
                  value={state.message}
                  name="message"
                  placeholder="Write a message..."
                />
                {errors.message ? (
                  <span style={{ color: "red" }}>{errors.message.message}</span>
                ) : (
                  <></>
                )}
                <button onClick={() => addData()}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="contact_about">
                {" "}
                <h2>About</h2>
                <p>
                  Lorem ipsum is simply free text dolor sit amet, duise
                  consectetur
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 ">
              <div className="contact_address">
                {" "}
                <h2>Address</h2>
                <p>
                  660 broklyn street , 88 new york, United states of america
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact_number">
                {" "}
                <h2>Contact</h2>
                <a
                  href="https://preview.themeforest.net/item/oxpitan-gatsby-react-nonprofit-charity-template/full_screen_preview/30017712"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <p>needhelp@oxpitan.com </p>
                </a>
                <p>666 888 000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96753.25799868624!2d-74.077644!3d40.728157!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sus!4v1676124329284!5m2!1sen!2sus"
        style={{ width: "100%", height: "100vh" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
