import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../style/volunteer.scss";
import { Link } from "react-router-dom";
import donationLogo from "../media/smalllogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios";
const Volunteer = () => {
  useEffect(() => {
    window.scrollTo({
           top: 0,
           left: 0,
           behavior: "smooth"
         });
 },[])
  const [volunteer, setVolunteer] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
    date: 0,
    occupation: "",
    message: "",
  });
  const volunteerChange = async (e) => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  };
  const volunteerData = async (id) => {
    if (
      !volunteer.fullName ||
      !volunteer.email ||
      !volunteer.number ||
      !volunteer.address ||
      !volunteer.date ||
      !volunteer.occupation ||
      !volunteer.message
    )
      return;
    await axios.post("http://localhost:8080/become", volunteer);
    setVolunteer({
      fullName: "",
      email: "",
      number: "",
      address: "",
      date: "",
      occupation: "",
      message: "",
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    volunteerData();
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
        <title>Volunteer</title>
      </Helmet>
      <section className="volunteer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="volunteer_title">
                <h2>Become A Volunteer</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="volunteer_area">
        <div className="container">
          <div className="volunteer_title">
            <img src={donationLogo} alt="img" />
            <h2>Register now</h2>
            <h6>JOIN US NOW</h6>
          </div>
          <div className="row">
            <div className="left_area col-lg-6 col-md-12">
              <img
                src="http://layerdrops.com/oxpitan/images/form-img.jpg"
                alt="img"
              />
              <h4>Requirements</h4>
              <p>
                Aliquam hendrerit a augue insu image pellentes que id erat quis
                sollicitud null mattis Ipsum is simply dummy typesetting
                industry. Alienum phaedrum torquatos nec eu, vis detraxit
                periculis ex, nihil expetendis in meifn pericula euripidis, hinc
                partem ei est. Eos ei nisl graecis, aperiri consequat anlorem
                tincidunt vix at
              </p>
              <p>
                <i className="fa-solid fa-check"></i> Eos ei nisl graecis vix
                aperiri consequat
              </p>
              <p>
                <i className="fa-solid fa-check"></i> Alienum phaedrum torquatos
              </p>
              <p>
                <i className="fa-solid fa-check"></i> Dius lorem tincidunt vixat
              </p>
              <div className="become_contact">
                <div className="row text-center text-md-start">
                <div className="col-12 col-md-6 ">
                  <h4>Call us</h4>
                  <span>
                    <a href="/">666 888 0000</a>
                  </span>
                </div>
                <div className="col-12 col-md-6 ">
                  <h4>Send email</h4>
                  <span>
                    <a href="/">needhelp@oxpitan.com</a>
                  </span>
                </div>
                </div>
               
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {" "}
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  {...register("fullName")}
                  onChange={volunteerChange}
                  value={volunteer.fullName}
                  name="fullName"
                  placeholder="Full Name..."
                />
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
                  onChange={volunteerChange}
                  value={volunteer.email}
                  name="email"
                  placeholder="E-mail..."
                />
                {errors.email ? (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="number"
                  {...register("number")}
                  onChange={volunteerChange}
                  value={volunteer.number}
                  name="number"
                  placeholder="Phone number..."
                />
                {errors.number ? (
                  <span style={{ color: "red" }}>{errors.number.message}</span>
                ) : (
                  <></>
                )}
                <input
                  type="text"
                  {...register("address")}
                  onChange={volunteerChange}
                  value={volunteer.address}
                  name="address"
                  placeholder="Adress..."
                />
                {errors.address ? (
                  <span style={{ color: "red" }}>{errors.address.message}</span>
                ) : (
                  <></>
                )}
                <input
                  type="number"
                  {...register("date")}
                  onChange={volunteerChange}
                  value={volunteer.date}
                  name="date"
                  placeholder="Date of Brith..."
                />
                {errors.date ? (
                  <span style={{ color: "red" }}>{errors.date.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("occupation")}
                  onChange={volunteerChange}
                  value={volunteer.occupation}
                  name="occupation"
                  placeholder="Occupation..."
                />
                {errors.occupation ? (
                  <span style={{ color: "red" }}>
                    {errors.occupation.message}
                  </span>
                ) : (
                  <></>
                )}
                <textarea
                  type="text"
                  {...register("message")}
                  onChange={volunteerChange}
                  value={volunteer.message}
                  name="message"
                  placeholder="Write a message..."
                />
                {errors.message ? (
                  <span style={{ color: "red" }}>{errors.message.message}</span>
                ) : (
                  <></>
                )}
                <button onClick={()=>volunteerData()}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
