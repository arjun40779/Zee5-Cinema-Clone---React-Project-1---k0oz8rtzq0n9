import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";
import CloseBtn from "../components/CloseBtn";
import { useUserContext } from "../context/UserContext";
export default function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const user = { name: "", email: "", password: "", terms: false };
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: user,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      register(values);
    },
  });
  const { setIsLoggedIn, setUser, setToken } = useUserContext();
  const register = async (values) => {
    const userData = { ...values, appType: "ott" };
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          projectID: "k0oz8rtzq0n9",
          "User-Agent": "PostmanRuntime/7.32.3",
          Accept: "*/* ",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await res.json();
    console.log(userData, data);
    if (data.status == "success") {
      setIsLoggedIn(true);
      setUser(data.data);
      setToken(data.token);

      navigate("/");
    } else {
      setIsLoggedIn(false);
      setMessage(data.message);
    }
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="signup">
        <CloseBtn />
        <h1>Create a new account</h1>
        <p>
          Create an account to continue enjoying uninterrupted video and
          personalised experience
        </p>
        <div className="form-input">
          {errors.name && touched.name ? (
            <span className="form-errors">{errors.name}</span>
          ) : null}
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            className="name"
          ></input>
        </div>
        <div className="form-input">
          {errors.email && touched.email ? (
            <span className="form-errors">{errors.email}</span>
          ) : null}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your Email"
            className="email"
          ></input>
        </div>
        <div className="form-input">
          {errors.password && touched.password ? (
            <span className="form-errors">{errors.password}</span>
          ) : null}
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter password"
            className="password"
          ></input>
        </div>
        <div className="form-input">
          {errors.Cpassword && touched.Cpassword ? (
            <span className="form-errors">{errors.Cpassword}</span>
          ) : null}
          <input
            type="password"
            name="Cpassword"
            value={values.Cpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Re-enter password"
            className="password"
          ></input>
        </div>
        <div className="form-input">
          {errors.terms && touched.terms ? (
            <span className="form-errors">{errors.terms}</span>
          ) : null}

          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              value={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              className="checkbox"
            ></input>
            <label htmlFor="checkbox">
              <p className="checkbox__p">
                By proceeding you agree to our
                <a href="https://www.zee5.com/termsofuse">
                  Terms of Services & Privacy Policy.
                </a>
              </p>
            </label>
          </div>
        </div>
        <p id="err-msg">{message}</p>
        <button className="btn__signup active-btn">Create account</button>
        <p>
          Already registered? <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}
