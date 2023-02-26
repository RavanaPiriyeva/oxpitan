import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Register = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      Register
    </div>
  );
};

export default Register;
