import React from "react";
import { Helmet } from "react-helmet-async";
import "../AdminHome/adminHome.scss"
const AdminHome = () => {
  return (
    <>
      <Helmet>
        <title>AdminHome</title>
      </Helmet>
      <section className="adminHome">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="adminHome_title">
                <h2>AdminHome</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
