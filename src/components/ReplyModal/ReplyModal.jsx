import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState, useEffect } from "react";
import axios from "axios";
const ReplyModal = () => {
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
    // getData();
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

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    You Image:
                  </label>
                  <input
                    type="text"
                    {...register("image")}
                    onChange={handleChange}
                    value={state.image}
                    name="image"
                    class="form-control"
                    id="recipient-name"
                  />
                  {errors.image ? (
                    <span style={{ color: "red" }}>{errors.image.message}</span>
                  ) : (
                    <></>
                  )}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    onChange={handleChange}
                    value={state.fullName}
                    name="fullName"
                    class="form-control"
                    id="recipient-name"
                  />
                  {errors.fullName ? (
                    <span style={{ color: "red" }}>
                      {errors.fullName.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Comment:
                  </label>
                  <textarea
                    type="text"
                    {...register("comment")}
                    onChange={handleChange}
                    value={state.comment}
                    name="comment"
                    class="form-control"
                    id="message-text"
                  >
                    {errors.comment ? (
                      <span style={{ color: "red" }}>
                        {errors.comment.message}
                      </span>
                    ) : (
                      <></>
                    )}
                  </textarea>
                </div>
                <button onClick={() => addData()}>Send message</button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
