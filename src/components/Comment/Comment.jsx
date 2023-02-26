import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState, useEffect } from "react";
import "../Comment/comment.scss";
import axios from "axios";
import ReplyModal from "../ReplyModal/ReplyModal";
const Comment = () => {
  const [state, setState] = useState({
    image: "",
    fullName: "",
    email: "",
    comment: "",
  });
  const handleChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.fullName || !state.email || !state.comment) return;
    await axios.post("http://localhost:8080/causeComment", state);
    getData();
    setState({
      image: "",
      fullName: "",
      email: "",
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

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/causeComment");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="causes_detail_comment ">
      <h2>Comments</h2>
      {data?.map((datas) => {
        return (
          <div className="detail_comment_bottom">
            <img src={datas.image} alt="img" />
            <div className="bottom_title">
              <div className="title_left">
                <div className="left">
                  <h4>{datas.fullName}</h4>
                  {/* <span >{format(datas.createdAt, 'dd/mm/yyyy')}</span> */}
                  <span>{datas.createdAt}</span>
                </div>
                  <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Reply</button>
              </div>
              <p>{datas.comment}</p>
            </div>
          </div>
        );
      })}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Leave a Comment</h3>
        
          <input
            type="text"
            {...register("image")}
            onChange={handleChange}
            value={state.image}
            name="image"
            placeholder="Your image..."
          />
          {errors.image ? (
            <span style={{ color: "red" }}>{errors.image.message}</span>
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
      

        <textarea
          type="text"
          {...register("comment")}
          onChange={handleChange}
          value={state.comment}
          name="comment"
          placeholder="Leavee a Comment..."
        />
        {errors.comment ? (
          <span style={{ color: "red" }}>{errors.comment.message}</span>
        ) : (
          <></>
        )}
        <button onClick={() => addData()}>submit now</button>
      </form>
      <ReplyModal/>
    </div>

  );
};

export default Comment;
