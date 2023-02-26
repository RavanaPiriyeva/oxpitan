import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Login = () => {
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
        <title>Login</title>
      </Helmet>
      Login
    </div>
  );
};

export default Login;
