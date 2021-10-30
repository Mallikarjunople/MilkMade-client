import React, { Fragment, useState, useContext } from "react";
import { loginReq } from "../auth/fetchApi";
import { LayoutContext } from "../index";
import "./main.css";


const AdminLogin = (props) => {

  const { data: layoutData, dispatch: layoutDispatch } = useContext(
    LayoutContext
  );

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });

  const alert = (msg) => <div className="text-md text-white">{msg}</div>;

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      console.log(responseData)
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token && responseData.userId.role) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        localStorage.setItem("loggedInRole",JSON.stringify(responseData.userId.role))
        window.location.href = "/admin/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid bg-gray-200 bg-main" >
        <div className="text-center  mb-6 text-white font-weight-bolder heading-main">MILKMADE</div>
      <div className="text-center text-2xl text-white font-bold my-5">Admin Login</div>
     
      <form className="space-y-4">
        <div className="flex flex-col my-3">
          <label htmlFor="name" className=" text-white text-lg font-bold">
            Email address
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
            type="text"
            id="name"
            className={`${
              !data.error ? "" : "border-red-500"
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col  my-3">
          <label htmlFor="password" className="text-white text-lg font-bold">
            Password
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.password}
            type="password"
            id="password"
            className={`${
              !data.error ? "" : "border-red-500"
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
       <div style={{marginTop:"10%"}} className="centerize">
        <div
          onClick={(e) => formSubmit()}
          style={{ background: "#303031",width:'30%' }}
          className="font-medium px-4 py-5 text-white text-center cursor-pointer text-2xl  font-bold"
        >
          Login
        </div>
        </div>
      </form>
    </div>
  )
};

export default AdminLogin;
