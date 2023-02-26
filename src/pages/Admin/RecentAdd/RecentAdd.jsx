import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../RecentAdd/recentAdd.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState, useEffect } from "react";
import axios from "axios";
const RecentAdd = () => {
  const [datas, setDatas] = useState([]);
  const [state, setState] = useState({
    image: "",
    payment: "",
    fullName: "",
    text: "",
  });
  const [id, setId] = useState();

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/causeRecent");
    setDatas(res.data);
  };

  useEffect(() => {
    addData();
    getData();
  }, []);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.image || !state.payment || !state.fullName || !state.text)
      return;
    await axios.post("http://localhost:8080/causeRecent", state);
    getData();
    setState({
      image: "",
      payment: "",
      fullName: "",
      text: "",
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
    resolver: yupResolver(adminSchema),
  });

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/causeRecent/${id}`);
    getData();
  };

  const handleEditClick = (data) => {
    setState({
      image: data.image,
      payment: data.payment,
      fullName: data.fullName,
      text: data.text,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/causeRecent/${id}`, state);
    getData();
    setState({
      image: "",
      payment: "",
      fullName: "",
      text: "",
    });
  };
  return (
    <>
      {" "}
      <Helmet>
        <title>RecentAdd</title>
      </Helmet>
      <section className="recentAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recentAdd_title">
                <h2>RecentAdd</h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_table">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Payment</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Text</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data) => {
                    return (
                      <tr key={data._id}>
                        <td>
                          <img
                            src={data.image}
                            style={{ height: 100 }}
                            alt="alt"
                          />
                        </td>
                        <td>{data.payment}</td>
                        <td>{data.fullName}</td>
                        <td>{data.text}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(data._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(data)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_add">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add data</h2>
                <input
                  type="text"
                  {...register("image")}
                  onChange={handleChange}
                  value={state.image}
                  name="image"
                  placeholder="Add Image..."
                />
                {errors.image ? (
                  <span style={{ color: "red" }}>{errors.image.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="number"
                  {...register("payment")}
                  onChange={handleChange}
                  value={state.payment}
                  name="payment"
                  placeholder="Add Payment..."
                />
                {errors.payment ? (
                  <span style={{ color: "red" }}>{errors.payment.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("fullName")}
                  onChange={handleChange}
                  value={state.fullName}
                  name="fullName"
                  placeholder="Add FullName..."
                />
                {errors.fullName ? (
                  <span style={{ color: "red" }}>
                    {errors.fullName.message}
                  </span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("text")}
                  onChange={handleChange}
                  value={state.text}
                  name="text"
                  placeholder="Add text..."
                />
                {errors.text ? (
                  <span style={{ color: "red" }}>{errors.text.message}</span>
                ) : (
                  <></>
                )}
                <div className="buttons">
                  {" "}
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => addData()}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => updateData(id)}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentAdd;
