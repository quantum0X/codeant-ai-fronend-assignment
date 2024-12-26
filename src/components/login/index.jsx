import React from "react";
import { LoginForm } from "./LoginForm";
import BgImg from "../../assets/img-1.png";
import SubtractImg from "../../assets/Subtract.png";

const Login = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="relative hidden lg:flex w-1/2  items-center justify-center">
        <img src={BgImg} alt="icon" className="h-96" />
        <img
          src={SubtractImg}
          alt="icon"
          className="absolute left-0 bottom-0 h-72"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAFAFA]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
