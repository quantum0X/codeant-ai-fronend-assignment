import React, { useState } from "react";
import { SocialButton } from "./SocialButton";
import { Azure, BitBucket, Github, Gitlab, Key } from "../../constants/Icons";
import IconImg from "../../assets/name.png";

export function LoginForm() {
  const [activeTab, setActiveTab] = useState("saas");
  return (
    <div className="">
      <div className="h-[500px] w-[672px]  space-y-4 bg-white rounded-md border">
        <div className="py-4 px-4 space-y-4">
          <img src={IconImg} alt="icon" className="h-[40px] mx-auto" />
          <div className="text-center">
            <p className="text-[32px] font-semibold">Welcome to CodeAnt AI</p>
          </div>

          <div className="w-full flex justify-center space-x-4 mb-8 border border-gray-300 bg-[#fafafa] text-lg rounded-md">
            <button
              onClick={() => setActiveTab("saas")}
              className={`w-1/2 px-6 py-2 rounded-md font-semibold ${
                activeTab === "saas" ? " bg-blue-600 text-white" : ""
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("self")}
              className={`w-1/2 px-6 py-2 rounded-md font-semibold ${
                activeTab === "self" ? " bg-blue-600 text-white " : ""
              }`}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="border-t"></div>
        <div className="w-2/3 mx-auto space-y-4 py-4 px-4">
          {activeTab === "saas" ? (
            <>
              <SocialButton icon={Github} text="Sign in with GitHub" />
              <SocialButton icon={BitBucket} text="Sign in with BitBucket" />
              <SocialButton icon={Azure} text="Sign in with Azure DevOps" />
              <SocialButton icon={Gitlab} text="Sign in with GitLab" />
            </>
          ) : (
            <>
              <SocialButton icon={Gitlab} text="Self Hosted GitLab" />
              <SocialButton icon={Key} text="Sign in with SSO" />
            </>
          )}
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-5">
        By signing up you agree to the{" "}
        <a href="/#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
