import React from "react";
import "../donation/donate.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState } from "react";
import axios from "axios";
const Donate = () => {
  const [state, setState] = useState({
    money: 0,
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    address: "",
    country: "",
    comment: "",
    cardNumber: 0,
    mm: "",
    cvc: 0,
    billingAddress: "",
    city: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if ( !state.money ||  !state.firstName || !state.lastName ||  !state.email ||  !state.number || !state.address ||  !state.country ||
      !state.comment ||
      !state.cardNumber ||
      !state.mm ||
      !state.cvc ||
      !state.billingAddress ||
      !state.city
    ) return;
    await axios.post("http://localhost:8080/donate", state);
    setState({
      money: 0,
      firstName: "",
      lastName: "",
      email: "",
      number: 0,
      address: "",
      country: "",
      comment: "",
      cardNumber: 0,
      mm: "",
      cvc: 0,
      billingAddress: "",
      city: "",
    });
  };

  console.log(state);
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
    <form className="donate" onSubmit={()=>handleSubmit(onSubmit)}>
      <div className="your_donation">
        <h2>Enter Your Donation</h2>

        <input
          type="number"
          {...register("money")}
          onChange={handleChange}
          value={state.money}
          name="money"
          placeholder="Donation..."
        />
        {errors.money ? (
          <span style={{ color: "red", fontSize: 15 }}>
            {errors.money.message}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="personal_info">
        <h2>Personal Info</h2>
        <div className="personal_input">
          <input
            type="text"
            {...register("firstName")}
            value={state.firstName}
            onChange={handleChange}
            name="firstName"
            placeholder="First Name..."
          />
          {errors.firstName ? (
            <span style={{ color: "red" }}>{errors.firstName.message}</span>
          ) : (
            <></>
          )}
          <input
            type="text"
            {...register("lastName")}
            value={state.lastName}
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name..."
          />
          {errors.lastName ? (
            <span style={{ color: "red" }}>{errors.lastName.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="personal_input">
          <input
            type="email"
            {...register("email")}
            value={state.email}
            onChange={handleChange}
            name="email"
            placeholder="Email Address..."
          />
          {errors.email ? (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          ) : (
            <></>
          )}
          <input
            type="number"
            {...register("number")}
            value={state.number}
            onChange={handleChange}
            name="number"
            placeholder="Phone Number..."
          />
          {errors.number ? (
            <span style={{ color: "red" }}>{errors.number.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="personal_input">
          <input
            type="text"
            {...register("address")}
            value={state.address}
            onChange={handleChange}
            placeholder="Address..."
          />
          {errors.number ? (
            <span style={{ color: "red" }}>{errors.number.message}</span>
          ) : (
            <></>
          )}
          {/* <select
            aria-label="Default select example"
            {...register("country")}
            onChange={handleChange}
          >
            <option selected>Country...</option>
            <option value={state.country} name="country">
              USA
            </option>
            <option value={state.country} name="country">
              UK
            </option>
            <option value={state.country} name="country">
              PAKISTAN
            </option>
            <option value={state.country} name="country">
              BANGLADESH
            </option>
            <option value={state.country} name="country">
              INDIA
            </option>
          </select> */}
        </div>
        <textarea
          value={state.comment}
          {...register("comment")}
          onChange={handleChange}
          name="comment"
          placeholder="Leave a Comment...   "
        ></textarea>
        {errors.comment ? (
          <span style={{ color: "red" }}>{errors.comment.message}</span>
        ) : (
          <></>
        )}
      </div>
      <div className="payment_info">
        <h2>Payment Info</h2>
        <div className="payment_input">
          <input
            type="number"
            {...register("cardNumber")}
            value={state.cardNumber}
            onChange={handleChange}
            name="cardNumber"
            placeholder="Card Number..."
          />
          {errors.cardNumber ? (
            <span style={{ color: "red" }}>{errors.cardNumber.message}</span>
          ) : (
            <></>
          )}
          <input
            type="text"
            {...register("mm")}
            onChange={handleChange}
            value={state.mm}
            name="mm"
            placeholder="MM/YY..."
          />
          {errors.mm ? (
            <span style={{ color: "red" }}>{errors.mm.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="payment_input">
          <input
            type="number"
            {...register("cvc")}
            onChange={handleChange}
            value={state.cvc}
            name="cvc"
            placeholder="Card Code(CVC)..."
          />
          {errors.cvc ? (
            <span style={{ color: "red" }}>{errors.cvc.message}</span>
          ) : (
            <></>
          )}
          <input
            type="text"
            {...register("billingAddress")}
            onChange={handleChange}
            value={state.billingAddress}
            name="billingAddress"
            placeholder="Billing Address..."
          />{" "}
          {errors.billingAddress ? (
            <span style={{ color: "red" }}>
              {errors.billingAddress.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="payment_input">
          <input
            type="text"
            {...register("city")}
            onChange={handleChange}
            value={state.city}
            name="city"
            placeholder="City..."
          />
          {errors.city ? (
            <span style={{ color: "red" }}>{errors.city.message}</span>
          ) : (
            <></>
          )}
          {/* <select
           aria-label="Default select example"
           {...register("country")}
           onChange={handleChange}
           value={state.country}
           name="country"
          >
            <option selected>Country...</option>
            <option value="1">USA</option>
            <option value="2">UK</option>
            <option value="3">PAKISTAN</option>
            <option value="3">BANGLADESH</option>
            <option value="3">INDIA</option>
          </select> */}
        </div>
      </div>
      <button onClick={()=>addData()}>Donate now</button>
    </form>
  );
};

export default Donate;
