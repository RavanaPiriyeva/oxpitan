import React, { useState } from "react";
import donationLogo from "../../media/smalllogo.png";
import "../Home/dohelp.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import axios from "axios";
const DoHelp = () => {
  const [state, setState] = useState({
    value: "",
    fullName: "",
    email: "",
    location: "",
    comment: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.value ||
      !state.fullName ||
      !state.email ||
      !state.location ||
      !state.comment
    )
      return;
    await axios.post("http://localhost:8080/homedonate", state);
    setState({
      value: "",
      fullName: "",
      email: "",
      location: "",
      comment: "",
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
    <div className="dohelp">
      <div className="container"><div className="row">
        <div className="col-lg-12 col-md-12 col-xl-6">
          <img
            src="https://oxpitan-gatsby.vercel.app/static/helping-img-549e82105b5ffb59be5191a04a18fb83.jpg"
            alt="help-img" className="w-100"
          />
          <br />
          <img src={donationLogo} alt="" />
          <h2>Charity activities are taken place around the world</h2>
          <p>
            Aliq is notm hendr erit a augue insu image pellen tes que id erat
            quis simply free text sollicitud. Lorem ipsum dolor sit not amet,
            consectetur adipiscing ullam blandit simply free text hendrerit
            faucibus suspendisse.
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-xl-6">
          <form className="dohelp_form" onSubmit={()=>addData()}>
            <div className="dohelp_form_title">
              <img
                src="http://layerdrops.com/oxpitan/images/section-icon.png"
                alt="img"
              />
              <h2>Make a Donation</h2>
              <p>DONATE US NOW</p>
            </div>

            <input
              type="text"
              {...register("value")}
              onChange={handleChange}
              value={state.value}
              name="value"
              placeholder="Insert Custom Value..."
            />
            {errors.value? (
              <span style={{ color: "red" }}>{errors.value.message}</span>
            ) : (
              <></>
            )}

            <input
              type="text"
              {...register("fullName")}
              onChange={handleChange}
              value={state.fullName}
              name="fullName"
              placeholder="Full Name..."
            />
            {errors.fullName ? (
              <span style={{ color: "red" }}>{errors.fullName.message}</span>
            ) : (
              <></>
            )}

           
            <input
              type="text"
              {...register("email")}
              onChange={handleChange}
              value={state.email}
              name="email"
              placeholder="Email Address..."
            />
            {errors.email ? (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            ) : (
              <></>
            )}
            <input
              type="text"
              {...register("location")}
              onChange={handleChange}
              value={state.location}
              name="location"
              placeholder="Location..."
            />
            {errors.location? (
              <span style={{ color: "red" }}>{errors.location.message}</span>
            ) : (
              <></>
            )}

            <textarea
              {...register("comment")}
              onChange={handleChange}
              value={state.comment}
              name="comment"
              placeholder="Leave a Comment...   "
            ></textarea>
            {errors.comment ? (
              <span style={{ color: "red" }}>{errors.comment.message}</span>
            ) : (
              <></>
            )}
        
            <button  onChange={handleSubmit(onSubmit)}>Continue Now</button>
          </form>
        </div>
      </div></div>
      
    </div>
  );
};

export default DoHelp;
